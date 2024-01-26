import { useRouter } from 'next/navigation';

export default function ButtonToRoute({ sticky = true, route, message }) {
    if (!route) {
        throw new Error("No route was given on component 'BoutonToRoute'.");
    }

    const router = useRouter();
    const defaultMessage = `Go to '${route}'`;

    const baseStyle = 'text-xl flex justify-center items-center gap-1.5 bg-gray-200 py-2 px-3 rounded';
    const hoverStyle = 'hover:origin-center hover:rotate-3 hover:scale-110 hover:bg-gray-300 transition ease-in-out duration-200';
    const stickyStyle = sticky ? 'sticky left-10 top-5' : '';

    const finalStlye = `${baseStyle} ${hoverStyle} ${stickyStyle}`;

    if (route === '%PREVIOUS%') {
        return (
            <button
                onClick={() => (router.back())}
                type="button"
                className={finalStlye}
            >
                {message ?? defaultMessage}
            </button>
        );
    }

    return (
        <a href={route}>
            <button
                type="button"
                className={finalStlye}
            >
                {message ?? defaultMessage}
            </button>
        </a>
    );
}
