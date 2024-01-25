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
import CompanyEmployeeSummary from './summary/CompanyEmployeeSummary';

export default function CompanySummary({ company }) {
    return (
        <div className="flex justify-center flex-col gap-3 w-4/5 bg-gray-200 rounded p-5">
            <CompanySummaryHeader name={company.nom_complet} address={company.siege.geo_adresse} />
            <CompanySimpleSummary category={company.categorie_entreprise} siren={company.siren} />
            <CompanyAddressSumary
                address={company.siege.geo_adresse}
                x={company.siege.latitude}
                y={company.siege.longitude}
            />
            <CompanyEmployeeSummary
                workforceBracket={company.tranche_effectif_salarie}
                year={company.annee_tranche_effectif_salarie}
            />
        </div>
    );
}
