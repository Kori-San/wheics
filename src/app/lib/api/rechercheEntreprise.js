import categorieEntrepriseOptions from '@/app/data/select/categorieEntreprise';
import categoryListToString from '../companyCategories/categoryListToString';

export default function rechercheEntrepriseQueryBuilder(page, searchQuery, companyCategories) {
    const companyAPIEndpoint = 'https://recherche-entreprises.api.gouv.fr/search?';
    const companyFetched = 20;

    let query = companyAPIEndpoint;

    if (searchQuery) {
        query += `&q=${searchQuery}`;
    }

    let categories;

    if (companyCategories && companyCategories.length > 0) {
        categories = categoryListToString(companyCategories);
    } else {
        categories = categoryListToString(categorieEntrepriseOptions);
    }

    query += `&categorie_entreprise=${categories}`;

    query += `&page=${page}`;
    query += `&per_page=${companyFetched}`;

    return query;
}
