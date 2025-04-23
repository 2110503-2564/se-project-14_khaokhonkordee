import { API_ENDPOINTS } from "@/config/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "6";

  const response = await fetch(API_ENDPOINTS.HOTELS.WITH_PAGE(page, limit));
  const data = await response.json();

  return NextResponse.json(data);
}
