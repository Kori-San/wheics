import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Select from 'react-select';
import categorieEntrepriseOptions from '../data/select/categorieEntreprise';
import optionStringToList from '../lib/react-select/optionStringToList';
import sectionEntrepriseOptions from '../data/select/sectionEntreprise';
import trancheSalarieOptions from '../data/select/trancheSalarie';
import complementsEntrepriseOptions from '../data/select/complementsEntreprise';

export default function RootHeader({
    setSearchQuery,
    setPage,
    setCompanyCategories,
    setCompanySections,
    setCompanyWorkforce,
    setCompanyComplements,
}) {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-5 gap-3">
            <div className="flex flex-row rounded bg-gray-300">
                <div className="px-2 py-1">
                    <a href="/">
                        <Image src="/images/wheics_logo_transparent.png" width={32} height={32} alt="Logo" />
                    </a>
                </div>
                <input
                    type="text"
                    className=" w-72 md:w-80 lg:w-96 text-xs md:text-sm focus:bg-gray-100 focus:text-gray-600 bg-white transition duration-300 ease-in-out px-2 rounded-e text-gray-400"
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
                placeholder="Categories d'entreprise"
                defaultValue={
                    searchParams.has('categories') && searchParams.get('categories')
                        ? optionStringToList(searchParams.get('categories'), categorieEntrepriseOptions)
                        : []
                }
                options={categorieEntrepriseOptions}
                className="text-xs w-[336px] md:w-[368px] lg:w-[432px]"
                isMulti
                onChange={(selectedOptions) => {
                    setCompanyCategories(selectedOptions);
                    setPage(1);
                }}
            />
            <Select
                closeMenuOnSelect={false}
                isClearable
                isSearchable
                placeholder="Secteurs d'activités"
                defaultValue={
                    searchParams.has('sections') && searchParams.get('sections')
                        ? optionStringToList(searchParams.get('sections'), sectionEntrepriseOptions)
                        : []
                }
                className="text-xs w-[336px] md:w-[368px] lg:w-[432px]"
                styles={{
                    multiValueLabel: (baseStyles) => ({
                        ...baseStyles,
                        maxWidth: '5ch',
                    }),
                }}
                options={sectionEntrepriseOptions}
                isMulti
                onChange={(selectedOptions) => {
                    setCompanySections(selectedOptions);
                    setPage(1);
                }}
            />
            <Select
                closeMenuOnSelect={false}
                isClearable
                isSearchable
                placeholder="Compléments d'activités"
                defaultValue={
                    searchParams.has('complements') && searchParams.get('complements')
                        ? optionStringToList(searchParams.get('complements'), complementsEntrepriseOptions)
                        : []
                }
                className="text-xs w-[336px] md:w-[368px] lg:w-[432px]"
                styles={{
                    multiValueLabel: (baseStyles) => ({
                        ...baseStyles,
                        maxWidth: '5ch',
                    }),
                }}
                options={complementsEntrepriseOptions}
                isMulti
                onChange={(selectedOptions) => {
                    setCompanyComplements(selectedOptions);
                    setPage(1);
                }}
            />

            <Select
                closeMenuOnSelect={false}
                isClearable
                isSearchable
                placeholder="Effectif salarié"
                defaultValue={
                    searchParams.has('workforce') && searchParams.get('workforce')
                        ? optionStringToList(searchParams.get('workforce'), trancheSalarieOptions)
                        : []
                }
                className="text-xs w-[336px] md:w-[368px] lg:w-[432px]"
                styles={{
                    multiValueLabel: (baseStyles) => ({
                        ...baseStyles,
                        maxWidth: '10ch',
                    }),
                }}
                options={trancheSalarieOptions}
                isMulti
                onChange={(selectedOptions) => {
                    setCompanyWorkforce(selectedOptions);
                    setPage(1);
                }}
            />
        </div>
    );
}
