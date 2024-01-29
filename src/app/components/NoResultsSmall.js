import { GiFedora } from 'react-icons/gi';
import { noResults } from '../data/globalWording';

export default function NoResultsSmall() {
    return (
        <div className="h-[100px] gap-5 my-10 flex justify-center items-center flex-row">
            <GiFedora size={100} style={{ fill: 'black' }} />
            <p className="text-5xl text-black font-bold">
                {noResults}
            </p>
        </div>
    );
}
