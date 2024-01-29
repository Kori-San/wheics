import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Select from 'react-select';
import categorieEntrepriseOptions from '../data/select/categorieEntreprise';
import categoryStringToList from '../lib/companyCategories/categoryStringToList';

export default function RootHeader({ setSearchQuery, setPage, setCompanyCategories }) {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    return (
        <div className="m-8 flex flex-col lg:flex-row justify-center gap-5 items-center">
            <div className="flex flex-row rounded bg-gray-300">
                <div className="px-2 py-1">
                    <a href="/">
                        <Image src="/images/wheics_logo_transparent.png" width={32} height={32} alt="Logo" />
                    </a>
                </div>
                <input
                    type="text"
                    className=" w-72 md:w-96 text-xs md:text-sm focus:bg-gray-100 focus:text-gray-600 bg-white transition duration-300 ease-in-out px-2 rounded-e typeFont text-gray-400"
                    placeholder="SIREN, Dénomination ou Dirigeant"
                    defaultValue={params.get('q') || ''}
                    onChange={(event) => {
                        setSearchQuery(event.target.value);
                        setPage(1);
                    }}
                />
            </div>
            <Select
                closeMenuOnSelect={false}
                isClearable
                isSearchable
                defaultValue={
                    searchParams.has('categories') && searchParams.get('categories')
                        ? categoryStringToList(searchParams.get('categories'))
                        : categorieEntrepriseOptions[0]
                }
                options={categorieEntrepriseOptions}
                isMulti
                onChange={(selectedOptions) => {
                    setCompanyCategories(selectedOptions);
                    setPage(1);
                }}
            />
        </div>
    );
}
