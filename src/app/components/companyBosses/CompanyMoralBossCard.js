import { FcLibrary } from 'react-icons/fc';
import capitalize from '@/app/lib/capitalize';

export default function CompanyMoralBossCard({ dirigeant }) {
    if (!dirigeant.siren) {
        throw new Error("Wrong type of Boss given to component 'CompanyMoralBossCard'.");
    }

    return (
        <a
            href={`/company/${dirigeant.siren}`}
            target="_blank"
            key={`${dirigeant.siren}-${dirigeant.nom}`}
            aria-label={`go to ${dirigeant.siren}`}
            className="bg-slate-300 p-2 rounded-lg"
        >
            <div className="bg-gray-600 mb-2 gap-1 flex text-gray-200 items-center flex-row p-2 rounded">
                <FcLibrary size={24} />
                <p>
                    {capitalize(dirigeant.type_dirigeant)}
                </p>
            </div>
            <div className="flex justify-center flex-col gap-1">
                <p className="text-sm ">{`Dénomination: ${dirigeant.denomination}`}</p>
                <p className="text-sm ">{`Siren: ${dirigeant.siren}`}</p>
            </div>
        </a>
    );
}
