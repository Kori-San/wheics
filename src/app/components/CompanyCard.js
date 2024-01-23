import CompanyNameInfo from './info/CompanyNameInfo';
import CompanySimpleInfo from './info/CompanySimpleInfo';
import CompanyAddressInfo from './info/CompanyAddressInfo';
import CompanyEmployeeInfo from './info/CompanyEmployeeInfo';
import CompanyActivityInfo from './info/CompanyActivityInfo';

export default function CompanyCard({ company }) {
    return (
        <a className="flex justify-center items-center hover:-translate-y-2 transition ease-in-out duration-150" href={`/company/${company.siren}`} key={`${company.siren}-${company.siege.siret}`}>
            <div className=" bg-gray-200 hover:bg-gray-300 transition ease-in-out duration-150 rounded-lg w-11/12 h-48 px-3 pt-5">
                <CompanyNameInfo name={company.nom_complet} />
                <hr className="my-2 w-3/4 h-px border-none bg-slate-600" />
                <div className="flex gap-2 flex-col">
                    <CompanySimpleInfo category={company.categorie_entreprise} siren={company.siren} />
                    <CompanyAddressInfo address={company.siege.geo_adresse} />
                    <CompanyEmployeeInfo workforceBracket={company.tranche_effectif_salarie} />
                    <CompanyActivityInfo NAFCode={company.activite_principale} />
                </div>
            </div>
        </a>
    );
}
