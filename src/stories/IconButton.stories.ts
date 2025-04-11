/* stories.ts 파일에서 코드를 구현하는 것이 코드 응집섭 면에서 더 좋음 */
import type { Meta, StoryObj } from '@storybook/react';

import IconButton from '../components/IconButton';
import { fn } from "@storybook/test";

const meta = {
    title: 'Button/IconButton', /* path */
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        alt: { control: 'text', description: '이미지 대체 글 내용', defaultValue: 'icon' },
        iconPath: { control: 'text', description: '이미지 경로', defaultValue: '' },
        onClick: { action: "clicked", description: "버튼 클릭 이벤트"},
    },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        alt: 'icon',
        iconPath: '/icon/ic-delete-dark.svg',
        onClick: fn()
    },
};