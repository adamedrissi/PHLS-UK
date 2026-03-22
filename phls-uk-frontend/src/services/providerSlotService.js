const API_BASE_URL = "http://localhost:8080/api/provider/slots";

export async function getProviderSlots(userId) {
  const response = await fetch(`${API_BASE_URL}?userId=${userId}`);
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Failed to load provider slots");
  }

  return data;
}

export async function createProviderSlot(payload) {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Failed to create slot");
  }

  return data;
}

export async function deleteProviderSlot(slotId, userId) {
  const response = await fetch(`${API_BASE_URL}/${slotId}?userId=${userId}`, {
    method: "DELETE",
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Failed to delete slot");
  }

  return data;
}