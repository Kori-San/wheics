'use client';

import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import CompanySummary from './components/CompanySummary';
import CompanyRawData from './components/CompanyRawData';

export default function CompanyDetails({ params }) {
    const companyAPI = 'https://recherche-entreprises.api.gouv.fr';

    const [loading, setLoading] = useState(true);
    const [company, setCompany] = useState([]);

    useEffect(() => {
        fetch(`${companyAPI}/search?q=${params.siren}&page=1&per_page=1`)
            .then((result) => result.json())
            .then((data) => setCompany(data.results))
            .catch((error) => console.log(error));

        setLoading(false);
    }, [params.siren]);
    return (
        <main>
            <a href="/">
                <button
                    type="button"
                    className="text-xl flex justify-center items-center shadowy-button sticky left-10 top-5"
                >
                    <FaArrowLeft />
                    {' '}
                    Back
                </button>
            </a>
            <div className="flex justify-center items-center">
                <div className={loading ? 'loader absolute top-2/4 bottom-2/4' : undefined}>
                    <div className={loading ? 'subloader' : undefined} />
                </div>
                <div className="min-w-full mx-10 mb-10">
                    {company.map((companyData) => (
                        <div className="flex justify-center flex-col gap-5 items-center" key={`${companyData.siren}-${companyData.siege.siret}`}>
                            <CompanySummary company={companyData} />
                            <CompanyRawData company={companyData} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
