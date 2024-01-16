"use client"
import { useEffect, useState } from "react";
import { FaLocationDot, FaPeopleGroup, FaBuilding } from "react-icons/fa6";

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Home() {
  const companyAPI = "https://recherche-entreprises.api.gouv.fr/search?categorie_entreprise=PME%2CETI&page=1&per_page=25";
  const unknownString = "Inconnue";

  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setCompanies([]);
    setLoading(true);

    fetch(`${companyAPI}/search&page=${page}&per_page=25`)
      .then(result => result.json())
      .then(data => setCompanies(data.results))
      .catch(error => console.log(error))

    setLoading(false);
  }, [page]);

  return (
    <main>
      <div className="mt-10 flex justify-center items-center flex-col gap-5">
        <div className="flex justify-center items-center gap-10">
          <button disabled={page == 1 ? true : false} className="glass shadowy-button w-36 flex justify-center items-center" onClick={() => {
            setPage(page - 1);
          }}>
            Previous
          </button>
          <button className="glass shadowy-button w-36 flex justify-center items-center" onClick={() => {
            setPage(page + 1);
          }}>
            Next
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className={loading ? "loader" : undefined}>
            <div className={loading ? "subloader" : undefined} />
          </div>
          <div className="grid grid-cols-6 gap-5 m-5">
            {companies.map((company) => {
              console.log(company);
              return (
                <a href="/" key={company.siren + "-" + company.siege.siret}>
                  <div className=" bg-gray-300 rounded-lg w-64 h-40 pl-3 pt-5">
                    <h1 className="text-xs">
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
              )
            })}
          </div>

        </div>
      </div >
    </main >
  )
}
