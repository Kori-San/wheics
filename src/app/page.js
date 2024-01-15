"use client"
import { useEffect, useState } from "react";

const companyAPI = "https://recherche-entreprises.api.gouv.fr/search?categorie_entreprise=PME%2CETI&page=1&per_page=25";

export default function Home() {

  const [companies, setCompanies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${companyAPI}/search?categorie_entreprise=PME%2CETI&page=${page}&per_page=25`)
      .then(result => result.json())
      .then(data => setCompanies(data.results))
      .catch(error => console.log(error))
  }, [page]);

  return (
    <main className="">
      <div className="">
        <button className="glass" onClick={() => {
          setPage(page + 1);
          
          return;
        }}>
          Next
        </button>
        {companies.map((company) => {
          return (
            <p key={company.siren + "-" + company.siege.siret}>
              {company.nom_complet}
            </p>
          )
        })}
      </div>
    </main>
  )
}
