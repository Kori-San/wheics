'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import CompanyCard from './components/CompanyCard';
import Loader from './components/Loader';

const companyFetched = 20;

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Home() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const basePage = searchParams.has('page') ? parseInt(searchParams.get('page'), 10) : 1;

    const companyAPI = 'https://recherche-entreprises.api.gouv.fr';
    const companyGroupQuery = 'categorie_entreprise=PME%2CETI';// %2CGE"

    const [retryTrigger, setRetryTrigger] = useState(false);
    const [loading, setLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [page, setPage] = useState(basePage);

    const updateURLParams = useCallback(() => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page);
        router.push(`?${params.toString()}`);
    }, [page, searchParams, router]);

    useEffect(() => {
        setCompanies([]);
        setLoading(true);

        fetch(`${companyAPI}/search?${companyGroupQuery}&page=${page}&per_page=${companyFetched}`)
            .then((result) => result.json())
            .then((data) => {
                setCompanies(data.results);
                setLoading(false);
            })
            .catch(() => {
                setRetryTrigger(!retryTrigger);
            });

        updateURLParams();
    }, [page, retryTrigger, updateURLParams]);

    return (
        <main>
            <div className="flex justify-center items-center flex-col gap-5">
                <div className="flex flex-col items-center justify-center gap-3">
                    <Loader toggle={loading} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 m-5">
                        {companies.map((company) => <CompanyCard key={`${company.siren}-${company.siege.siren}`} company={company} />)}
                    </div>
                </div>
                {!loading && (
                    <div className="flex justify-center items-center gap-10 mb-7">

                        <button
                            type="button"
                            disabled={page === 1}
                            className="keyboardButton"
                            onClick={() => {
                                setPage(page - 1);
                            }}
                            aria-label="Previous"
                        >
                            <span><FaArrowLeftLong /></span>
                        </button>

                        <h1 className="select-none rounded flex items-center justify-center min-w-12 min-h-12 bg-[#e5e7eb] text-[#666666]">
                            {page}
                        </h1>
                        <button
                            type="button"
                            className="keyboardButton"
                            onClick={() => {
                                setPage(page + 1);
                            }}
                            aria-label="Next"
                        >
                            <span><FaArrowRightLong /></span>
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
