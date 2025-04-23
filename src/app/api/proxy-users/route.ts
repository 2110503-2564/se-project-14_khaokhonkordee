import { API_BASE_URL } from '@/config/api';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '6';

  const targetUrl = API_BASE_URL + `/api/v1/hotels?page=${page}&limit=${limit}`;

  const response = await fetch(targetUrl);
  const data = await response.json();

  return NextResponse.json(data);
}
