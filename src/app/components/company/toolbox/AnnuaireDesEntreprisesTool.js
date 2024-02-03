import Image from 'next/image';

export default function AnnuaireDesEntreprisesTool({ siren }) {
    const annuaireEntreprisesURL = `https://annuaire-entreprises.data.gouv.fr/entreprise/${siren}`;

    return (
        <a
            className="h-16 max-w-80 bg-gray-400 rounded flex items-center justify-center group hover:bg-gray-500 transition-all duration-200 ease-in-out hover:scale-105 gap-1 flex-row"
            target="_blank"
            href={annuaireEntreprisesURL}
        >
            <div className="group-hover:drop-shadow-xl flex justify-center items-center transition-all ease-in-out duration-200">
                <Image alt="annuaires des entreprises" src="/images/svg/annuaire-entreprises.svg" height={84} width={84} />
            </div>
        </a>
    );
}
