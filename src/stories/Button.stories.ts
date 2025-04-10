/* stories.ts 파일에서 코드를 구현하는 것이 코드 응집섭 면에서 더 좋음 */
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../components/Button.tsx';

/* 버튼 컴포넌트에 대한 메타 데이터 정의 */
const meta = {
  title: 'Example/Button', /* path */
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    primary: {control: 'boolean', description: '버튼의 타입'},
    backgroundColor: { control: 'color', description: '버튼의 배경 컬러' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
