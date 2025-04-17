/* stories.ts 파일에서 코드를 구현하는 것이 코드 응집섭 면에서 더 좋음 */
import type { Meta, StoryObj } from '@storybook/react';

import PrimaryButton from '../components/PrimaryButton.tsx';
import { fn } from "@storybook/test";

const meta = {
    title: 'Button/PrimaryButton', /* path */
    component: PrimaryButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: '360px' }}>
                <Story />
            </div>
        )
    ],
    argTypes: {
        theme: {
            control: {
                type: 'select',
                options: ['dark', 'light', 'social', 'text'],
            },
            description: '버튼 테마',
            defaultValue: 'dark',
        },
        children: { control: 'text', description: '버튼 내용'},
        onClick: { action: 'clicked', description: '버튼 클릭 이벤트'},
        disabled: {control: 'boolean', description: '버튼 비활성화 여부', defaultValue: true},
    },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        theme: 'dark',
        disabled: false,
        children: '버튼',
        onClick: fn(),
    },
};

export const Light: Story = {
    args: {
        theme: 'light',
        disabled: false,
        children: '버튼',
        onClick: fn(),
    },
};

export const Social: Story = {
    args: {
        theme: 'social',
        disabled: false,
        children: '버튼',
        onClick: fn(),
    },
};

export const Text: Story = {
    args: {
        theme: 'text',
        disabled: false,
        children: '버튼',
        onClick: fn(),
    },
};

export const Disabled: Story = {
    args: {
        theme: 'dark',
        disabled: true,
        children: '버튼',
        onClick: fn(),
    },
};
