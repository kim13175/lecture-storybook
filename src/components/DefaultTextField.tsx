import IconButton from "./IconButton.tsx";
import ErrorMessage from "./ErrorMessage.tsx";
import React from "react";

interface DefaultTextFieldProps {
    errorMessage: string;
    iconPath: string;
    iconAlt: string;
    onIconClick: React.MouseEventHandler<HTMLButtonElement>;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string,
    isError: boolean,
}

export default function DefaultTextField({
    errorMessage,
    iconPath,
    iconAlt,
    onIconClick,
    placeholder,
    onChange,
    value,
    isError
}: DefaultTextFieldProps) {
    const [isFocused, setIsFocused] = React.useState(false);
    const borderColor = isFocused
        ? 'border-secondary'
        : !value
        ? 'border-mono300'
        : 'border-primary';

    return (
        <div>
            <div
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={
                    `text-primary 
                     border-b 
                     focus: 
                     ${borderColor}
                `}>
                <input className='outline-none' type='text' placeholder={placeholder} onChange={onChange} value={value} />
                { !!value && <IconButton alt={iconAlt} iconPath={iconPath} onClick={onIconClick}/> }
            </div>
            { isError && <ErrorMessage>{errorMessage}</ErrorMessage> }
        </div>
    )
}