import { FcBusinessman } from 'react-icons/fc';
import capitalize from '@/app/lib/capitalize';

export default function CompanyPhysicBossCard({ dirigeant }) {
    if (!dirigeant.nom) {
        throw new Error("Wrong type of Boss given to component 'CompanyPhysicBossCard'.");
    }

    return (
        <div key={`${dirigeant.prenoms}-${dirigeant.nom}`} className="bg-gray-300 p-2 rounded-lg">
            <div className="bg-gray-600 mb-2 flex gap-1 text-gray-200 items-center flex-row p-2 rounded">
                <FcBusinessman size={24} />
                <p>{capitalize(dirigeant.type_dirigeant)}</p>
            </div>
            <div className="flex justify-center flex-col gap-1">
                <p className="text-sm">{`Nom: ${dirigeant.nom}`}</p>
                <p className="text-sm">{`Prénoms: ${dirigeant.prenoms}`}</p>
                <p className="text-sm">{`Qualité: ${dirigeant.qualite}`}</p>
            </div>
        </div>
    );
}
