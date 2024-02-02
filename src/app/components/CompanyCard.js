import CompanyNameCardInfo from './companyCard/CompanyNameCardInfo';
import CompanySimpleCardInfo from './companyCard/CompanySimpleCardInfo';
import CompanyAddressCardInfo from './companyCard/CompanyAddressCardInfo';
import CompanyEmployeeCardInfo from './companyCard/CompanyEmployeeCardInfo';
import CompanyActivityCardInfo from './companyCard/CompanyActivityCardInfo';

export default function CompanyCard({ company }) {
    const address = company.siege.geo_adresse ?? company.siege.adresse;
    const name = company.nom_raison_sociale ?? company.nom_complet;

    return (
        <a aria-label={`card of company ${name}`} className="max-w-80 flex justify-center flex-col hover:-translate-y-1.5 transition ease-in-out duration-150" href={`/company/${company.siren}`}>
            <div className="w-24 h-4 bg-gray-400 rounded-se-3xl rounded-tl" />
            <div className="bg-gray-200 hover:bg-gray-300 transition ease-in-out duration-150 rounded-lg rounded-tl-none w-full h-48 px-3 pt-5">
                <CompanyNameCardInfo name={name} />
                <hr className="my-2 w-full h-px border-none bg-slate-600" />
                <div className="flex gap-2 flex-col">
                    <CompanySimpleCardInfo
                        category={company.categorie_entreprise}
                        siren={company.siren}
                    />
                    <CompanyAddressCardInfo address={address} />
                    <CompanyEmployeeCardInfo workforceBracket={company.tranche_effectif_salarie} />
                    <CompanyActivityCardInfo NAFCode={company.activite_principale} />
                </div>
            </div>
        </a>
    );
}
