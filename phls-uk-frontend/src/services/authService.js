const API_BASE_URL = "http://localhost:8080/api/auth";

export async function loginUser(payload) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Login failed");
  }

  return data;
}

export async function registerPatient(payload) {
  const response = await fetch(`${API_BASE_URL}/register/patient`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Patient registration failed");
  }

  return data;
}

export async function registerProvider(payload) {
  const response = await fetch(`${API_BASE_URL}/register/provider`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Provider registration failed");
  }

  return data;
}