import { GiFedora } from 'react-icons/gi';

export default function NoResults({ message }) {
    return (
        <div className="h-[500px] my-32 flex justify-center items-center flex-col">
            <GiFedora size={350} style={{ fill: 'white' }} />
            <p className="text-5xl text-gray-300 font-bold">
                {message}
            </p>
        </div>
    );
}
