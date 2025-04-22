/* stories.ts 파일에서 코드를 구현하는 것이 코드 응집섭 면에서 더 좋음 */
import type { Meta, StoryObj } from '@storybook/react';

import { fn } from "@storybook/test";
import TagList from "../components/TagList.tsx";

const meta = {
    title: 'List/TagList', /* path */
    component: TagList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        tagList: { control: 'object', description: 'tag 리스트'},
        onTagClick: { action: 'clicked', description: '클릭 여부' },
    },
} satisfies Meta<typeof TagList>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        tagList: ['1~2 명', '3~5명', '6~8명'],
        onTagClick: fn(),
    },
};
