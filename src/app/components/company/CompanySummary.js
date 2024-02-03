import CompanyTitleSummaryInfo from './companySummary/CompanyTitleSummaryInfo';
import CompanySimpleSummaryInfo from './companySummary/CompanySimpleSummaryInfo';
import CompanyAddressSummaryInfo from './companySummary/CompanyAddressSummaryInfo';
import CompanyEmployeeSummaryInfo from './companySummary/CompanyEmployeeSummaryInfo';
import CompanyActivitySummaryInfo from './companySummary/CompanyActivitySummaryInfo';

export default function CompanySummary({ company }) {
    const address = company.siege.geo_adresse ?? company.siege.adresse;
    const name = company.nom_raison_sociale ?? company.nom_complet;

    return (
        <div className="flex justify-center flex-col gap-3 w-4/5 bg-gray-200 rounded p-5">
            <CompanyTitleSummaryInfo name={name} address={address} />
            <CompanySimpleSummaryInfo
                category={company.categorie_entreprise}
                siren={company.siren}
            />
            <CompanyAddressSummaryInfo name={name} address={address} />
            <CompanyActivitySummaryInfo
                nafCode={company.activite_principale}
                section={company.section_activite_principale}
            />
            <CompanyEmployeeSummaryInfo
                workforceBracket={company.tranche_effectif_salarie}
                year={company.annee_tranche_effectif_salarie}
            />
        </div>
    );
}
