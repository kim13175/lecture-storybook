interface IconButtonProps {
    alt: string
    iconPath: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({ alt, iconPath, onClick }:IconButtonProps) {
    return (
        <button onClick={onClick}>
            <img src={iconPath} alt={alt} />
        </button>
    )
}