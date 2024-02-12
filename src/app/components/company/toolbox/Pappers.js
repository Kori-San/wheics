import Image from 'next/image';

export default function PappersTool({ siren }) {
    const pappersURL = `https://pappers.fr/entreprise/${siren}`;

    return (
        <a
            className="h-16 max-w-80 bg-sky-700 rounded flex items-center justify-center group hover:bg-sky-800 transition-all duration-200 ease-in-out hover:scale-105 gap-1 flex-row"
            target="_blank"
            href={pappersURL}
        >
            <div className="group-hover:drop-shadow-xl flex justify-center items-center transition-all ease-in-out duration-200">
                <Image alt="pappers" src="/images/svg/pappers.svg" height={100} width={100} />
            </div>
        </a>
    );
}
