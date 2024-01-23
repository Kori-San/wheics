import { unknownString } from "@/app/data/globalWording"
import { FaLocationDot } from "react-icons/fa6"

export default function CompanyAddressInfo({ address }) {
    return (
        <div className="text-xs flex items-center gap-1 " title={address}>
            <div className=" w-5 flex justify-center items-center">
                <FaLocationDot size={15} style={{ fill: 'red' }} />
            </div>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                {address ?? unknownString}
            </div>
        </div>
    )
}