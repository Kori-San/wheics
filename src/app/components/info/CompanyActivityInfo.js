import { FcFactory } from "react-icons/fc";

import { nomenclatureActivitesFrancaise } from "@/app/data/nomenclatureActivitesFrancaise"

export default function CompanyActivityInfo({ NAFCode }) {
    const activity = nomenclatureActivitesFrancaise[NAFCode];

    return (
        <div className="text-xs flex items-center gap-1 " title={activity}>
            <div className=" w-5 flex justify-center items-center">
                <FcFactory size={15} />
            </div>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                {activity ?? unknownString}
            </div>
        </div>
    )
}