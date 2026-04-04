const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL || ""}/api/specialties`;

export async function getSpecialties() {
  const response = await fetch(API_BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Failed to load specialties");
  }

  return data;
}