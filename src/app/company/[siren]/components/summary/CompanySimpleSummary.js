import { FcAbout } from "react-icons/fc";

export default function CompanySimpleSummary({ category, siren }) {
    return (
        <div className="flex flex-row items-center gap-1 text-xl">
            <div className="w-6 flex justify-center items-center">
                <FcAbout size={25} />
            </div>
            <div>
                <b>{category}</b>
                {' '}
                - Siren n°
                {siren}
            </div>
        </div>
    )
}