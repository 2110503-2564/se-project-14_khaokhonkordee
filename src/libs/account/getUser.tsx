import { API_BASE_URL } from "@/config/api";

export default async function getUser(userId: string) {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/accounts/${userId}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Cannot get user");
  }

  return await response.json();
}
