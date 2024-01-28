export default function KeyboardButton({
    disabled = false, onClick = undefined, message, label = undefined,
}) {
    return (
        <button
            type="button"
            disabled={disabled}
            className="keyboardButton"
            onClick={onClick}
            aria-label={label}
        >
            <span>{message}</span>
        </button>

    );
}
