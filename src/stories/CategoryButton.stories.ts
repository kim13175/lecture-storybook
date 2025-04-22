/* stories.ts 파일에서 코드를 구현하는 것이 코드 응집섭 면에서 더 좋음 */
import type { Meta, StoryObj } from '@storybook/react';


import { fn } from "@storybook/test";
import CategoryButton from "../components/CategoryButton.tsx";

const meta = {
    title: 'Button/CategoryButton', /* path */
    component: CategoryButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        iconAlt: { control: 'text', description: '아이콘 이미지 대체 글 내용', defaultValue: 'icon' },
        iconPath: { control: 'text', description: '아이콘 이미지 경로', defaultValue: '' },
        text: { control: 'text', description: '버튼에 표시될 텍스트' },
        onClick: { action: "clicked", description: "버튼 클릭 이벤트"},
    },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconAlt: 'icon',
        iconPath: '/icon/ic-category.svg',
        text: '카테고리',
        onClick: fn()
    },
};
