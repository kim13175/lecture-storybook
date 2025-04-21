interface TagButtonProps {
    children: string;
    isChecked: boolean;
    onClick: () => void;
}

export default function TagButton ({
    children,
    isChecked,
    onClick,
}: TagButtonProps) {
    const buttonStyle = isChecked
        ? 'bg-white text-primary'
        : 'text-white bg-dark-opacity';

    return (
        <button className={`rounded-button px-[10px] border border-white h-[33px] font-medium ${buttonStyle}`}
                onClick={onClick}
        >
            {children}
        </button>
    )
}
