// app/api/proxy-auth-login/route.ts
import { API_ENDPOINTS } from '@/config/api';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const response = await fetch(API_ENDPOINTS.AUTH.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Forward cookies from the incoming request (optional but useful if already logged in)
      Cookie: req.headers.get('cookie') || '',
    },
    body: JSON.stringify(body),
    credentials: 'include', // <-- required if backend sets cookies
  });

  const data = await response.json();

  const nextRes = NextResponse.json(data, { status: response.status });

  // Forward Set-Cookie headers from backend to browser
  const setCookie = response.headers.get('set-cookie');
  if (setCookie) {
    nextRes.headers.set('set-cookie', setCookie);
  }

  return nextRes;
}
