const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL || ""}/api/slots/search`;

export async function getAllProviders() {
  const response = await fetch(API_BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch providers");
  }

  return response.json();
}

export async function searchProviders(filters) {
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

  if (filters.availableOnly) {
    params.append("availableOnly", "true");
  }

  const response = await fetch(`${API_BASE_URL}/search?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to search providers");
  }

  return response.json();
}