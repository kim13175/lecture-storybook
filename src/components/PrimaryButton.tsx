type PrimaryButtonTheme = 'dark' | 'light' | 'social' | 'text';

interface PrimaryButtonProps {
    theme: PrimaryButtonTheme;
    disabled: boolean;
    children: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const dark = 'bg-primary text-white';
const light = 'bg-white text-primary';
const social = 'bg-social text-white';
const text = 'bg-transparent text-white';
/* tailwind css 접두사를 이용할 수 있음 */
const disabledStyle ='disabled:bg-mono100 disabled:text-mono200';

/* Record: key, type */
const color: Record<PrimaryButtonTheme, string> = {
    dark,
    light,
    social,
    text,
}

export default function PrimaryButton({
    theme,
    disabled,
    children,
    onClick,
}: PrimaryButtonProps) {
    return (
        <button className={
            `w-full h-[59px] bg-primary 
            rounded-button text-white
            ${disabledStyle} 
            ${color[theme]}
        `}
            disabled={disabled}
            onClick={onClick}>{children}</button>)
}
