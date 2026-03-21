const API_BASE_URL = "http://localhost:8080/api/auth";

export async function loginUser(payload) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Login failed");
  }

  return response.json();
}

export async function registerPatient(payload) {
  const response = await fetch(`${API_BASE_URL}/register/patient`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Patient registration failed");
  }
}

export async function registerProvider(payload) {
  const response = await fetch(`${API_BASE_URL}/register/provider`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Provider registration failed");
  }
}