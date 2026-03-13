const API_BASE_URL = "http://localhost:8080/api/slots";

export async function searchAvailableSlots(filters = {}) {
  const params = new URLSearchParams();

  if (filters.city) {
    params.append("city", filters.city);
  }

  if (filters.specialty) {
    params.append("specialty", filters.specialty);
  }

  if (filters.maxPrice) {
    params.append("maxPrice", filters.maxPrice);
  }

  if (filters.date) {
    params.append("date", filters.date);
  }

  const queryString = params.toString();
  const url = queryString
    ? `${API_BASE_URL}/search?${queryString}`
    : `${API_BASE_URL}/search`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch available slots");
  }

  return response.json();
}