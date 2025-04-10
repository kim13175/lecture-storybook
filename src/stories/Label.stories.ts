/* stories.ts 파일에서 코드를 구현하는 것이 코드 응집섭 면에서 더 좋음 */
import type { Meta, StoryObj } from '@storybook/react';

import Label from '../components/Label';

const meta = {
    title: 'Text/Label', /* path */
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        htmlFor: {control: 'text', description: 'label의 for 속성'},
        children: { control: 'text', description: 'label 내용' },
    },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        htmlFor: 'username',
        children: '이메일',
    },
};