import categorieEntrepriseOptions from '@/app/data/select/categorieEntreprise';
import optionListToString from '../react-select/optionListToString';

export default function rechercheEntrepriseQueryBuilder(
    page,
    searchQuery,
    companyCategories,
    companySections,
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

    query += `&page=${page}`;
    query += `&per_page=${companyFetched}`;

    return query;
}
