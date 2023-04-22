<script setup>
// import des elements utiles de vue
import {reactive, ref, onMounted} from "vue"

// import d'un graphique type doughnut
import { Line } from "vue-chartjs"

//import des objets du grph de la biblioteque chartJs
import {Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement,
        LineController, CategoryScale, LinearScale, Filler} from "chart.js"

// elements utilisés potentiellement pour notre graphique
ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement,
        LineController, CategoryScale, LinearScale, Filler)

const propChart = defineProps({
    chartId:        {type: String,      default:"line-chart"    },  //id du graph
    datasetIdKey:   {type: String,      default:"label"             }, //id du dataSet
    width:          {type: Number,      default:150                 }, //largeur graph
    height:         {type: Number,      default:150                 }, //hauteur graph
    cssClasses:     {type: String,      default:""                  },  //classes css utilisées
    styles:         {type: Object,      default: () => {}           }, // styles utilisés
    plugins:        {type: Object,      default: () => {}           }  //plugins utilisés
})


// Données injectée dans un graph
let chartData = reactive({
    // etiquette de l'axe
    labels: [],

    datasets: [
        {
            // etiquette du jeu de données à projeter
            label: "Bioénergie",
            // Valeurs des données
            data: [],
            borderColor: "green",
            tension: 0.5,

            // points de la courbe
            pointBackgroundColor : "green", // couleur de fond du point
            pointBorderColor : "green",   // bordure entourant le point
            pointHoverBackgroundColor: "green",   // couleur de fond du point au passage de la souris
            pointHoverBorderColor: "green",          // bordure entourant le point au passage de la souris
            pointRadius: 4,                         // Rayon du point
            pointHoverRadius: 6,                    // Rayon du point au passage de la souris
        },
        {
            // etiquette du jeu de données à projeter
            label: "Thermique",
            // Valeurs des données
            data: [],
            borderColor: "red",
            tension: 0.5,
            
            // points de la courbe
            pointBackgroundColor : "red", // couleur de fond du point
            pointBorderColor : "red",   // bordure entourant le point
            pointHoverBackgroundColor: "red",   // couleur de fond du point au passage de la souris
            pointHoverBorderColor: "red",          // bordure entourant le point au passage de la souris
            pointRadius: 4,                         // Rayon du point
            pointHoverRadius: 6,                    // Rayon du point au passage de la souris
        },
        {
            // etiquette du jeu de données à projeter
            label: "Hydraulique",
            // Valeurs des données
            data: [],
            borderColor: "blue",
            tension: 0.5,
    
            // points de la courbe
            pointBackgroundColor : "blue", // couleur de fond du point
            pointBorderColor : "blue",   // bordure entourant le point
            pointHoverBackgroundColor: "blue",   // couleur de fond du point au passage de la souris
            pointHoverBorderColor: "blue",          // bordure entourant le point au passage de la souris
            pointRadius: 4,                         // Rayon du point
            pointHoverRadius: 6,                    // Rayon du point au passage de la souris
        },
        {
            // etiquette du jeu de données à projeter
            label: "Eolien",
            // Valeurs des données
            data: [],
            borderColor: "gray",
            tension: 0.5,
    
            // points de la courbe
            pointBackgroundColor : "gray", // couleur de fond du point
            pointBorderColor : "gray",   // bordure entourant le point
            pointHoverBackgroundColor: "gray",   // couleur de fond du point au passage de la souris
            pointHoverBorderColor: "gray",          // bordure entourant le point au passage de la souris
            pointRadius: 4,                         // Rayon du point
            pointHoverRadius: 6,                    // Rayon du point au passage de la souris
        },
        {
            // etiquette du jeu de données à projeter
            label: "Autre",
            // Valeurs des données
            data: [],
            borderColor: "black",
            tension: 0.5,
    
            // points de la courbe
            pointBackgroundColor : "black", // couleur de fond du point
            pointBorderColor : "black",   // bordure entourant le point
            pointHoverBackgroundColor: "black",   // couleur de fond du point au passage de la souris
            pointHoverBorderColor: "black",          // bordure entourant le point au passage de la souris
            pointRadius: 4,                         // Rayon du point
            pointHoverRadius: 6,                    // Rayon du point au passage de la souris
        },
        {
            // etiquette du jeu de données à projeter
            label: "Thermique non renouvelable",
            // Valeurs des données
            data: [],
            borderColor: "purple",
            tension: 0.5,
    
            // points de la courbe
            pointBackgroundColor : "purple", // couleur de fond du point
            pointBorderColor : "purple",   // bordure entourant le point
            pointHoverBackgroundColor: "purple",   // couleur de fond du point au passage de la souris
            pointHoverBorderColor: "purple",          // bordure entourant le point au passage de la souris
            pointRadius: 4,                         // Rayon du point
            pointHoverRadius: 6,                    // Rayon du point au passage de la souris
        },
        {
            // etiquette du jeu de données à projeter
            label: "Nucléaire",
            // Valeurs des données
            data: [],
            borderColor: "pink",
            tension: 0.5,
    
            // points de la courbe
            pointBackgroundColor : "pink", // couleur de fond du point
            pointBorderColor : "pink",   // bordure entourant le point
            pointHoverBackgroundColor: "pink",   // couleur de fond du point au passage de la souris
            pointHoverBorderColor: "pink",          // bordure entourant le point au passage de la souris
            pointRadius: 4,                         // Rayon du point
            pointHoverRadius: 6,                    // Rayon du point au passage de la souris
        },
        {
            // etiquette du jeu de données à projeter
            label: "Gaz",
            // Valeurs des données
            data: [],
            borderColor: "orange",
            tension: 0.5,
    
            // points de la courbe
            pointBackgroundColor : "orange", // couleur de fond du point
            pointBorderColor : "orange",   // bordure entourant le point
            pointHoverBackgroundColor: "orange",   // couleur de fond du point au passage de la souris
            pointHoverBorderColor: "orange",          // bordure entourant le point au passage de la souris
            pointRadius: 4,                         // Rayon du point
            pointHoverRadius: 6,                    // Rayon du point au passage de la souris
        },
    ]
    
})

