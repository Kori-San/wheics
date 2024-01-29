import { GiFedora } from 'react-icons/gi';
import { noResults } from '../data/globalWording';

export default function NoResults() {
    return (
        <div className="h-[400px] my-28 flex justify-center items-center flex-col">
            <GiFedora size={350} style={{ fill: 'white' }} />
            <p className=" text-3xl text-center md:text-4xl mx-5 lg:text-5xl text-gray-300 font-bold">
                {noResults}
            </p>
        </div>
    );
}
