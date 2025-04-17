/* stories.ts 파일에서 코드를 구현하는 것이 코드 응집섭 면에서 더 좋음 */
import type { Meta, StoryObj } from '@storybook/react';

import DefaultTextField from '../components/DefaultTextField';
import { fn } from "@storybook/test";

const meta = {
    title: 'TextFields/DefaultTextField', /* path */
    component: DefaultTextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        placeholder: {control: 'text', description: '텍스트 필드 placeholder' },
        value: {control: 'text', description: '텍스트 필드 value' },
        errorMessage: { control: 'text', description: '에러 메시지' },
        iconAlt: { control: 'text', description: '이미지 대체 글 내용' },
        iconPath: { control: 'text', description: '이미지 경로' },
        onChange: { action: 'changed', description: '텍스트 필드 값 변경 이벤트' },
        onIconClick: { action: "clicked", description: '버튼 클릭 이벤트' },
        isError: {control: 'boolean', description: '에러 상태 여부' },
        id: {control: 'text', description: 'input 필드 id' },
    },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: '텍스트를 입력해주세요.',
        value: '',
        errorMessage: '텍스트를 확인해주세요.',
        iconAlt: 'icon',
        iconPath: '/icon/ic-delete-dark.svg',
        onIconClick: fn(),
        onChange: fn(),
        isError: false,
        id: 'email',
    },
};
