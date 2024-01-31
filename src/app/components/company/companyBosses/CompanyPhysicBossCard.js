import { FcBusinessman } from 'react-icons/fc';
import capitalize from '@/app/lib/capitalize';
import { unknownString } from '@/app/data/globalWording';

export default function CompanyPhysicBossCard({ dirigeant }) {
    if (!dirigeant.nom) {
        throw new Error("Wrong type of Boss given to component 'CompanyPhysicBossCard'.");
    }

    return (
        <div className="hover:-translate-y-1 transition ease-in-out duration-150 bg-gray-300 p-2 max-w-80 h-36 rounded-lg">
            <div className="bg-gray-600 mb-2 flex gap-1 text-gray-200 items-center flex-row p-2 rounded">
                <FcBusinessman size={24} />
                <p>{capitalize(dirigeant.type_dirigeant)}</p>
            </div>
            <div className="flex justify-center flex-col gap-1">
                <p className="text-ellipsis overflow-hidden whitespace-nowrap text-xs" title={dirigeant.nom}>{`Nom: ${dirigeant.nom}`}</p>
                <p className="text-ellipsis overflow-hidden whitespace-nowrap text-xs" title={dirigeant.prenoms}>{`Prénom(s): ${dirigeant.prenoms}`}</p>
                <p className="ttext-ellipsis overflow-hidden whitespace-nowrap text-xs" title={dirigeant.qualite}>{`Qualité: ${dirigeant.qualite ?? unknownString}`}</p>
            </div>
        </div>
    );
}
