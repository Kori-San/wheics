export default function CompanyNameInfo({ name }) {
    return (
        <h1 className="text-xs overflow-hidden text-ellipsis whitespace-nowrap" title={name}>
            <i>{name}</i>
        </h1>
    )
}