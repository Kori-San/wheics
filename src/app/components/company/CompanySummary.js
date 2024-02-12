import CompanyTitleSummaryInfo from './companySummary/CompanyTitleSummaryInfo';
import CompanySimpleSummaryInfo from './companySummary/CompanySimpleSummaryInfo';
import CompanyAddressSummaryInfo from './companySummary/CompanyAddressSummaryInfo';
import CompanyEmployeeSummaryInfo from './companySummary/CompanyEmployeeSummaryInfo';
import CompanyActivitySummaryInfo from './companySummary/CompanyActivitySummaryInfo';
import CompanyFindSimilarSummaryInfo from './companySummary/CompanyFindSimilarSummaryInfo';
import CompanyComplementCardSummaryInfo from './companySummary/CompanyComplementCardSummaryInfo';
import { isComplementEntrepriseOptions } from '@/app/data/select/complementsEntreprise';
import CompanyLastUpdateSummaryInfo from './companySummary/CompanyLastUpdateSummaryInfo';
import CompanyMoneySummaryInfo from './companySummary/CompanyMoneySummaryInfo';

export default function CompanySummary({ company }) {
    const address = company.siege.geo_adresse ?? company.siege.adresse;
    const name = company.nom_raison_sociale ?? company.nom_complet;
    const category = company.categorie_entreprise.toLowerCase();

    return (
        <div className="flex justify-center flex-col gap-3 w-4/5 bg-gray-200 rounded p-5">
            <CompanyTitleSummaryInfo name={name} />
            <div className="flex flex-col justify-evenly gap-5">
                <div className="w-full flex flex-col gap-3">
                    <CompanySimpleSummaryInfo
                        category={category}
                        siren={company.siren}
                    />
                    <CompanyAddressSummaryInfo name={company.sigle ?? name} address={address} />
                    <CompanyEmployeeSummaryInfo
                        workforceBracket={company.tranche_effectif_salarie}
                        year={company.annee_tranche_effectif_salarie}
                    />
                    <CompanyActivitySummaryInfo
                        nafCode={company.activite_principale}
                        section={company.section_activite_principale}
                    />
                    <CompanyMoneySummaryInfo
                        finances={company.finances}
                    />
                </div>
                <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1">
                    {Object.keys(company.complements)
                        .filter(
                            (complement) => isComplementEntrepriseOptions(complement)
                                            && company.complements[complement] === true,
                        )
                        .map((complement) => (
                            <CompanyComplementCardSummaryInfo
                                key={`key-summary-${complement}-info`}
                                complement={complement}
                                value={company.complements[complement]}
                            />
                        ))}
                </div>
            </div>
            <hr />
            <CompanyFindSimilarSummaryInfo
                name={name}
                workforceBracket={company.tranche_effectif_salarie}
                category={category}
                section={company.section_activite_principale}
            />
            <CompanyLastUpdateSummaryInfo date={company.date_mise_a_jour} />
        </div>
    );
}
