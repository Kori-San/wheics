import {
    FaLocationDot,
    FaPeopleGroup,
    FaBuilding,
    FaCakeCandles,
    FaHandHoldingDollar,
    FaHandHoldingHeart,
} from 'react-icons/fa6';

export default function CompanySummary({ company: companyData }) {
    const unknownString = 'Inconnue';

    return (

        <div className="flex justify-center flex-col gap-3 w-4/5 bg-gray-300 rounded p-5">
            <h1 className="text-3xl">
                <i>{companyData.nom_complet}</i>
            </h1>
            <hr className="w-1/6" />
            <div className="flex flex-row items-center gap-1 text-xl">
                <FaBuilding />
                <div>
                    <b>{companyData.categorie_entreprise}</b>
                    {' '}
                    - Siren n°
                    {companyData.siren}
                </div>
            </div>
            <p className="text-xl flex items-center gap-1">
                <FaLocationDot />
                {companyData.siege.geo_adresse ?? unknownString}
            </p>
            <p className="flex flex-row items-center text-xl gap-1">
                <FaPeopleGroup />
                {
                    companyData.tranche_effectif_salarie
                        ? `${companyData.tranche_effectif_salarie} personnes recensé en ${companyData.annee_tranche_effectif_salarie}`
                        : unknownString
                }
            </p>
            <p className="flex flex-row items-center text-xl gap-1">
                <FaCakeCandles />
                {' '}
                {companyData.date_creation ?? unknownString}
            </p>
            <p className="flex flex-row items-center text-xl gap-1">
                {companyData.complements.est_association ? (
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
    );
}
