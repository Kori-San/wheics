export default function Loader({ toggle, message }) {
    if (toggle) {
        return (
            <div className="loader-container">
                <div className="loader-folder">
                    <div className="loader-top" />
                    <div className="loader-bottom" />
                </div>
                <div className="loader-title">{message ?? ''}</div>
            </div>
        );
    }

    return (
        <>
        </>
    );
}
