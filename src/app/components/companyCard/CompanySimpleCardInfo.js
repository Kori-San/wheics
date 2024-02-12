import { FcAbout } from 'react-icons/fc';

export default function CompanySimpleCardInfo({ category, siren }) {
    return (
        <h2 className="text-xs flex items-center gap-1">
            <div className=" w-5 flex justify-center items-center">
                <FcAbout size={15} />
            </div>
            <div className="w-full">
                <b>{category}</b>
                {' '}
                - Siren n°
                {siren}
            </div>
        </h2>
    );
}
