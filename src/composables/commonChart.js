//fonction de calcul aléatoire des couleurs types rgba
//non exportable , car utilisee par une fonction interne
const couleur = (max) => {
    return Math.round(Math.random() * (max), 0);
}

export const aleatoire = (labels) =>{
    let bgColor = []
    let bdColor = []

    labels.forEach(function(val){
        // on calcul la couleur du secteur
        let c1 = couleur(255)
        let c2 = couleur(255)
        let c3 = couleur(255)
        let tr = 0.5

        // couleur avec transparence
        let color = "rgba(" + [c1, c2, c3, tr].join(',') + ")"
        bgColor.push(color)

        // bordure sans transparence
        let border = "rgba(" + [c1, c2, c3].join(',') + ")"
        bdColor.push(color)
    })
    return [bgColor, bdColor]
}