let chartOptions = reactive({
    responsive: true, 
    maintainAspectRation: false,

    scales:{
        y: {
            title: {
                display: true,
                text: "Nombre d'installation",
                color:"green",
                font:{
                    size: 16,
                }
            }
        },
    },
})

let liste = ref(null)

onMounted(async() =>{
    await fetch("https://opendata.agenceore.fr/api/records/1.0/search/?dataset=installations-production-elec-gaz&q=&rows=10000&exclude.date_des_donnees=2020-03&exclude.date_des_donnees=2020-08&exclude.date_des_donnees=2017-12&exclude.s_3_prod_d_filiere=Solaire")
    // reponse donnée en json
    .then(response => response.json())

        // recupérer la reponse
        .then(response =>{
            liste.value = new Array(response);

            // Chargement des labels
            // Création d'un set pour valeurs uniques
            let setAnnee = new Set()
            // parcours des valeurs, récupéaration des années
            liste.value[0].records.forEach ( (prod)=>{
                setAnnee.add(prod.fields.date_des_donnees)
            })

            // transmission des valeurs du set aux labels
            chartData.labels = Array.from(setAnnee)
            // tri des labels par ordre croissant
            chartData.labels.sort()

            // calcul des valeurs par labels
            let cptBio = []
            let cptTherm = []
            let cptHydrau = []
            let cptEol = []
            let cptAutre = []
            let cptThermNon = []
            let cptNuc = []
            let cptGaz = []

            // parcours des labels
            chartData.labels.forEach( (label) =>{
                // parcours des données, compteurs pour un label
                let nbBio = 0
                let nbTherm = 0
                let nbHydrau = 0
                let nbEol = 0
                let nbAutre = 0
                let nbThermNon = 0
                let nbNuc = 0
                let nbGaz = 0
                
                // parcours des valeurs
                liste.value[0].records.forEach( (prod)=>{
                    
                    if((label == prod.fields.date_des_donnees) && (prod.fields.s_3_prod_d_filiere == "Bioénergie")){
                        nbBio++
                    }
                    if((label == prod.fields.date_des_donnees) && (prod.fields.s_3_prod_d_filiere == "Thermique")){
                        nbTherm++
                    }
                    if((label == prod.fields.date_des_donnees) && (prod.fields.s_3_prod_d_filiere == "Hydraulique")){
                        nbHydrau++
                    }
                    if((label == prod.fields.date_des_donnees) && (prod.fields.s_3_prod_d_filiere == "Éolien")){
                        nbEol++
                    }
                    if((label == prod.fields.date_des_donnees) && (prod.fields.s_3_prod_d_filiere == "Autre")){
                        nbAutre++
                    }
                    if((label == prod.fields.date_des_donnees) && (prod.fields.s_3_prod_d_filiere == "Thermique non renouvelable")){
                        nbThermNon++
                    }
                    if((label == prod.fields.date_des_donnees) && (prod.fields.s_3_prod_d_filiere == "Nucléaire")){
                        nbNuc++
                    }
                    if((label == prod.fields.date_des_donnees) && (prod.fields.s_3_prod_d_filiere == "Gaz")){
                        nbGaz++
                    }
                })

                // mise a jour des tableau
                cptBio.push(nbBio)
                cptTherm.push(nbTherm)
                cptHydrau.push(nbHydrau)
                cptEol.push(nbEol)
                cptAutre.push(nbAutre)
                cptThermNon.push(nbThermNon)
                cptNuc.push(nbNuc)
                cptGaz.push(nbGaz)

            })
            // chargement des données
            chartData.datasets[0].data = cptBio
            chartData.datasets[1].data = cptTherm
            chartData.datasets[2].data = cptHydrau
            chartData.datasets[3].data = cptEol
            chartData.datasets[4].data = cptAutre
            chartData.datasets[5].data = cptThermNon
            chartData.datasets[6].data = cptNuc
            chartData.datasets[7].data = cptGaz
        })
        .catch(error => console.log("erreur Ajax", error))
})
</script>

<template>
    <div>
        <h2>Graphique de l'évolution du nombre d'installations de production d'électricité et de gaz par filière en France entre 2018 et 2020</h2>
        <Line
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :widht="width"
            :height="height"/>
    </div>
</template>
