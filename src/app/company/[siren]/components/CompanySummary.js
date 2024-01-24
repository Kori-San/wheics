import {
    FaLocationDot,
    FaPeopleGroup,
    FaBuilding,
    FaCakeCandles,
    FaHandHoldingDollar,
    FaHandHoldingHeart,
} from 'react-icons/fa6';
import { unknownString } from '@/app/data/globalWording';

import CompanySummaryHeader from './summary/CompanyHeaderSummary';
import CompanySimpleSummary from './summary/CompanySimpleSummary';
import CompanyAddressSumary from './summary/CompanyAddressSumary';

export default function CompanySummary({ company }) {
    return (
        <div className="flex justify-center flex-col gap-3 w-4/5 bg-gray-200 rounded p-5">
            <CompanySummaryHeader name={company.nom_complet} address={company.siege.geo_adresse} />
            <CompanySimpleSummary category={company.categorie_entreprise} siren={company.siren} />
            <CompanyAddressSumary address={company.siege.geo_adresse} />
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
    );
}
