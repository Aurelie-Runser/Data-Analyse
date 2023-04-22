export const getProdFiliere = () => {
    let rq = "https://opendata.agenceore.fr/api/records/1.0/search/"
        + "?dataset=installations-production-elec-gaz"
        + "&q=&rows=5525"
        + "&refine.date_des_donnees=2020-12"
        + "&exclude.s_3_prod_d_filiere=Solaire"
        + "&exclude.s_3_prod_d_filiere=Marin"
        + "&exclude.s_3_prod_d_filiere=Energies+Marines"
        + "&exclude.s_3_prod_d_filiere=G%C3%A9othermie"

    // Requête concernée
    return fetch(rq)            // on renvoie la requête à qui la demande
        .then(response => {
            return response.json() // résultat de la requête en json
        })
        .catch(error => { throw error }) // Cas d'erreur 
}

export const getConso = () => {
    let rq = "https://opendata.agenceore.fr/api/records/1.0/search/"
            + "?dataset=conso-elec-gaz-annuelle-par-secteur-dactivite-agregee-region"
            + "&q=&rows=213"
            + "&sort=-consor&facet=operateur"
            + "&facet=annee&facet=filiere&facet=libelle_region"
            + "&refine.annee=2020"
            + "&exclude.libelle_region=Guadeloupe"
            + "&exclude.libelle_region=Guyane"
            + "&exclude.libelle_region=La+R%C3%A9union"
            + "&exclude.libelle_region=Martinique"
            + "&exclude.libelle_region=Mayotte"
            + "&exclude.libelle_region=Non+affect%C3%A9+%C3%A0+une+r%C3%A9gion"

    // Requête concernée
    return fetch(rq)            // on renvoie la requête à qui la demande
        .then(response => {
            return response.json() // résultat de la requête en json
        })
        .catch(error => { throw error }) // Cas d'erreur 
}

export const getProdEol = () => {
    let rq = "https://opendata.agenceore.fr/api/records/1.0/search/"
            + "?dataset=installations-de-production-eolien-par-commune"
            + "&q=&rows=2000"
            + "&sort=date_des_donnees"
            + "&facet=nom_dept&facet=libepci&facet=nom_reg&facet=date_des_donnees&facet=s_3_prod_i_regime_d_exploitation&facet=s_3_prod_d_filiere"
            + "&refine.date_des_donnees=2020"
            + "&exclude.nom_reg=Grand-Est"
            + "&exclude.nom_reg=La+R%C3%A9union"
            + "&exclude.nom_reg=Martinique"
            + "&exclude.nom_reg=Guadeloupe"
            + "&exclude.nom_reg=Provence-Alpes-C%C3%B4te+d%27Azur"

    // Requête concernée
    return fetch(rq)            // on renvoie la requête à qui la demande
        .then(response => {
            return response.json() // résultat de la requête en json
        })
        .catch(error => { throw error }) // Cas d'erreur 
}

export const getProdHydrau = () => {
    let rq = "https://opendata.agenceore.fr/api/records/1.0/search/"
            + "?dataset=installations-de-production-hydraulique-par-commune"
            + "&q=&rows=2000"
            + "&refine.date_des_donnees=2020"
            + "&exclude.nom_reg=Grand-Est"
            + "&exclude.nom_reg=La+R%C3%A9union"
            + "&exclude.nom_reg=Guadeloupe"
            + "&exclude.nom_reg=Guyane"
            + "&exclude.nom_reg=Provence-Alpes-C%C3%B4te+d%27Azur"

    // Requête concernée
    return fetch(rq)            // on renvoie la requête à qui la demande
        .then(response => {
            return response.json() // résultat de la requête en json
        })
        .catch(error => { throw error }) // Cas d'erreur 
}