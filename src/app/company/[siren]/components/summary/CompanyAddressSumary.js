import { unknownString } from "@/app/data/globalWording"
import { FaLocationDot } from "react-icons/fa6"

export default function CompanyAddressSumary({ address }) {
    return (
        <div className="text-xl flex items-center gap-1">
            <div className="w-6 flex justify-center items-center">
                <FaLocationDot size={20} style={{ fill: 'red' }} />
            </div>
            {address ?? unknownString}
        </div>
    )
}
