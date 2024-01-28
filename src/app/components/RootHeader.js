import Image from 'next/image';

export default function RootHeader({ setSearchQuery, setPage }) {
    return (
        <div className="m-8 flex flex-col md:flex-row justify-center gap-5 items-center">
            <div className="flex flex-row rounded bg-slate-200">
                <div className="px-2 py-1">
                    <a href="/">
                        <Image src="/images/wheics_logo_transparent.png" width={32} height={32} alt="Logo" />
                    </a>
                </div>
                <input
                    className="w-96 px-2 rounded-e searchBar text-gray-600"
                    placeholder="SIREN, Dénomination ou Dirigeant"
                    onChange={(event) => {
                        setSearchQuery(event.target.value);
                        setPage(1);
                    }}
                />
            </div>
        </div>
    );
}
