import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, waitFor, within, expect, fn } from '@storybook/test';

import LoginForm from '../components/LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'Forms/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    args: {
        onSubmit: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Submitted: Story = {
    play: async ({ canvasElement, step, args }) => {
        const canvas = within(canvasElement);

        await step('Enter credentials', async () => {
            await userEvent.type(canvas.getByTestId('email'), 'test@email.com');
            await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
        });

        await step('Submit form', async () => {
            await userEvent.click(canvas.getByRole('button', {name: '로그인'}));
        });

        // 👇 Now we can assert that the onSubmit arg was called
        await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
    },
};
