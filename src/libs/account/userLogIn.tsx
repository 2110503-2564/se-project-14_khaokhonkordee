import { API_ENDPOINTS } from '@/config/api';

export default async function userLogIn(
  userEmail: string,
  userPassword: string
) {
  try {
    console.log(`Logging in user: ${userEmail}`);

    const isServer = typeof window === 'undefined';

    const url = API_ENDPOINTS.AUTH.LOGIN;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail, password: userPassword }),
      credentials: 'include', // So cookies are properly handled
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}
