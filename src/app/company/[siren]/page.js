'use client';

import { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import CompanySummary from '@/app/components/company/CompanySummary';
import CompanyRawData from '@/app/components/company/CompanyRawData';
import Loader from '@/app/components/Loader';
import CompanyBosses from '@/app/components/company/CompanyBosses';
import NoResults from '@/app/components/NoResults';
import KeyboardButton from '@/app/components/button/KeyboardButton';
import CompanyToolbox from '@/app/components/company/CompanyToolbox';

export default function CompanyDetails({ params }) {
    const companyAPI = 'https://recherche-entreprises.api.gouv.fr';

    const [loading, setLoading] = useState(true);
    const [retryTrigger, setRetryTrigger] = useState(false);
    const [company, setCompany] = useState(undefined);

    useEffect(() => {
        setLoading(true);

        if (!/^[0-9]{9}/.test(params.siren)) {
            setLoading(false);
            return;
        }

        fetch(`${companyAPI}/search?q=${params.siren}&page=1&per_page=1`)
            .then((result) => {
                if (result.status > 400) {
                    throw new Error('Error while fetching company');
                }

                return result.json();
            })
            .then((data) => {
                setCompany(data.results[0]);
                setLoading(false);
            })
            .catch(() => {
                setRetryTrigger(!retryTrigger);
            });
    }, [params.siren, retryTrigger]);

    return (
        <main>
            <div className="mt-5 flex flex-col justify-center items-center">
                <Loader toggle={loading} />
                { !loading && (
                    <div className="min-w-full mx-10 mb-10">
                        { company ? (
                            <div className="flex justify-center flex-col gap-5 items-center" key={`${company.siren}-${company.siege.siret}`}>
                                <CompanySummary company={company} />
                                <CompanyToolbox company={company} />
                                <CompanyBosses dirigeants={company.dirigeants} />
                                <hr className="bg-gray-200 border-none w-3/5 h-0.5" />
                                <CompanyRawData company={company} />
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center items-center">
                                <NoResults />
                                <a href="/" aria-label="go-home">
                                    <KeyboardButton message={<FaHome />} />
                                </a>
                            </div>
                        )}
                    </div>
                ) }
            </div>
        </main>
    );
}
