interface ErrorMessageProps {
    children: string;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
    return <p className='text-error text-xs'>{children}</p>
}