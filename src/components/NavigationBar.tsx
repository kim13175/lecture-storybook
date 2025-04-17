import IconButton from "./IconButton.tsx";
import '../index.css';

interface NavigationBarProps {
    showBackButton: boolean;
    showCloseButton: boolean;
    showTitle: boolean;
    title?: string;
    onBackButtonClick: React.MouseEventHandler<HTMLButtonElement>;
    onCloseButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
    showBackButton,
    showCloseButton,
    showTitle,
    title = '',
    onBackButtonClick = () => {},
    onCloseButtonClick = () => {},
} : NavigationBarProps) {
    return (
        <div className='w-full flex justify-between'>
            <div className='navigation-title-wrapper flex'>
                {showBackButton && (
                    <IconButton alt='뒤로가기 버튼' iconPath='/icon/ic-back-dark.svg' onClick={onBackButtonClick}/>
                )}
                {showTitle && <h1 className='text-2xl'>{title}</h1>}
            </div>
            {showCloseButton && (
                <IconButton alt='닫기 버튼' iconPath='/icon/ic-delete-dark.svg' onClick={onCloseButtonClick}/>
            )}
        </div>
    )
}
