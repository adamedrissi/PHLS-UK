const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL || ""}/api/bookings`;

export async function createBooking(payload) {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || data?.error || "Booking failed");
  }

  return data;
}

export async function getMyBookings(userId) {
  const response = await fetch(`${API_BASE_URL}/my?userId=${userId}`);
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Failed to load bookings");
  }

  return data;
}

export async function cancelBooking(bookingId, userId) {
  const response = await fetch(`${API_BASE_URL}/${bookingId}/cancel?userId=${userId}`, {
    method: "PUT",
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Failed to cancel booking");
  }

  return data;
}

export async function rescheduleBooking(bookingId, payload) {
  const response = await fetch(`${API_BASE_URL}/${bookingId}/reschedule`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Failed to reschedule booking");
  }

  return data;
}

export async function getProviderBookings(userId) {
  const response = await fetch(`${API_BASE_URL}/provider?userId=${userId}`);
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Failed to load provider bookings");
  }

  return data;
}

export async function cancelBookingAsProvider(bookingId, userId) {
  const response = await fetch(`${API_BASE_URL}/${bookingId}/provider-cancel?userId=${userId}`, {
    method: "PUT",
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Failed to cancel booking");
  }

  return data;
}

export async function deleteCancelledBooking(bookingId, userId, role) {
  const response = await fetch(
    `${API_BASE_URL}/${bookingId}?userId=${userId}&role=${role}`,
    {
      method: "DELETE",
    }
  );

  const data = await response.text().catch(() => null);

  if (!response.ok) {
    throw new Error(data || "Failed to delete cancelled booking");
  }

  return data;
}