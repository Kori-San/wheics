import { FcAbout } from 'react-icons/fc';

export default function CompanySimpleSummary({ category, siren }) {
    const annuaireEntreprisesURL = `https://annuaire-entreprises.data.gouv.fr/entreprise/${siren}`;

    return (
        <a
            href={annuaireEntreprisesURL}
            target="_blank"
            className="transition ease-in-out hover:translate-x-1 duration-300 flex flex-row items-center gap-1 text-xl"
        >
            <div className="w-6 flex justify-center items-center">
                <FcAbout size={25} />
            </div>
            <div className="text-ellipsis whitespace-nowrap overflow-hidden">
                <b>{category}</b>
                {' '}
                - Siren n°
                {siren}
            </div>
        </a>
    );
}
