<script setup>
import fleche_top from '@/components/icons/fleche_top.vue';

import {ref, reactive, onMounted} from "vue"

import {getProdFiliere} from "@/composables/serviceAjax.js"

import {getLabels, countDatas} from "@/composables/utilsApp.js"

import {aleatoire} from "@/composables/commonChart.js"

import TableMdl from "@/components/TableMdl.vue"

import {linearData, filterColumn} from "@/composables/utilsTable.js"

import {PolarArea} from "vue-chartjs"

import {Chart as ChartJs, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from "chart.js"
ChartJs.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)

const proprChart = defineProps({
    chartId:        {type:String,       default:"polarea-chart"     },   // Id du graphique
    datasetIdKey:   {type:String,       default:"label"         },   // Id du dataSet
    width:          {type:Number,       default:200             },   // largeur du graph
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

})

let items = ref()
let itemsSvg = ref()

let dataView = ref("")
let fields = ref()
fields.value=[
    {key: "fields.s_3_prod_d_filiere",      label: "Filière",   type:"string",  sortable:true,  sort:1, filter:""},
    {key: "fields.1_f_commune_pdl",         label: "Commune",   type:"string",  sortable:true,  sort:1, filter:""},
    {key: "fields.1_f_code_insee_pdl",      label: "Numéro Commune",   type:"string",  sortable:true,  sort:1, filter:""},
    {key: "fields.code_epci",               label: "Numéro EPCI",   type:"string",  sortable:true,  sort:1, filter:""},
]

onMounted(async() =>{
    await getProdFiliere()
    .then(response =>{
        items.value = response.records

        dataView.value = "fields.s_3_prod_d_filiere#1"

    })

    items.value = linearData(fields.value, items.value)
    itemsSvg.value = items.value
    updateGraph(items)
})

// met a jour le graph en fonction des filtre
const updateGraph = () =>{
    chartData.labels = getLabels(items.value, "fields.s_3_prod_d_filiere#1")

    chartData.datasets[0].data = countDatas(items.value, chartData.labels, dataView.value, 0)

    let [bgColor, bdColor] = aleatoire(chartData.labels)

    chartData.datasets[0].backgroundColor = bgColor
    chartData.datasets[0].borderColor = bdColor
}

// filtre la table
const tableFilter = (field) =>{    
    items.value = filterColumn(field, itemsSvg.value)

    updateGraph(items)
}

</script>

<template>
    <div>
        <div class="my-10">
            <h2>Graphique du nombre d'installations de production d'électricité et de gaz par filière en France en 2020</h2>
            <div class="mx-auto w-full sm:w-2/3 lg:w-5/12">
                <PolarArea
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
        </div>

        <a href="#toptable" class="scroll-smooth z-40 sticky top-[85%] flex flex-row-reverse px-5 lg:px-0">
            <fleche_top class="w-16 h-16"/>
        </a>

        <div class="my-10">
            <h2>Tableau d'installations de production d'électricité et de gaz par commune en France en 2020</h2>
            <div id="toptable" class="mx-auto flex w-full">
                <TableMdl
                    :fields="fields"
                    :items="items"
                    :itemsSvg="itemsSvg"
                    @tableFilter="tableFilter"
                />
            </div>
        </div>
    </div>
</template>