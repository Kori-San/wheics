'use client';

import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import CompanySummary from './components/CompanySummary';
import CompanyRawData from './components/CompanyRawData';
import ButtonToRoute from '@/app/components/ButtonToRoute';
import Loader from '@/app/components/Loader';

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
            <ButtonToRoute route="%PREVIOUS%" message={[<FaArrowLeft key={Math.floor(Math.random() * 1024)} />, ' Back']} />
            <div className="flex justify-center items-center">
                <Loader toggle={loading} />
                <div className="min-w-full mx-10 mb-10">
                    {company.map((companyData) => (
                        <div className="flex justify-center flex-col gap-5 items-center" key={`${companyData.siren}-${companyData.siege.siret}`}>
                            <CompanySummary company={companyData} />
                            <hr className="bg-gray-200 border-none w-3/5 h-0.5" />
                            <CompanyRawData company={companyData} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
