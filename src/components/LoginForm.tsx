import DefaultTextField from "./DefaultTextField.tsx";
import {FormEvent, useState} from "react";
import Label from "./Label.tsx";
import PrimaryButton from "./PrimaryButton.tsx";

interface LoginFormProps {
    onSubmit: (data: { email: string; password: string }) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps)  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (email && password) {
            onSubmit({ email, password })
        }
    }

    return (
        <form>
            <Label htmlFor='email'>이메일</Label>
            <DefaultTextField
                errorMessage='이메일을 확인해주세요.'
                iconPath='/icon/ic-delete-dark.svg'
                iconAlt='delete'
                onIconClick={() => setEmail('')}
                placeholder='이메일을 입력해주세요'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                isError={false}
                id="email"
            />
            <Label htmlFor='password'>비밀번호</Label>
            <DefaultTextField
                errorMessage='비밀번호를 확인해주세요.'
                iconPath='/icon/ic-delete-dark.svg'
                iconAlt='delete'
                onIconClick={() => setPassword('')}
                placeholder='비밀번호를 입력해주세요'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                isError={false}
                id="password"
            />
            <PrimaryButton
                theme="dark"
                disabled={ !email || !password }
                onClick={handleSubmit}
            >
                로그인
            </PrimaryButton>
        </form>
    )
}
