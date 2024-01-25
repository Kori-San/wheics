import CompanyNameInfo from './info/CompanyNameInfo';
import CompanySimpleInfo from './info/CompanySimpleInfo';
import CompanyAddressInfo from './info/CompanyAddressInfo';
import CompanyEmployeeInfo from './info/CompanyEmployeeInfo';
import CompanyActivityInfo from './info/CompanyActivityInfo';

export default function CompanyCard({ company }) {
    return (
        <a className=" max-w-80 flex justify-center flex-col hover:-translate-y-1.5 transition ease-in-out duration-150" href={`/company/${company.siren}`}>
            <div className='w-24 h-4 bg-gray-400 rounded-se-3xl rounded-tl' />
            <div className=" bg-gray-200 hover:bg-gray-300 transition ease-in-out duration-150 rounded-lg rounded-tl-none w-full h-48 px-3 pt-5">
                <CompanyNameInfo name={company.nom_complet} />
                <hr className="my-2 w-full h-px border-none bg-slate-600" />
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
