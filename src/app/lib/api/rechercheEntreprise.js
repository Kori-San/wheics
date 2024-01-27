export default function rechercheEntrepriseQueryBuilder(page) {
    const companyAPIEndpoint = 'https://recherche-entreprises.api.gouv.fr/search?';
    const companyGroupQuery = 'categorie_entreprise=PME%2CETI';// %2CGE"
    const companyFetched = 20;

    let query = companyAPIEndpoint;
    query += companyGroupQuery;
    query += `&page=${page}`;
    query += `&per_page=${companyFetched}`;

    return query;
}
