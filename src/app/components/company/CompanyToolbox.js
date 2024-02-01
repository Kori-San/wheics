import { FcSupport } from 'react-icons/fc';
import PagesJaunesTool from './toolbox/PagesJaunesTool';

export default function CompanyToolbox({ company }) {
    const address = company.siege.geo_adresse ?? company.siege.adresse;

    return (
        <div className="w-4/5 p-5 rounded bg-gray-200">
            <p className="text-3xl font-bold flex flex-row items-center gap-2">
                <FcSupport size={50} />
                Toolbox
            </p>
            <hr className="w-full border mt-2 mb-4 border-slate-900" />
            <div className="flex justify-center items-center" />
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-1 bg-gray-200 p-3">
                <PagesJaunesTool name={company.nom_complet} address={address} />
            </div>
        </div>
    );
}
