import categorieEntrepriseOptions from '@/app/data/select/categorieEntreprise';
import optionListToString from '../react-select/optionListToString';

export default function rechercheEntrepriseQueryBuilder(
    page,
    searchQuery,
    companyCategories,
    companySections,
    companyWorkforce,
    companyComplements,
    caMin,
    caMax,
) {
    const companyAPIEndpoint = 'https://recherche-entreprises.api.gouv.fr/search?';
    const companyFetched = 20;

    let query = companyAPIEndpoint;

    if (searchQuery) {
        query += `&q=${searchQuery}`;
    }

    let categories;

    if (companyCategories && companyCategories.length > 0) {
        categories = optionListToString(companyCategories);
    } else {
        categories = optionListToString(categorieEntrepriseOptions);
    }

    query += `&categorie_entreprise=${categories}`;

    if (companySections && companySections.length > 0) {
        const sections = optionListToString(companySections);
        query += `&section_activite_principale=${sections}`;
    }

    if (companyWorkforce && companyWorkforce.length > 0) {
        const workforce = optionListToString(companyWorkforce);
        query += `&tranche_effectif_salarie=${workforce}`;
    }

    if (companyComplements && companyComplements.length > 0) {
        const complements = optionListToString(companyComplements).split(',');
        for (let index = 0; index < complements.length; index += 1) {
            query += `&${complements[index]}=true`;
        }
    }

    if (caMin) {
        query += `&ca_min=${caMin}`;
    }

    if (caMax) {
        query += `&ca_max=${caMax}`;
    }

    query += `&page=${page}`;
    query += `&per_page=${companyFetched}`;

    return query;
}
