import { FcLibrary } from 'react-icons/fc';
import NoResultsSmall from '@/app/components/NoResultsSmall';
import CompanyMoralBossCard from './companyBosses/CompanyMoralBossCard';
import CompanyPhysicBossCard from './companyBosses/CompanyPhysicBossCard';

export default function CompanyBosses({ dirigeants }) {
    return (
        <div className="w-4/5 p-5 rounded bg-gray-200">
            <p className="text-3xl font-bold flex flex-row items-center gap-2">
                <FcLibrary size={50} />
                {' '}
                {dirigeants.length > 1 ? 'Dirigeants' : 'Dirigeant'}
            </p>
            <hr className="w-full border mt-2 mb-4 border-slate-900" />
            <div className="flex justify-center items-center">
                {dirigeants.length !== 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                        {dirigeants.map((dirigeant) => {
                            if (dirigeant.siren) {
                                return (
                                    <CompanyMoralBossCard
                                        key={dirigeant.siren}
                                        dirigeant={dirigeant}
                                    />
                                );
                            }

                            return (
                                <CompanyPhysicBossCard
                                    key={`${dirigeant.nom}-${dirigeant.prenoms}`}
                                    dirigeant={dirigeant}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <NoResultsSmall />
                )}
            </div>
        </div>
    );
}
