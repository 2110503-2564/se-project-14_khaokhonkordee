// app/api/proxy-hotel-booking/[hotelId]/route.ts
import { API_ENDPOINTS } from "@/config/api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { hotelId: string } }
) {
  const body = await req.json();
  const hotelId = params.hotelId;
  const token = req.headers.get("authorization");

  // ✅ Ensure correct Bearer token format
  const formattedToken = token?.startsWith("Bearer ")
    ? token
    : `Bearer ${token}`;

  console.log("Proxy route token:", token);
  console.log("Formatted token for backend:", formattedToken);

  const res = await fetch(API_ENDPOINTS.BOOKINGS.BY_HOTEL(hotelId), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: formattedToken || "",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return NextResponse.json(data, { status: res.status });
}

export async function GET(
  req: NextRequest,
  { params }: { params: { hotelId: string } }
) {
  const hotelId = params.hotelId;
  const token = req.headers.get("authorization");

  const formattedToken = token?.startsWith("Bearer ")
    ? token
    : `Bearer ${token}`;

  console.log("Proxy route token:", token);
  console.log("Formatted token for backend:", formattedToken);

  const res = await fetch(API_ENDPOINTS.BOOKINGS.BY_HOTEL(hotelId), {
    method: "GET",
    headers: {
      Authorization: formattedToken || "",
    },
  });

  const data = await res.json();

  return NextResponse.json(data, { status: res.status });
}
