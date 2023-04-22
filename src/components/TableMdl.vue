<script setup>
// import fonctions composable utilsTable.js
import {sortCol} from "@/composables/utilsTable.js"

// propriete de la table
const propTable = defineProps({
    fields:     { type: Object,     default: () => {}       }, // champts utilises
    items:      { type: Object,     default: () => {}       }, // donnees utilises
})

// emission d'un message vers le composant parent
// modification des donnees
const emit = defineEmits(["filterTab"])
const filterTab = (field) =>{
    emit("tableFilter", field)
}
</script>

<template>
    <div class="mx-auto w-max h-max
                before:content-[''] before:block before:sticky before:w-full before:h-20 lg:before:h-5 before:top-0 before:left-0 before:right-0 before:bg-white">
        <table>
                <tr>
                    <th v-for="field in fields" :key="field"
                        class="sticky top-20 lg:top-5 p-2 bg-green-100 border-green-700 border-2">
        
                        <div class="mb-3 flex flex-wrap justify-evenly items-center">
                            <span class="inline-block font-lexend font-bold text-2sm lg:text-lg text-green-900">{{field.label}}</span>
        
                            <fleches v-if="field.sortable"
                                @click="sortCol(items,field)"
                                class="inline-block"/>
                        </div>
        
                        <div>
                            <input @input="filterTab(field)" v-model="field.filter"
                            class="w-11/12 border-green-700 border-2">
                        </div>
                    </th>
                </tr>

                <tr v-for="item in items" :key="item">

                    <td v-for="field in fields" :key="field"
                    class="w-max p-2 border-green-700 border-2">

                        <span class="font-lexend font-normal text-2sm lg:text-base ">{{item[field.key]}}</span>

                    </td>

                </tr>
        </table>
    </div>
</template>

<script>
import fleches from "@/components/icons/fleches.vue"

export default {
  name: "MonHeader",
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: { fleches },

}
</script>