export const getLabels = (lstData, label) => {
    //nb d'occurrences  des valeurs du label
    let tl = label.split("#")
    let occurence = tl[1]
    //label concerné 
    let lb1 = tl[0]
    //niveau des informations du label
    let val = lb1.split(".")

    //tableau de renvoi des résultats :
    let retour = []
    //set pour élimination des doublons
    let set = new Set()

    let tabObj = []
    
    // modification ce n'est plus une value de ref
    lstData.forEach((element) => {
        //suivant le niveau de profondeur du label
        switch (val.length) {
            case 1:

                if (occurence == 1) { set.add(element[val[0]]) }

            break

            case 2:
  
                if (occurence == 1) { set.add(element[val[0]][val[1]]) }

            break

            case 3:
                if (occurence == 1) { set.add(element[val[0]][val[1]][val[2]]) }

            break
        } 
    })

    //si multi on passe par le set pour éliminer les doublons
    if (occurence == 'multi') {
        set = new Set(tabObj)
    }
    //transfert du set dans le tableau de retour des résultats
    retour = Array.from(set)
    //tri pour avoir un ordre croissant des labels
    retour.sort()
    //transmission des labels
    return retour
}

export const countDatas = (lst, lstLabel, libLabel, num) => {
    //occurence et valeur du label
    let t1 = libLabel.split("#")
    let lb1 = t1[0]
    let val = lb1.split(".")
    //tableau de comptage à retourner 
    let retour = []

    //boucle sur les labels 
    // Modification ce n'est plus une value de ref
    lstLabel.forEach((label) => {
        let nb = 0
        // boucle sur les donnees
        // Modification ce n'est plus une value de ref
        lst.forEach((element) => {
            switch (val.length) {
                case 1:
                    if (element[val[0]] == label) { 
                  
                        if (num == 0){
                            nb++
                        }
                  
                        if (num == 1){
                            nb += element.fields.consototale 
                        }

                        if (num == 2){
                            nb += element.fields.consoa
                        }

                        if (num == 3){
                            nb += element.fields.consoi
                        }

                        if (num == 4){
                            nb += element.fields.consot
                        }

                        if (num == 5){
                            nb += element.fields.consor
                        }
                    
                    }
                    
                break

                case 2:
                    if (element[val[0]][val[1]] == label){ 
                        
                        if (num == 0){
                            nb++
                        }

                        if (num == 1){
                            nb += element.fields.consototale 
                        }

                        if (num == 2){
                            nb += element.fields.consoa
                        } 

                        if (num == 3){
                            nb += element.fields.consoi
                        }

                        if (num == 4){
                            nb += element.fields.consot
                        }

                        if (num == 5){
                            nb += element.fields.consor
                        }

                    }
                break

                case 3:
                    if (element[val[0]][val[1]][val[2]] == label){
                        
                        if (num == 0){
                            nb++
                        }

                        if (num == 1){
                            nb += element.fields.consototale 
                        }

                        if (num == 2){
                            nb += element.fields.consoa
                        } 

                        if (num == 3){
                            nb += element.fields.consoi
                        }

                        if (num == 4){
                            nb += element.fields.consot
                        }

                        if (num == 5){
                            nb += element.fields.consor
                        }
                        
                    }
                break
            }
        })
        retour.push(nb)
    })
    return retour
}