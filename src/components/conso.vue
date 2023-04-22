<script setup>
import fleche_top from '@/components/icons/fleche_top.vue';

import {ref, reactive, onMounted} from "vue"

import {getConso} from "@/composables/serviceAjax.js"

import {getLabels, countDatas} from "@/composables/utilsApp.js"

import {aleatoire} from "@/composables/commonChart.js"

import TableMdl from "@/components/TableMdl.vue"

import {linearData, filterColumn} from "@/composables/utilsTable.js"

import {Bar} from "vue-chartjs"

import {Chart as ChartJs, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from "chart.js"
ChartJs.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const proprChart = defineProps({
    chartId:        {type:String,       default:"bar-chart"     },   // Id du graphique
    datasetIdKey:   {type:String,       default:"label"         },   // Id du dataSet
    width:          {type:Number,       default:400             },   // largeur du graph
    height:         {type:Number,       default:200             },   // hauteur du graph
    cssClasses:     {type:String,       default:""              },   // Classes Css utilisées
    styles:         {type:Object,       default:() => {}        },   // Classes Css utilisées
    plugins:        {type:Object,       default:() => {}        },   // plugins utilisées
})

let chartData = reactive({
    labels:[],
    datasets:[{}]
})

let chartOptions = reactive({
    responsive: true, 
    maintainAspectRation: false,
    indexAxis: "x",

    scales:{
        y: {
            title: {
                display: true,
                text: 'Consommation (MWh)',
                color:"green",
                font:{
                    size: 20,
                }
            }
        },
    },
})

let dataSelected = ref()
let numDataset = 0 

let items = ref()
let itemsSvg = ref()

let dataView = ref("")
let fields = ref()

let KeyconsoTotale = "fields.consototale"
let LabelconsoTotale = "Consommation Totale (MhW)"

let KeyconsoAgr = "fields.consoa"
let LabelconsoAgr = "Consommation Agricole (MhW)"

let KeyconsoInd = "fields.consoi"
let LabelconsoInd = "Consommation Industrielle (MhW)"

let KeyconsoTer = "fields.consot"
let LabelconsoTer = "Consommation Tertiaire (MhW)"

let KeyconsoRes = "fields.consor"
let LabelconsoRes = "Consommation Résidentiel (MhW)"

fields.value=[
    {key: "fields.filiere",             label: "Filière",               type:"string",  sortable:true,  sort:1, filter:""},
    {key: "fields.operateur",           label: "Opérateur",             type:"string",  sortable:true,  sort:1, filter:""},
    {key: "",                           label: "",                      type:"number",  sortable:true,  sort:1, filter:""},
    {key: "fields.libelle_region",      label: "Région",                type:"string",  sortable:true,  sort:1, filter:""},
    {key: "fields.code_region",         label: "Numéro de Région",      type:"string",  sortable:true,  sort:1, filter:""},
]

onMounted(async() =>{
    await selectData("totale")
    let [bgColor, bdColor] = aleatoire(chartData.labels)

chartData.datasets[0].backgroundColor = bgColor
chartData.datasets[0].borderColor = bdColor

})

const selectData = async (typeData) =>{
    dataSelected.value = typeData
    switch(typeData){
        case "totale":
            await getConso()
            .then(response =>{
                items.value = response.records
                dataView.value = "fields.libelle_region#1"
                fields.value[2].key = KeyconsoTotale
                fields.value[2].label = LabelconsoTotale
                numDataset = 1
            })
        break

        case "agricole":
            await getConso()
            .then(response =>{
                items.value = response.records
                dataView.value = "fields.libelle_region#1"
                fields.value[2].key = KeyconsoAgr
                fields.value[2].label = LabelconsoAgr
                numDataset = 2
            })
        break

        case "industrielle":
            await getConso()
            .then(response =>{
                items.value = response.records
                dataView.value = "fields.libelle_region#1"
                fields.value[2].key = KeyconsoInd
                fields.value[2].label = LabelconsoInd
                numDataset = 3
            })
        break

        case "tertiaire":
            await getConso()
            .then(response =>{
                items.value = response.records
                dataView.value = "fields.libelle_region#1"
                fields.value[2].key = KeyconsoTer
                fields.value[2].label = LabelconsoTer
                numDataset = 4
            })
        break

        case "residentiel":
            await getConso()
            .then(response =>{
                items.value = response.records
                dataView.value = "fields.libelle_region#1"
                fields.value[2].key = KeyconsoRes
                fields.value[2].label = LabelconsoRes
                numDataset = 5
            })
        break
    }

    items.value = linearData(fields.value, items.value)
    itemsSvg.value = items.value
    updateGraph(items)

}

// met a jour le graph en fonction des filtre
const updateGraph = () =>{
    chartData.labels = getLabels(items.value, "fields.libelle_region#1")

    chartData.datasets[0].data = countDatas(items.value, chartData.labels, dataView.value, numDataset)
}

// filtre la table
const tableFilter = (field) =>{    
    items.value = filterColumn(field, itemsSvg.value)

    updateGraph(items)
}

</script>

<template>
    <div>
        <nav class="flex flex-wrap items-center  my-5 px-5 py-2 rounded-md bg-green-900 font-syne font-semibold text-2sm sm:text-base text-green-50">

            <a class="text-base sm:text-xl">Sélection :</a>

                <ul class="w-5/6 flex flex-wrap justify-around gap-5">

                    <li class="block hover:text-green-300 cursor-pointer">
                        <a class=""  @click="(selectData('totale')) & (titre = 'totale')">Totale</a>
                    </li>

                    <li class="block hover:text-green-300 cursor-pointer">
                        <a class="" @click="(selectData('agricole')) & (titre = 'agricole')">Agricole</a>
                    </li>

                    <li class="block hover:text-green-300 cursor-pointer">
                        <a class="" @click="(selectData('industrielle'))& (titre = 'industrielle')">Industrielle</a>
                    </li>

                    <li class="block hover:text-green-300 cursor-pointer">
                        <a class="" @click="(selectData('tertiaire'))& (titre = 'tertiaire')">Tertiaire</a>
                    </li>

                    <li class="block hover:text-green-300 cursor-pointer">
                        <a class="" @click="(selectData('residentiel'))& (titre = 'residentiel')">Residentiel</a>
                    </li>
                </ul>
        </nav>

        <h2>
            Graphique de la quantité de consommation d’électricité et gaz dans
            <span v-if="titre == 'totale'">Tous les domaines</span>
            <span v-if="titre == 'agricole'">le domaine Agricole</span>
            <span v-if="titre == 'industrielle'">le domaine Industrielle</span>
            <span v-if="titre == 'tertiaire'">le domaine Tertiaire</span>
            <span v-if="titre == 'residentiel'">le domaine Residentiel</span>
            par région en France métropolitaine en 2020
        </h2>

        <div class="mx-auto my-10 w-full lg:w-3/4">
            <Bar
                :chart-options="chartOptions"
                :chart-data="chartData"
                :chart-id="chartId"
                :dataset-id-key="datasetIdKey"
                :plugins="plugins"
                :css-classes="cssClasses"
                :styles="styles"
                :width="width"
                :height="height"
            />
        </div>

        <a href="#toptable" class="scroll-smooth z-40 sticky top-[85%] flex flex-row-reverse px-5 lg:px-0">
            <fleche_top class="w-16 h-16"/>
        </a>

        <h2>
            Tableau de la quantité de consommation d’électricité et gaz par opérateur et région
            <span v-if="titre == 'totale'">Tous les domaines</span>
            <span v-if="titre == 'agricole'">le domaine Agricole</span>
            <span v-if="titre == 'industrielle'">le domaine Industrielle</span>
            <span v-if="titre == 'tertiaire'">le domaine Tertiaire</span>
            <span v-if="titre == 'residentiel'">le domaine Residentiel</span>
            en France métropolitaine en 2020
        </h2>

        <div id="toptable" class="mx-auto my-5 flex w-full overflow-x-scroll lg:overflow-x-clip">
            <TableMdl
                :fields="fields"
                :items="items"
                :itemsSvg="itemsSvg"
                @tableFilter="tableFilter"
            />
        </div>
    </div>
</template>

<script>

export default {
  name: "conso",
  data() {
    return {
      titre: "totale",
    };
  },
}
</script>