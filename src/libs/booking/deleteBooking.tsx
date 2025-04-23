import { API_BASE_URL } from "@/config/api";

export default async function deleteBooking(bookingId: string, token: string) {
    const response = await fetch(`${API_BASE_URL}/api/v1/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
            'authorization': `Bearer ${token}`,
        }
    });

    if (!response.ok) {
        throw new Error('Failed to delete booking');
    }

    return await response.json();
} 