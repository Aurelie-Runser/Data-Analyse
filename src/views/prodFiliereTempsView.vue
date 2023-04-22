<template>
    <div class="w-full px-5 py-20 lg:p-10">
        <h1>Installations de production d'électricité et de gaz par filière en France au cours du temps</h1>

        <div class="my-10">
            <p>Nous pouvons constater qu'avec le temps, la France abandonne les installations de production de type hydraulique et éolien quand bien même elles restent majoritaires encore en 2020.</p>
            <p>
                <span class="font-semibold text-green-900 bg-green-100">Les centrales hydrauliques</span>,
                bien qu'ayant faiblement augmenté de
                <span class="font-semibold text-green-900 bg-green-100">1 291 en 2018</span>
                à 1 338 en 2019, elles
                <span class="font-semibold text-green-900 bg-green-100">ont beaucoup diminué jusqu'en 2020, jusqu'à n'être plus que 984</span>.
            </p>
            <p>Le même phénomène s'applique aux
                <span class="font-semibold text-green-900 bg-green-100">centrales éoliennes</span>,
                augmentant de
                <span class="font-semibold text-green-900 bg-green-100">998 en 2018</span>
                à 1 118 en 2019,
                <span class="font-semibold text-green-900 bg-green-100">ce nombre baisse aussi, passant à 712 en 2020</span>.
            </p>
            <p>Cela est dû à leurs faibles rentabilités énergétiques. En effet, nous sommes de plus en plus nombreux, donc nous avons besoin de plus d'énergie. La France choisit donc de s'orienter vers des techniques plus rentables, comme le nucléaire ou le gaz.</p>
            <p>Ceux-ci, bien que peu nombreux, augmentent légèrement, pour
                <span class="font-semibold text-green-900 bg-green-100">le gaz, passant de 23 installations en 2018 à 61 en 2020</span>.
            </p>
            <p>Pour
                <span class="font-semibold text-green-900 bg-green-100">le nucléaire, il y avait 14 centrales en 2018, puis plus que 8 en 2019, et de nouveau 12 en 2020</span>.
                Bien que moins nombreuse qu'en 2018, cette augmentation après 2019 peut indiquer que finalement, la France a décidé de prendre le risque d'utiliser des centrales nucléaires pour produire plus d'énergie
            </p>
            <p>Comme nous pouvons le voir, certains type de productions ayant augmenter ne sont pas renseignés dans la base de données car il y a encore trop peu d'infrastrucure.</p>

            <p>
                <span class="font-semibold text-green-900 bg-green-100">En 2018, il y avait 33 861 installations de type solaire, 36 221 en 2019, et 31 271 en 2020</span>.
                Tout comme pour les centrales hydrauliques et éoliennes, où la France avait investi car il s'agit d'énergies renouvelables, elle abandonne le solaire pour sa faible rentabilité énergétique
            </p>

            <p>
                <a class="font-semibold italic text-green-900 hover:bg-green-100 visited:text-green-500" target="_blank" href="https://opendata.agenceore.fr/explore/dataset/installations-production-elec-gaz/analyze/?rows=10000&exclude.s_3_prod_d_filiere=Solaire&exclude.s_3_prod_d_filiere=Therm&exclude.s_3_prod_d_filiere=Marin&exclude.s_3_prod_d_filiere=Energies+Marines&exclude.s_3_prod_d_filiere=G%C3%A9othermie&exclude.date_des_donnees=2017-12&exclude.date_des_donnees=2020-03&exclude.date_des_donnees=2020-08&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJsaW5lIiwiZnVuYyI6IkNPVU5UIiwieUF4aXMiOiJjb3VudCIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6InJhbmdlLWN1c3RvbSJ9XSwieEF4aXMiOiJkYXRlX2Rlc19kb25uZWVzIiwibWF4cG9pbnRzIjoiIiwidGltZXNjYWxlIjoiIiwic29ydCI6IiIsImNvbmZpZyI6eyJkYXRhc2V0IjoiaW5zdGFsbGF0aW9ucy1wcm9kdWN0aW9uLWVsZWMtZ2F6Iiwib3B0aW9ucyI6eyJyb3dzIjoiMTAwMDAiLCJleGNsdWRlLnNfM19wcm9kX2RfZmlsaWVyZSI6WyJTb2xhaXJlIiwiVGhlcm0iLCJNYXJpbiIsIkVuZXJnaWVzIE1hcmluZXMiLCJHXHUwMEU5b3RoZXJtaWUiXSwiZXhjbHVkZS5kYXRlX2Rlc19kb25uZWVzIjpbIjIwMTctMTIiLCIyMDIwLTAzIiwiMjAyMC0wOCJdfX0sInNlcmllc0JyZWFrZG93biI6InNfM19wcm9kX2RfZmlsaWVyZSJ9XSwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZSwidGltZXNjYWxlIjoiIn0%3D">
                    Data source ici
                </a>
            </p>
        </div>

        <prodFiliereTemps class="my-10"/>

        <div class="mt-20">
            <h3 class="font-lexend font-extrabold text-green-700 text-lg lg:text-xl">Pourquoi ce graphique ?</h3>
            <p>Dans le domaine de l'énergie, un grand nombre d'un types d'installations ne veut pas dire que ce type d'installation produit la majorité de l'énergie, au contraire.</p>
            <p>Par conséquent, pour avoir tout de même une représentation du type d'installation la plus utilisé en France, un graphique indiquant vers quoi la France se tourne pour produire son énergie, ce qui sous-entend quel type elle veut développer, me semble pertinent.</p>
            <p>Pour illustrer une évolution dans le temps, le graphique le plus adapté est un Line, affichant via une courbe les changements d'une valeur au cours du temps de manière très instinctive.</p>
        </div>
        
    </div>
</template>

<script setup>
import prodFiliereTemps from '@/components/prodFiliereTemps.vue';
    
</script>