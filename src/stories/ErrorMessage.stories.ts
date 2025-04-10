/* stories.ts 파일에서 코드를 구현하는 것이 코드 응집섭 면에서 더 좋음 */
import type { Meta, StoryObj } from '@storybook/react';

import Label from '../components/ErrorMessage';

const meta = {
    title: 'Text/ErrorMessage', /* path */
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text', description: 'label 내용' },
    },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: '❌ 에러 메시지 표시',
    },
};