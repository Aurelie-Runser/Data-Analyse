<script setup>
// import éléments de vue
import { onMounted, ref, reactive } from "vue"
// import leaflet
import * as Leaflet from "leaflet"
// css leaflet
import "leaflet/dist/leaflet.css"

// canvas leaflet pour la carte
let titleLayer = Leaflet.titleLayer
// initialisation de la carte sous forme de ref
let map = ref()

// liste des régions
let listeReg = ref()
// région sélectionné
let regSelect = ref()

let listeEol = ref()

// lorsque le composant est monté dans la vue on affiche la carte
onMounted(async() =>{
    // caractériqtiques visuelle de la carte
    titleLayer = Leaflet.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; <a href='http://osm.copyright'<OpenStreetMap</a> contributors"
        }
    );

    // création de la carte sur la div ayant : id="map"
    map = Leaflet.map("map",
    {
        zoomControl : true,     // controle du Zoom
        layers: [titleLayer],    // canevas pour dessiner la carte
        maxZoom: 18,            // zoom maxi autorisé
        minZoom: 6              // zoom mini autorisé
    })
    //projetction de la carte avec centrage aux coordonnées indiquées, avec facteur d'agandissement
    .setView([47.495328, 6.8044455], 17)

    // Rechrche des départements - géo api gouv
    await fetch("https://geo.api.gouv.fr/regions")
    // Reponse demandee en json
    .then(response => response.json())
    // Recuperation de la reponse
    .then(response =>{
        listeReg.value = response;
        // Valeur 0 par defaut : selectionner un departement
        regSelect.value="0"
    })
    .catch(error => console.log("erreur Ajax"))
})

// fonction de sélection du département
const selection = async (reg) =>{
    let request = "https://opendata.agenceore.fr/api/records/1.0/search/"
            + "?dataset=installations-de-production-eolien-par-commune"
            + "&q=&rows=2000"
            + "&sort=date_des_donnees"
            + "&facet=nom_dept&facet=libepci&facet=nom_reg&facet=date_des_donnees&facet=s_3_prod_i_regime_d_exploitation&facet=s_3_prod_d_filiere"
            + "&refine.date_des_donnees=2020"
            + "&refine.nom_reg="+reg;

    // Recherche des départements - api gouv
    await fetch(request)
    // Reponse demandee en json
    .then(response => response.json())
    // Recuperation de la reponse
    .then(response =>{
        // Réecuperation de la liste des gares
        listeEol.value = response.records;

        // Instanciation des markers
        // Calque featureGroup - groupe de calques (markers)
        let markers = Leaflet.featureGroup();

        // Creation d'un icone
        let myIcon = Leaflet.icon({
            iconUrl: "/marker-icon.png",  // image de l'icone
            shadowUrl: "/marker-shadow.png",  // image de l'ombre
                iconSize:   [25, 41],   // taille de l'icone
                shadowSize: [25, 41],   // taille de l'ombre
                iconAnchor: [0, 0],     // point de position de l'icone
                shadowAnchor: [-5, 0], // point de position de l'ombre
                popupAnchor: [0,0]      // point de position popup si elle existe, relativement à l'icone
        });

        // Parcours des gares
        listeEol.value.forEach( (gare) =>{
            // Recuperation des coordonnees de la gare
            let position = gare.geometry.coordinates;

            // Nom de la commune
            let libelle = gare.fields["1_f_commune_pdl"]

            // Ajout d'un marqueur
            // Attention latitude/longitude inversees dans les donnees
            let marker = Leaflet.marker([position[1], position[0]], {icon: myIcon});

            //A Ajout d'une infobulle
            marker.bindPopup(libelle);

            // Ajout au tableau de markers
            markers.addLayer(marker);
        })

        // Ajout des markers a la carte
        map.addLayer(markers);

       map.fitBounds(markers.getBounds());
    })
    .catch(error => console.log("erreur Ajax", error))
}
</script>

<template>
    <div>
        <h2>Installations de production Éolienne en France métropolitaine en 2020</h2>
        
        <select class="w-max my-5 px-5 py-2 rounded-md bg-green-900 font-lexend font-base text-2sm sm:text-base text-green-50"
                v-model="regSelect" @change="selection(regSelect)">
                 
            <option disabled value="0">Sélectionner une région</option>
            <option v-for="reg in listeReg" :key="reg.code" :value="reg.nom">
                {{reg.code}} - {{reg.nom}}
            </option>
        </select>
        
        <div id="map" class="z-0"></div>
    </div>
</template>

<style>
#map{
    width: 100%;
    height: 100%;
}
</style>