export default function Loader({ toggle, message }) {
    if (toggle) {
        return (
            <div class="loader-container">
                <div class="loader-folder">
                    <div class="loader-top" />
                    <div class="loader-bottom" />
                </div>
                <div class="loader-title">{message ?? '' }</div>
            </div>
        );
    }

    return (
        <>
        </>
    );
}
