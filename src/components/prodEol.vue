<script setup>
    // import des elements utiles de vue
    import {reactive, ref, onMounted} from "vue"

    import {getProdEol} from "@/composables/serviceAjax.js"

    import {getLabels, countDatas} from "@/composables/utilsApp.js"

    import {aleatoire} from "@/composables/commonChart.js"

    import { Doughnut } from "vue-chartjs"

    //import des objets du grph de la biblioteque chartJs
    import {Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale} from "chart.js"

    // elements utilisés potentiellement pour notre graphique
    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

    // proprietes du graph utilisé dans le template (props)
    // on définit pour chacune son type et sa valeur pas défaut
    const propChart = defineProps({
        chartId:        {type: String,      default:"doughnut-chart"    },  //id du graph
        datasetIdKey:   {type: String,      default:"label"             }, //id du dataSet
        width:          {type: Number,      default:500                 }, //largeur graph
        height:         {type: Number,      default:500                 }, //hauteur graph
        cssClasses:     {type: String,      default:""                  },  //classes css utilisées
        styles:         {type: Object,      default: () => {}           }, // styles utilisés
        plugins:        {type: Object,      default: () => {}           }  //plugins utilisés
    })

    // données du graph
    // pour l'instant juste pour tester le fonctionnement
    const chartData = reactive({
        //labels vides
        labels:[],
        datasets:[{}]
    })

    // options du graph
    const chartOptions = reactive({
        responsive: true,
        maintainAspectRatio: true
    })

    // utilisation d'une ref pour une requete Ajax
    let liste = ref()

    // montage du composant
    onMounted(async() =>{
        await getProdEol()
        .then(response =>{
            liste.value = response.records
            
            chartData.labels = getLabels(liste.value, "fields.nom_reg#1")
            
            chartData.datasets[0].data = countDatas(liste.value, chartData.labels, "fields.nom_reg#1", 0)
        
            let [bgColor, bdColor] = aleatoire(chartData.labels)
        
            chartData.datasets[0].backgroundColor = bgColor
            chartData.datasets[0].borderColor = bdColor
            chartData.datasets[0].Width = 1
        })

       
    })

</script>

<template>
    <div>
        <h2>Graphique du nombre d'installations de production Éolienne par régions en France métropolitaine en 2020</h2>
        <Doughnut
            :chart-options="ChartOptions"
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