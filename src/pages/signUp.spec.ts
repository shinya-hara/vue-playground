import SignUpPage from './signUp.vue';
import { describe, it, expect, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/vue';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

describe('SignUpPage', () => {
  afterEach(cleanup);

  describe('レイアウト', () => {
    it('Sign Upヘッダーが表示される', () => {
      render(SignUpPage);
      const header = screen.getByRole('heading', { name: 'Sign Up' });
      expect(header).toBeTruthy();
    });

    it('ユーザー名の入力フォームが表示される', () => {
      render(SignUpPage);
      const input = screen.queryByLabelText('ユーザー名');
      expect(input).toBeTruthy();
    });

    it('メールアドレスの入力フォームが表示される', () => {
      render(SignUpPage);
      const input = screen.queryByLabelText('メールアドレス');
      expect(input).toBeTruthy();
    });

    it('パスワードの入力フォームのtypeがpasswordであること', () => {
      render(SignUpPage);
      const input: HTMLInputElement = screen.getByLabelText('パスワード');
      expect(input.type).toBe('password');
    });

    it('登録用ボタンが表示される', () => {
      render(SignUpPage);
      const button = screen.getByRole('button', { name: '登録' });
      expect(button).toBeTruthy();
    });

    it('登録ボタンが初期表示時はdisabledとなっている', () => {
      render(SignUpPage);
      const button: HTMLButtonElement = screen.getByRole('button', {
        name: '登録',
      });
      expect(button.disabled).toBeTruthy();
    });
  });

  describe('インタラクション', () => {
    const mockFn = vi.fn();
    const server = setupServer(
      rest.post('/api/v1/users', async (req, res, ctx) => {
        const requestBody = await req.json();
        mockFn(requestBody);
        if (requestBody.username === 'Error1') {
          return res(
            ctx.status(500),
            ctx.json({
              error: {
                message: 'サーバーエラーです。時間を置いて試してください。',
              },
            }),
          );
        }
        return res(ctx.status(200));
      }),
    );

    beforeAll(() => server.listen());
    afterAll(() => server.close());
    afterEach(() => server.resetHandlers());

    it('全フォーム入力済、かつパスワードとパスワード確認が同じ値の場合、登録のdisabledが解除される', async () => {
      render(SignUpPage);
      await fillAllForm('User', 'user@example.com', 'P4ssw0rd', 'P4ssw0rd');
      const button: HTMLButtonElement = screen.getByRole('button', {
        name: '登録',
      });
      expect(button.disabled).toBe(false);
    });

    it('全フォーム入力済でも、パスワードが不一致の場合、登録ボタンがdisabledになる', async () => {
      render(SignUpPage);
      await fillAllForm('User', 'user@example.com', 'P4ssw0rd', 'password');
      const button: HTMLButtonElement = screen.getByRole('button', {
        name: '登録',
      });
      expect(button.disabled).toBe(true);
    });

    it('登録ボタン押下時にユーザー名、メールアドレス、パスワードをサーバーに送信する', async () => {
      render(SignUpPage);
      await responseServerCheck('User');
      expect(mockFn).toHaveBeenCalledOnce();
      expect(mockFn).toBeCalledWith({
        username: 'User',
        email: 'user@example.com',
        password: 'P4ssw0rd',
      });
    });
  });
});

async function responseServerCheck(username: string) {
  await fillAllForm(username, 'user@example.com', 'P4ssw0rd', 'P4ssw0rd');
  const button = screen.getByRole('button', { name: '登録' });
  await fireEvent.click(button);
}

async function fillAllForm(
  username: string,
  email: string,
  password: string,
  passwordCheck: string,
) {
  const usernameInput = screen.getByLabelText('ユーザー名');
  const emailInput = screen.getByLabelText('メールアドレス');
  const passwordInput = screen.getByLabelText('パスワード');
  const passwordCheckInput = screen.getByLabelText('パスワード確認');
  await fireEvent.update(usernameInput, username);
  await fireEvent.update(emailInput, email);
  await fireEvent.update(passwordInput, password);
  await fireEvent.update(passwordCheckInput, passwordCheck);
}
