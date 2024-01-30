'use client';

import { useEffect, useState } from 'react';
import CompanySummary from '@/app/components/CompanySummary';
import CompanyRawData from '@/app/components/CompanyRawData';
import Loader from '@/app/components/Loader';
import CompanyBosses from '@/app/components/CompanyBosses';

export default function CompanyDetails({ params }) {
    const companyAPI = 'https://recherche-entreprises.api.gouv.fr';

    const [loading, setLoading] = useState(true);
    const [company, setCompany] = useState([]);

    useEffect(() => {
        fetch(`${companyAPI}/search?q=${params.siren}&page=1&per_page=1`)
            .then((result) => result.json())
            .then((data) => setCompany(data.results))
            .catch();

        setLoading(false);
    }, [params.siren]);

    return (
        <main>
            <div className="mt-5 flex flex-col justify-center items-center">
                <Loader toggle={loading} />
                <div className="min-w-full mx-10 mb-10">
                    {company.map((companyData) => (
                        <div className="flex justify-center flex-col gap-5 items-center" key={`${companyData.siren}-${companyData.siege.siret}`}>
                            <CompanySummary company={companyData} />
                            <CompanyBosses dirigeants={companyData.dirigeants} />
                            <hr className="bg-gray-200 border-none w-3/5 h-0.5" />
                            <CompanyRawData company={companyData} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
