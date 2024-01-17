import { FaLocationDot, FaPeopleGroup, FaBuilding } from "react-icons/fa6";

export default function CompanyCard({ company }) {
    const unknownString = "Inconnue";
    
    return (
        <a href={"/company/" + company.siren} key={company.siren + "-" + company.siege.siret}>
            <div className=" bg-gray-300 rounded-lg w-80 h-48 pl-3 pt-5">
                <h1 className="text-sm">
                    <i>{company.nom_complet}</i>
                </h1>
                <hr className="my-2 w-20" />
                <div className="flex gap-2 flex-col">
                    <h2 className="text-xs flex items-center gap-1">
                        <FaBuilding />
                        <div>
                            <b>{company.categorie_entreprise}</b> - Siren n°{company.siren}
                        </div>
                    </h2>
                    <p className="text-xs flex items-center gap-1">
                        <FaLocationDot />
                        {company.siege.geo_adresse ?? unknownString}
                    </p>
                    <div>
                        <p className="flex flex-row items-center text-xs gap-1">
                            <FaPeopleGroup />
                            {
                                company.tranche_effectif_salarie ?
                                    `${company.tranche_effectif_salarie} personnes recensé en ${company.annee_tranche_effectif_salarie}`
                                    : unknownString
                            }
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
}