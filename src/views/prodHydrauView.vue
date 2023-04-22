<template>
    <div class="w-full px-5 py-20 lg:p-10">
        <h1>Installations de production Hydraulique par régions en France métropolitaine en 2020</h1>

        <div class="my-10">
            <p>Les installations du types hydrauliques sont les plus nombreuses, vérifions donc où se trouvent ces installations en France métropolitaine en 2020.</p>
            <p>
                <span class="font-semibold text-green-900 bg-green-100">
                    L'Occitanie possède 477 centrales hydrauliques
                </span>
                et
                <span class="font-semibold text-green-900 bg-green-100">l'Auvergne Rhône-Alpes, 445</span>,
                faisant d'elles les régions avec le plus de centrales hydrauliques. La principale raison est la présence de grandes rivières et fleuves dans ces régions.</p>
            <p>Cette raison explique aussi pourquoi il y a seulement 
                <span class="font-semibold text-green-900 bg-green-100">8 installations du types hydrauliques en Île-de-France</span>.
            </p>

            <p>
                <a class="font-semibold italic text-green-900 hover:bg-green-100 visited:text-green-500" target="_blank" href="https://opendata.agenceore.fr/explore/dataset/installations-de-production-hydraulique-par-commune/analyze/?rows=2000&refine.date_des_donnees=2020-12&exclude.nom_reg=Grand-Est&exclude.nom_reg=La+R%C3%A9union&exclude.nom_reg=Guadeloupe&exclude.nom_reg=Provence-Alpes-C%C3%B4te+d%27Azur&exclude.nom_reg=Guyane&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7ImFsaWduTW9udGgiOnRydWUsInR5cGUiOiJwaWUiLCJmdW5jIjoiQ09VTlQiLCJ5QXhpcyI6ImNvdW50Iiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoicmFuZ2UtY3VzdG9tIiwicG9zaXRpb24iOiJjZW50ZXIifV0sInhBeGlzIjoibm9tX3JlZyIsIm1heHBvaW50cyI6IiIsInRpbWVzY2FsZSI6IiIsInNvcnQiOiIiLCJjb25maWciOnsiZGF0YXNldCI6Imluc3RhbGxhdGlvbnMtZGUtcHJvZHVjdGlvbi1oeWRyYXVsaXF1ZS1wYXItY29tbXVuZSIsIm9wdGlvbnMiOnsicm93cyI6IjIwMDAiLCJyZWZpbmUuZGF0ZV9kZXNfZG9ubmVlcyI6IjIwMjAtMTIiLCJleGNsdWRlLm5vbV9yZWciOlsiR3JhbmQtRXN0IiwiTGEgUlx1MDBFOXVuaW9uIiwiR3VhZGVsb3VwZSIsIlByb3ZlbmNlLUFscGVzLUNcdTAwRjR0ZSBkJ0F6dXIiLCJHdXlhbmUiXX19LCJzZXJpZXNCcmVha2Rvd24iOiIiLCJzZXJpZXNCcmVha2Rvd25UaW1lc2NhbGUiOiIifV0sImRpc3BsYXlMZWdlbmQiOnRydWUsImFsaWduTW9udGgiOnRydWUsInRpbWVzY2FsZSI6IiJ9">
                    Data source ici
                </a>
            </p>
        </div>

        <div class="my-10">
            <prodHydrau class="mx-auto my-5 w-full md:w-2/3 lg:w-5/12"/>
            <mapHydrau class="mx-auto mt-20 w-5/6 h-auto"/>
        </div>
        
    </div>
</template>

<script setup>
import prodHydrau from '@/components/prodHydrau.vue';
import mapHydrau from '@/components/mapHydrau.vue';
    
</script> 