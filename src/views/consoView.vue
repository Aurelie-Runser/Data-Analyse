<template>
    <div class="w-full px-5 py-20 lg:p-10">
            <h1>Type de consommation d’électricité et gaz par région en France métropolitaine en 2020</h1>
    
            <div class="my-10">
                <p>Sans surprise, les régions qui consomment au total le plus d'énergies sont les plus peuplées, soit
                    <span class="font-semibold text-green-900 bg-green-100">l'Île-de-France qui consomme près de 130 TWh</span>,
                    <span class="font-semibold text-green-900 bg-green-100">les Hauts de France un peu plus de 109 TWh</span>,
                    <span class="font-semibold text-green-900 bg-green-100">l'Auvergne Rhône Alpes qui consomme autour de 105,5 TWh</span>
                    et
                    <span class="font-semibold text-green-900 bg-green-100">le Grand Est avec pas loin de 104 TWh</span>.
                </p>
                <p>La région consommant beaucoup d'énergie dans
                    <span class="font-semibold text-green-900 bg-green-100">le domaine de l'agriculture</span>
                    est
                    <span class="font-semibold text-green-900 bg-green-100">la Bretagne avec près de 2,225 TWh</span>
                    utilisés, soit 6,11% de la consommation totale de la région.
                </p>
                <p>Les régions consommant beaucoup d'énergie dans
                    <span class="font-semibold text-green-900 bg-green-100">le domaine industriel</span>
                    sont
                    <span class="font-semibold text-green-900 bg-green-100">les Hauts-de-France avec près de 61 TWh</span>
                    utilisés et le Grand Est avec presque 58 TWh.
                </p>
                <p>La région consommant beaucoup d'énergie dans
                    <span class="font-semibold text-green-900 bg-green-100">les domaines tertiaires et résidentiels</span>
                    est
                    <span class="font-semibold text-green-900 bg-green-100">l'Île-de-France avec plus ou moins de 50 TWh</span>
                    utilisés pour chacun de ces deux domaines.</p>

                <p>
                    <a class="font-semibold italic text-green-900 hover:bg-green-100 visited:text-green-500" target="_blank" href="https://opendata.agenceore.fr/explore/dataset/conso-elec-gaz-annuelle-par-secteur-dactivite-agregee-region/analyze/?sort=consor&rows=213&refine.annee=2020&exclude.libelle_region=Guadeloupe&exclude.libelle_region=Guyane&exclude.libelle_region=La+R%C3%A9union&exclude.libelle_region=Martinique&exclude.libelle_region=Mayotte&exclude.libelle_region=Non+affect%C3%A9+%C3%A0+une+r%C3%A9gion&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiU1VNIiwieUF4aXMiOiJjb25zb3RvdGFsZSIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6IiMyMDIwNDMifV0sInhBeGlzIjoibGliZWxsZV9yZWdpb24iLCJtYXhwb2ludHMiOiIiLCJ0aW1lc2NhbGUiOiIiLCJzb3J0IjoiIiwiY29uZmlnIjp7ImRhdGFzZXQiOiJjb25zby1lbGVjLWdhei1hbm51ZWxsZS1wYXItc2VjdGV1ci1kYWN0aXZpdGUtYWdyZWdlZS1yZWdpb24iLCJvcHRpb25zIjp7InNvcnQiOiJjb25zb3IiLCJyb3dzIjoiMjEzIiwicmVmaW5lLmFubmVlIjoiMjAyMCIsImV4Y2x1ZGUubGliZWxsZV9yZWdpb24iOlsiR3VhZGVsb3VwZSIsIkd1eWFuZSIsIkxhIFJcdTAwRTl1bmlvbiIsIk1hcnRpbmlxdWUiLCJNYXlvdHRlIiwiTm9uIGFmZmVjdFx1MDBFOSBcdTAwRTAgdW5lIHJcdTAwRTlnaW9uIl19fX1dLCJ0aW1lc2NhbGUiOiIiLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjp0cnVlfQ%3D%3D">
                        Data source ici
                    </a>
                </p>
            </div>

        <conso class="-mx-5 my-10 sm:mx-0"/>
        
    </div>
</template>

<script setup>
import conso from '@/components/conso.vue';
</script>