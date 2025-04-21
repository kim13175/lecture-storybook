/* stories.ts 파일에서 코드를 구현하는 것이 코드 응집섭 면에서 더 좋음 */
import type { Meta, StoryObj } from '@storybook/react';

import { fn } from "@storybook/test";
import TagButton from "../components/TagButton.tsx";

const meta = {
        title: 'Button/TagButton', /* path */
        component: TagButton,
        parameters: {
            layout: 'centered',
        },
        tags: ['autodocs'],
        argTypes: {
            children: { control: 'text', description: 'tag 버튼 내용' },
            isChecked: { control: 'boolean', description: '클릭 여부' },
            onClick: { action: 'clicked', description: 'tag 버튼 클릭 이벤트' },
        },
} satisfies Meta<typeof TagButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'tag 내용',
        isChecked: false,
        onClick: fn(),
    },
};
