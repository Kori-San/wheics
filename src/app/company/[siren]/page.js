'use client';

import { useEffect, useState } from 'react';
import {
    FaLocationDot, FaPeopleGroup, FaBuilding, FaCakeCandles, FaArrowLeft, FaHandHoldingDollar, FaHandHoldingHeart,
} from 'react-icons/fa6';
import { VscJson } from 'react-icons/vsc';

export default function CompanyDetails({ params }) {
    const companyAPI = 'https://recherche-entreprises.api.gouv.fr';
    const unknownString = 'Inconnue';

    const [loading, setLoading] = useState(true);
    const [company, setCompany] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

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
                <button className="text-xl flex justify-center items-center shadowy-button sticky left-10 top-5">
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
                    {company.map((company) => {
                        console.log(company);

                        return (
                            <div className="flex justify-center flex-col gap-5 items-center" key={`${company.siren}-${company.siege.siret}`}>
                                <div className="flex justify-center flex-col gap-3 w-4/5 bg-gray-300 rounded p-5">
                                    <h1 className="text-3xl">
                                        <i>{company.nom_complet}</i>
                                    </h1>
                                    <hr className="w-1/6" />
                                    <div className="flex flex-row items-center gap-1 text-xl">
                                        <FaBuilding />
                                        <div>
                                            <b>{company.categorie_entreprise}</b>
                                            {' '}
                                            - Siren n°
                                            {company.siren}
                                        </div>
                                    </div>
                                    <p className="text-xl flex items-center gap-1">
                                        <FaLocationDot />
                                        {company.siege.geo_adresse ?? unknownString}
                                    </p>
                                    <p className="flex flex-row items-center text-xl gap-1">
                                        <FaPeopleGroup />
                                        {
                                            company.tranche_effectif_salarie
                                                ? `${company.tranche_effectif_salarie} personnes recensé en ${company.annee_tranche_effectif_salarie}`
                                                : unknownString
                                        }
                                    </p>
                                    <p className="flex flex-row items-center text-xl gap-1">
                                        <FaCakeCandles />
                                        {' '}
                                        {company.date_creation ?? unknownString}
                                    </p>
                                    <p className="flex flex-row items-center text-xl gap-1">
                                        {company.complements.est_association ? (
                                            <>
                                                <FaHandHoldingHeart />
                                                {' '}
                                                Est une association
                                            </>
                                        ) : (
                                            <>
                                                <FaHandHoldingDollar />
                                                {' '}
                                                N&apos;est pas une association
                                            </>
                                        )}
                                    </p>
                                </div>
                                <div className="flex justify-center flex-col w-4/5 gap-3 bg-gray-400 rounded p-5">
                                    <h1 className="flex items-center gap-1 w-full text-2xl p-3 rounded-md">
                                        <VscJson />
                                        {' '}
                                        Raw Data
                                    </h1>
                                    <pre className="bg-gray-300 p-3 rounded">
                                        {JSON.stringify(company, null, 4).replace('["]/g', '')}
                                    </pre>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
