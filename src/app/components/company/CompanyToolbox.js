import { FcSupport } from 'react-icons/fc';
import PagesJaunesTool from './toolbox/PagesJaunesTool';
import LinkedInRecrutementTool from './toolbox/LinkedInRecrutementTool';
import LinkedInSearchTool from './toolbox/LinkedInSearchTool';
import GoogleSearchTool from './toolbox/GoogleSearchTool';
import AnnuaireDesEntreprisesTool from './toolbox/AnnuaireDesEntreprisesTool';
import GoogleMapsTool from './toolbox/GoogleMapsTool';

export default function CompanyToolbox({ company }) {
    const address = company.siege.geo_adresse ?? company.siege.adresse;
    const name = company.nom_raison_sociale ?? company.nom_complet;

    return (
        <div className="w-4/5 p-5 rounded bg-gray-200">
            <p className="text-3xl font-bold flex flex-row items-center gap-2">
                <FcSupport size={50} />
                Toolbox
            </p>
            <hr className="w-full border mt-2 mb-4 border-slate-900" />
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 ">
                    <LinkedInSearchTool term={name} />
                    <GoogleSearchTool term={name} />
                    <PagesJaunesTool name={name} address={address} />
                    <LinkedInRecrutementTool name={name} />
                    <AnnuaireDesEntreprisesTool siren={company.siren} />
                    <GoogleMapsTool name={name} address={address} />
                </div>
            </div>
        </div>
    );
}
