import CompanySummaryHeader from './companySummary/CompanyHeaderSummary';
import CompanySimpleSummary from './companySummary/CompanySimpleSummary';
import CompanyAddressSumary from './companySummary/CompanyAddressSumary';
import CompanyEmployeeSummary from './companySummary/CompanyEmployeeSummary';

export default function CompanySummary({ company }) {
    const address = company.siege.geo_adresse ?? company.siege.adresse;

    return (
        <div className="flex justify-center flex-col gap-3 w-4/5 bg-gray-200 rounded p-5">
            <CompanySummaryHeader name={company.nom_complet} address={address} />
            <CompanySimpleSummary category={company.categorie_entreprise} siren={company.siren} />
            <CompanyAddressSumary name={company.nom_complet} address={address} />
            <CompanyEmployeeSummary
                workforceBracket={company.tranche_effectif_salarie}
                year={company.annee_tranche_effectif_salarie}
            />
        </div>
    );
}
