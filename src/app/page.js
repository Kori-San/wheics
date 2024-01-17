"use client"
import { useEffect, useState } from "react";
import CompanyCard from "./components/CompanyCard";

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Home() {
  const companyAPI = "https://recherche-entreprises.api.gouv.fr";
  const companyGroupQuery = "categorie_entreprise=PME%2CETI"//%2CGE"

  const [retryTrigger, setRetryTrigger] = useState(false);
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setCompanies([]);
    setLoading(true);

    fetch(`${companyAPI}/search?${companyGroupQuery}&page=${page}&per_page=25`)
      .then(result => result.json())
      .then((data) => {
        setCompanies(data.results);
        setLoading(false);
      })
      .catch(() => {
        setRetryTrigger(!retryTrigger);
      })
  }, [page, retryTrigger]);

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
          <div className="grid grid-cols-5 gap-5 m-5">
            {companies.map(company =>
              <CompanyCard key={company.siren + "-" + company.siege.siren} company={company} />
            )}
          </div>
        </div>
      </div >
    </main >
  )
}