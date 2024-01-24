export default function ButtonToRoute({ sticky = true, route, message }) {
    if (!route) {
        throw new Error("No route was given on component 'BoutonToRoute'.");
    }

    if (!message) {
        message = `Go to '${route}'`;
    }

    const baseStyle = 'text-xl flex justify-center items-center shadowy-button';
    const stickyStyle = sticky ? 'sticky left-10 top-5' : '';

    const finalStlye = `${baseStyle} ${stickyStyle}`;

    return (
        <a href={route}>
            <button
                type="button"
                className={finalStlye}
            >
                {message}
            </button>
        </a>
    );
}
