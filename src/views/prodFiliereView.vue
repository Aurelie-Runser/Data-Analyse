<template>
    <div class="w-full px-5 py-20 lg:p-10">
        <h1>Installations de production d'électricité et de gaz par filière en France en 2020</h1>

        <div class="my-10">
            <p>En 2020, les installations des types hydrauliques et éoliennes sont celles étant les plus nombreuses. Pas moins de
                <span class="font-semibold text-green-900 bg-green-100">
                    1 939 centrales hydrauliques
                </span>
                ont été créer, et
                <span class="font-semibold text-green-900 bg-green-100">1 360 centrales éoliennes</span>.
            </p>
            <p>Les installations les moins nombreuses sont
                <span class="font-semibold text-green-900 bg-green-100">les centrales nucléaires (19)</span>,
                et
                <span class="font-semibold text-green-900 bg-green-100">les centrales thermiques non renouvelables, qui sont 111</span>.
            </p>
            <p>Seulement, ces nombres ne signifient pas que la majorité de l'énergie que l'on consomme est produite via des centrales hydrauliques. En effet, plus une technique permet de produire beaucoup d'énergie, moins elle a besoin d'être nombreuse.</p>
            <p>En 2020 encore, 67% de notre énergie est faite via le nucléaire.</p>
            <p>Pour au moins avoir une meilleure idée vers quel type de production la France veut aller, il faut regarder l'évolution du nombre de ses installations au cours du temps.</p>

            <p>Information : pour des raisons de faisabilité, le type de production "Solaire" n'a pas été représenté car affiche un nombre trop important, faussant les autres valeurs. En 2020, il y avait          
                <span class="font-semibold text-green-900 bg-green-100">31 276 installations de production du type Solaire</span>.
            </p>

            <p>
                <a class="font-semibold italic text-green-900 hover:bg-green-100 visited:text-green-500" target="_blank" href="https://opendata.agenceore.fr/explore/dataset/installations-production-elec-gaz/analyze/?rows=5525&refine.date_des_donnees=2020-12&exclude.s_3_prod_d_filiere=Solaire&exclude.s_3_prod_d_filiere=Therm&exclude.s_3_prod_d_filiere=Marin&exclude.s_3_prod_d_filiere=Energies+Marines&exclude.s_3_prod_d_filiere=G%C3%A9othermie&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJwb2xhciIsImZ1bmMiOiJDT1VOVCIsInlBeGlzIjoiY291bnQiLCJzY2llbnRpZmljRGlzcGxheSI6dHJ1ZSwiY29sb3IiOiJyYW5nZS1jdXN0b20ifV0sInhBeGlzIjoiZGF0ZV9kZXNfZG9ubmVlcyIsIm1heHBvaW50cyI6IiIsInRpbWVzY2FsZSI6IiIsInNvcnQiOiIiLCJjb25maWciOnsiZGF0YXNldCI6Imluc3RhbGxhdGlvbnMtcHJvZHVjdGlvbi1lbGVjLWdheiIsIm9wdGlvbnMiOnsicm93cyI6IjU1MjUiLCJyZWZpbmUuZGF0ZV9kZXNfZG9ubmVlcyI6IjIwMjAtMTIiLCJleGNsdWRlLnNfM19wcm9kX2RfZmlsaWVyZSI6WyJTb2xhaXJlIiwiVGhlcm0iLCJNYXJpbiIsIkVuZXJnaWVzIE1hcmluZXMiLCJHXHUwMEU5b3RoZXJtaWUiXX19LCJzZXJpZXNCcmVha2Rvd24iOiJzXzNfcHJvZF9kX2ZpbGllcmUifV0sImRpc3BsYXlMZWdlbmQiOnRydWUsImFsaWduTW9udGgiOnRydWUsInRpbWVzY2FsZSI6IiJ9">
                    Data source ici
                </a>
            </p>
        </div>

        <prodFiliere class="-mx-5 my-10 sm:mx-0"/>
        
    </div>
</template>

<script setup>
import prodFiliere from '@/components/prodFiliere.vue';    
</script>