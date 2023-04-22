<template>
    <div class="w-full px-5 py-20 lg:p-10">
        <h1>Installations de production Éolienne par régions en France métropolitaine en 2020</h1>

        <div class="my-10">
            <p>Comme vue précédemment, les installations du types éoliennes sont l'une des plus nombreuses. Étudions donc où se trouvent ces installations en France métropolitaine en 2020.</p>
            <p>
                <span class="font-semibold text-green-900 bg-green-100">
                    Les Haut-de-France ont 317 centrales éoliennes
                </span>
                et
                <span class="font-semibold text-green-900 bg-green-100">le Grand Est, 238</span>,
                faisant d'elles les régions avec le plus de centrales éoliennes. Les raisons sont multiples : la force et la régularité du vent, de même que l'espace disponible.</p>
            <p>Ces raisons expliquent aussi pourquoi il y a seulement 
                <span class="font-semibold text-green-900 bg-green-100">
                    3 installations du types éoliennes en Corse
                </span>
                ainsi que
                <span class="font-semibold text-green-900 bg-green-100">8 en Île-de-France</span>.
            </p>

            <p>
                <a class="font-semibold italic text-green-900 hover:bg-green-100 visited:text-green-500" target="_blank" href="https://opendata.agenceore.fr/explore/dataset/installations-de-production-eolien-par-commune/analyze/?sort=date_des_donnees&rows=2000&refine.date_des_donnees=2020&exclude.nom_reg=Grand-Est&exclude.nom_reg=La+R%C3%A9union&exclude.nom_reg=Martinique&exclude.nom_reg=Guadeloupe&exclude.nom_reg=Provence-Alpes-C%C3%B4te+d%27Azur&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7ImFsaWduTW9udGgiOnRydWUsInR5cGUiOiJwaWUiLCJmdW5jIjoiQ09VTlQiLCJ5QXhpcyI6ImNvdW50Iiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoicmFuZ2UtY3VzdG9tIiwicG9zaXRpb24iOiJjZW50ZXIifV0sInhBeGlzIjoibm9tX3JlZyIsIm1heHBvaW50cyI6IiIsInRpbWVzY2FsZSI6IiIsInNvcnQiOiIiLCJjb25maWciOnsiZGF0YXNldCI6Imluc3RhbGxhdGlvbnMtZGUtcHJvZHVjdGlvbi1lb2xpZW4tcGFyLWNvbW11bmUiLCJvcHRpb25zIjp7InNvcnQiOiJkYXRlX2Rlc19kb25uZWVzIiwicm93cyI6IjIwMDAiLCJyZWZpbmUuZGF0ZV9kZXNfZG9ubmVlcyI6IjIwMjAiLCJleGNsdWRlLm5vbV9yZWciOlsiR3JhbmQtRXN0IiwiTGEgUlx1MDBFOXVuaW9uIiwiTWFydGluaXF1ZSIsIkd1YWRlbG91cGUiLCJQcm92ZW5jZS1BbHBlcy1DXHUwMEY0dGUgZCdBenVyIl19fSwic2VyaWVzQnJlYWtkb3duIjoiIiwic2VyaWVzQnJlYWtkb3duVGltZXNjYWxlIjoiIn1dLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjp0cnVlLCJ0aW1lc2NhbGUiOiIifQ%3D%3D">
                    Data source ici
                </a>
            </p>
        </div>

        <div class="my-10 overflow-hidden">
            <prodEol class="mx-auto my-5 w-screen md:w-2/3 lg:w-5/12"/>
            <mapEol class="mx-auto mt-20 w-5/6 h-auto"/>
        </div>
        
    </div>
</template>

<script setup>
import prodEol from '@/components/prodEol.vue';
import mapEol from '@/components/mapEol.vue';
    
</script> 