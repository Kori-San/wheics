export default function KeyboardButton({
    className,
    disabled = false,
    onClick = undefined,
    message,
    label = undefined,
}) {
    return (
        <button
            type="button"
            disabled={disabled}
            className={`keyboardButton ${className}`}
            onClick={onClick}
            aria-label={label}
        >
            <span className="flex px-2 flex-row gap-2">{message}</span>
        </button>

    );
}
