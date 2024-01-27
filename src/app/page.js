'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import NoResults from './components/NoResults';
import CompanyCard from './components/CompanyCard';
import Loader from './components/Loader';
import KeyboardButton from './components/button/KeyboardButton';
import KeyboardMessage from './components/message/KeyboardMessage';

import { emptyCompanyList } from './data/globalWording';
import rechercheEntrepriseQueryBuilder from './lib/api/rechercheEntreprise';

export default function Home() {
    const router = useRouter();

    const [retryTrigger, setRetryTrigger] = useState(false);
    const [loading, setLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

    const searchParams = useSearchParams();
    const basePage = searchParams.has('page') ? parseInt(searchParams.get('page'), 10) : 1;
    const [page, setPage] = useState(basePage !== 0 ? basePage : 1);
    const [maxPage, setMaxPage] = useState();

    const updateURLParams = useCallback(() => {
        const params = new URLSearchParams(searchParams);

        params.set('page', page);
        router.push(`?${params.toString()}`);
    }, [page, searchParams, router]);

    useEffect(() => {
        setCompanies([]);
        setLoading(true);

        fetch(rechercheEntrepriseQueryBuilder(page))
            .then((result) => {
                if (result.status === 400) {
                    setPage(1);
                    return undefined;
                }

                return result.json();
            })
            .then((data) => {
                setCompanies(data.results ?? []);
                setMaxPage(data.total_pages ?? 1);
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
                <Loader toggle={loading} />
                {!loading && (
                    <>
                        <div className="flex flex-col items-center justify-center gap-3">
                            {companies.length === 0
                                ? <NoResults message={emptyCompanyList} />
                                : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 m-5">
                                        {companies.map((company) => <CompanyCard key={`${company.siren}-${company.siege.siren}`} company={company} />)}
                                    </div>
                                )}
                        </div>

                        <div className="flex justify-center items-center gap-10 mb-7">
                            <KeyboardButton disabled={page === 1} onClick={() => { setPage(page - 1); }} label="Previous" message={<FaArrowLeftLong />} />
                            <KeyboardMessage message={page} />
                            <KeyboardButton disabled={page === maxPage} onClick={() => { setPage(page + 1); }} label="Next" message={<FaArrowRightLong />} />
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}
