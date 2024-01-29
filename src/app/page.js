'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import NoResults from './components/NoResults';
import CompanyCard from './components/CompanyCard';
import Loader from './components/Loader';
import KeyboardButton from './components/button/KeyboardButton';
import KeyboardMessage from './components/message/KeyboardMessage';

import rechercheEntrepriseQueryBuilder from './lib/api/rechercheEntreprise';
import RootHeader from './components/RootHeader';
import optionListToString from './lib/react-select/optionListToString';
import optionStringToList from './lib/react-select/optionStringToList';
import categorieEntrepriseOptions from './data/select/categorieEntreprise';
import sectionEntrepriseOptions from './data/select/sectionEntreprise';

export default function Home() {
    const router = useRouter();

    /* Define multiple ReactHooks */
    /* - Loading phase Specific Hooks   */
    const [retryTrigger, setRetryTrigger] = useState(false);
    const [loading, setLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

    /* - URL Params Hooks */
    const searchParams = useSearchParams();
    const basePage = searchParams.has('page') ? parseInt(searchParams.get('page'), 10) : 1;
    /* -- Page Hooks */
    const [page, setPage] = useState(basePage !== 0 ? basePage : 1);
    const [maxPage, setMaxPage] = useState();

    /* -- Query Hooks */
    const baseQuery = searchParams.has('q') ? searchParams.get('q') : '';
    const [searchQuery, setSearchQuery] = useState(baseQuery);

    /* -- CompanyCategories Hooks */
    const baseStringCategories = searchParams.has('categories') && searchParams.get('categories')
        ? searchParams.get('categories')
        : '';
    const baseCategories = optionStringToList(baseStringCategories, categorieEntrepriseOptions);

    const [companyCategories, setCompanyCategories] = useState(baseCategories);

    /* -- CompanySections Hooks */
    const baseStringSections = searchParams.has('sections') && searchParams.get('sections')
        ? searchParams.get('sections')
        : '';
    const baseSections = optionStringToList(baseStringSections, sectionEntrepriseOptions);

    const [companySections, setCompanySections] = useState(baseSections);

    /* Update URL Params */
    const updateURLParams = useCallback(() => {
        const params = new URLSearchParams(searchParams);

        if (searchQuery) {
            params.set('q', searchQuery);
        } else {
            params.delete('q');
        }

        if (page !== 1) {
            params.set('page', page);
        } else {
            params.delete('page');
        }

        if (companyCategories && companyCategories.length > 0) {
            const categories = optionListToString(companyCategories);
            params.set('categories', categories);
        } else {
            params.delete('categories');
        }

        if (companySections && companySections.length > 0) {
            const sections = optionListToString(companySections);
            params.set('sections', sections);
        } else {
            params.delete('sections');
        }

        router.push(`?${params.toString()}`);
    }, [page, searchParams, router, searchQuery, companyCategories, companySections]);

    /* Load data from API using fetch everytime one of the dependencies is changed */
    useEffect(() => {
        /* - Reset Page */
        setCompanies([]);
        setLoading(true);

        /* - Fetch Data */
        fetch(rechercheEntrepriseQueryBuilder(
            page,
            searchQuery,
            companyCategories,
            companySections,
        ))
            .then((result) => {
                /* -- Return to default page if error */
                if (result.status === 400) {
                    setPage(1);
                    return undefined;
                }

                return result.json();
            })
            .then((data) => {
                /* -- Set fetched data and hooks */
                setCompanies(data.results ?? []);
                setMaxPage(data.total_pages ?? 1);
                setLoading(false);
            })
            .catch(() => {
                /* -- Retry data fetching on error */
                setRetryTrigger(!retryTrigger);
            });

        /* - Update URL Params */
        updateURLParams();
    }, [page, retryTrigger, updateURLParams, searchQuery, companyCategories, companySections]);

    return (
        <main>
            <div className="flex justify-center items-center flex-col gap-5">
                <RootHeader
                    setSearchQuery={setSearchQuery}
                    setPage={setPage}
                    setCompanyCategories={setCompanyCategories}
                    setCompanySections={setCompanySections}
                />
                <Loader toggle={loading} />
                {!loading && (
                    <>
                        <div className="flex flex-col items-center justify-center gap-3">
                            {companies.length === 0
                                ? <NoResults />
                                : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 m-5">
                                        {companies.map((company) => <CompanyCard key={`${company.siren}-${company.siege.siren}`} company={company} />)}
                                    </div>
                                )}
                        </div>

                        <div className="flex justify-center items-center gap-5 mb-7">
                            <KeyboardButton disabled={page === 1} onClick={() => { setPage(page - 1); }} label="Previous" message={<FaArrowLeftLong />} />
                            <KeyboardMessage message={page} />
                            <KeyboardButton disabled={page === maxPage || maxPage === 0} onClick={() => { setPage(page + 1); }} label="Next" message={<FaArrowRightLong />} />
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}
