const API_BASE_URL = "http://localhost:8080/api";

export async function searchAvailableSlots(filters = {}) {
  const params = new URLSearchParams();

  if (filters.city) params.append("city", filters.city);
  if (filters.specialty) params.append("specialty", filters.specialty);
  if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);
  if (filters.date) params.append("date", filters.date);

  const queryString = params.toString();
  const url = queryString
    ? `${API_BASE_URL}/slots/search?${queryString}`
    : `${API_BASE_URL}/slots/search`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch available slots");
  }

  return response.json();
}

export async function searchRankedSlots(filters = {}) {
  const params = new URLSearchParams();

  if (filters.specialty) params.append("specialty", filters.specialty);
  if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);
  if (filters.minRating) params.append("minRating", filters.minRating);
  if (filters.preferredDate) params.append("preferredDate", filters.preferredDate);
  if (filters.preferredTimeBucket) params.append("preferredTimeBucket", filters.preferredTimeBucket);
  if (filters.rankingModel) params.append("rankingModel", filters.rankingModel);
  if (filters.limit) params.append("limit", filters.limit);

  if (filters.userLatitude != null) params.append("userLatitude", filters.userLatitude);
  if (filters.userLongitude != null) params.append("userLongitude", filters.userLongitude);
  if (filters.radiusMiles != null && filters.radiusMiles !== "") {
    params.append("radiusMiles", filters.radiusMiles);
  }

  const response = await fetch(`${API_BASE_URL}/ranking/slots?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch ranked slots");
  }

  return response.json();
}

export async function getAllSpecialties() {
  const response = await fetch(`${API_BASE_URL}/specialties`);

  if (!response.ok) {
    throw new Error("Failed to fetch specialties");
  }

  return response.json();
}

export async function searchLocation(query) {
  const params = new URLSearchParams();
  params.append("q", query);

  const response = await fetch(`${API_BASE_URL}/locations/search?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch locations");
  }

  return response.json();
}