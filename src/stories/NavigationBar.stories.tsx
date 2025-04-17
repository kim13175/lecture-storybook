/* stories.ts 파일에서 코드를 구현하는 것이 코드 응집섭 면에서 더 좋음 */
import type { Meta, StoryObj } from '@storybook/react';

import NavigationBar from '../components/NavigationBar.tsx';
import { fn } from "@storybook/test";

const meta = {
    title: 'Navigation/NavigationBar', /* path */
    component: NavigationBar,
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
        showBackButton: {
            control: 'boolean',
            description: '뒤로가기 버튼 표시 여부',
            defaultValue: true,
        },
        showCloseButton: {
            control: 'boolean',
            description: '닫기 버튼 표시 여부',
            defaultValue: true,
        },
        showTitle: {
            control: 'boolean',
            description: '네비게이션 바 제목 표시 여부',
            defaultValue: true,
        },
        title: {
            control: 'text',
            description: '페이지 타이틀',
            defaultValue: '타이틀',
        },
        onBackButtonClick: {
            action: 'clicked',
            description: '뒤로가기 버튼 클릭 이벤트',
        },
        onCloseButtonClick: {
            action: 'clicked',
            description: '닫기 버튼 클릭 이벤트',
        },
    },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        showBackButton: true,
        showCloseButton: true,
        showTitle: true,
        title: '타이틀',
        onBackButtonClick: fn(),
        onCloseButtonClick: fn(),
    },
};
