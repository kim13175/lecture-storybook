import { useState } from 'react';
import './App.css';
import Label from "./components/Label.tsx";
import DefaultTextField from "./components/DefaultTextField.tsx";


function App() {
  const [isError, setIsError] = useState(false);

  return (
      <div className='flex flex-col items-center gap-4'>
          <Label htmlFor='email'>이메일</Label>
          <DefaultTextField
              id='email'
              errorMessage='이메일 형식을 맞춰서 입력해 주세요'
              iconPath='/icon/ic-delete-dark.svg'
              iconAlt='delete-value'
              onIconClick={() => {}}
              placeholder='이메일을 입력해 주세요.'
              onChange={() => {}}
              value=''
              isError={isError}
          />
          <div className='my-20'></div>
          <Label htmlFor='address'>주소</Label>
          <DefaultTextField
              id='address'
              errorMessage='주소를 올바르게 입력해 주세요.'
              iconPath='/icon/ic-delete-dark.svg'
              iconAlt='delete-value'
              onIconClick={() => {}}
              placeholder='주소를 입력해 주세요.'
              onChange={() => {}}
              value=''
              isError={isError}
          />
          <button onClick={() => setIsError((prev) => !prev)}>에러 토글</button>
      </div>
  )
}

export default App
