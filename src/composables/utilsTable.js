// fonction de linearisation des donnees multi-niveau
export const linearData = (fields, items) => {
    // lineariser les elements decomposes
    fields.forEach( (field) =>{
        // on cherche le niveau de la donnée
        let t = field.key.split(".")
        let lg = t.length
        // recuperation des info
        items.forEach( (item)=>{
            // niveau 1
            if(lg==1){
                if(Array.isArray(item[field.key])){
                    let value = ""
                    item[field.key].forEach( (val) => {value += " "+val})
                    item[field.key] = value
                }else{
                // sinon rien valeur prise par defaut
                }
            }

            // niveau 2
            if(lg==2){
                if(Array.isArray(item[t[0]])  ){
                    let value = ""
                    item[ t[0] ].forEach( (val) => {value += " "+val[ t[1] ]})
                    item[field.key] = value
                }else{
                    item[field.key] = item [ t[0] ] [ t[1] ]
                }
            }
          
            // niveau 3
            if(lg==3){
                if(Array.isArray(item[t[0]] [t[1]])  ){
                    let value = ""
                    item[ t[0] ] [ t[1] ].forEach( (val) => {value += " "+val[ t[2] ]})
                    item[field.key] = value
                }else{
                    item[field.key] = item [ t[0] ] [ t[1] ] [ t[2] ]
                }
            }

        })
    })
    return items
}

// tri selectionne
export const sortCol = (items, field) =>{
    // fonction de comparaison string
    const compareString = (a, b) =>{
      // on fait une conversion en minuscule, car le debut en minuscules seraient placees avant les majuscules
      return a[field.key].toLowerCase() > b[field.key].toLowerCase() ? 1 * field.sort : -1 * field.sort
    }

    // fonction de comparaison numerique
    const compareNumber = (a, b) =>{
      // type number demande, on fait un conversion en reel, si chiffres a virgule
      return parseFloat(a[field.key]) > parseFloat(b[field.key]) ? 1 * field.sort : -1 * field.sort
    }

    // suivantle type de tri
    if(field.type == "number") { items = items.sort(compareNumber)}
    else{ items = items.sort(compareString)}

    // position du tri a l'inverse de ce qu'il est pour le prochain click
    field.sort = field.sort * -1
}

// filtrage general
export const filterColumn = (field, itemsSvg) =>{
    return itemsSvg.filter ( (element) =>{
        return element[field.key].toLowerCase().includes(field.filter.toLowerCase())
    })
}