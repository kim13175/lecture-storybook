import React from "react";

interface CatgoryButtonProps {
    iconPath: string;
    iconAlt: string;
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CategoryButton({
    iconPath,
    iconAlt,
    text,
    onClick,
}: CatgoryButtonProps) {
    return (
        <button
            className={`
                rounded-button
                border
                border-primary
                text-primary
                text-base
                font-bold
                pl-[22px]
                pr-[22px]
                py-4
                flex
                flex-col
                items-center
            `}
            onClick={onClick}
        >
            <img alt={iconAlt} src={iconPath} />
            <p>{text}</p>
        </button>
    )
}
