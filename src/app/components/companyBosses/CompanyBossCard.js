import { FcBusinessman, FcLibrary } from 'react-icons/fc';
import capitalize from '@/app/lib/capitalize';

export default function CompanyBossCard({ dirigeant }) {
    if (dirigeant.siren) {
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
