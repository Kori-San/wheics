import NoResultsSmall from '@/app/components/NoResultsSmall';
import CompanyBossCard from './companyBosses/CompanyBossCard';

export default function CompanyBosses({ dirigeants }) {
    return (
        <div className="w-4/5 p-5 rounded bg-slate-50">
            <p className="text-3xl font-bold">{dirigeants.length > 1 ? 'Dirigeants' : 'Dirigeant'}</p>
            <hr className="w-full border mt-2 mb-3 border-slate-900" />
            { dirigeants.length !== 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
                    {dirigeants.map((dirigeant) => (
                        <CompanyBossCard
                            key={dirigeant.siren ?? dirigeant.nom}
                            dirigeant={dirigeant}
                        />
                    )) }
                </div>
            ) : (
                <NoResultsSmall />
            ) }
        </div>
    );
}
