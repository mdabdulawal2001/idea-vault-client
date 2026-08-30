const SERVER_API_URL =
  process.env.NEXT_PUBLIC_SERVER_API_URL;


// ==========================================
// GET TOKEN
// ==========================================

const getToken = async () => {
  // Client
  if (typeof window !== "undefined") {
    const { authClient } = await import("@/lib/auth-client");

    const { data, error } = await authClient.token();

    if (error) {
      throw new Error(
        error.message || "Failed to get client JWT token"
      );
    }

    return data?.token || null;
  }

  // Server
  try {
    const { auth } = await import("@/lib/auth");
    const { headers } = await import("next/headers");

    const { token, error } = await auth.api.getToken({
      headers: await headers(),
    });

    if (error) {
      throw new Error(
        error.message || "Failed to get server JWT token"
      );
    }

    return token || null;
  } catch (error) {
    console.error("JWT Error:", error);
    throw error;
  }
};


// ==========================================
// AUTH HEADERS
// ==========================================

const getAuthHeaders = async () => {
  const token = await getToken();

  return {
    "Content-Type": "application/json",

    ...(token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {}),
  };
};


// ==========================================
// GET PROFILE
// ==========================================

export const getProfile = async () => {
  if (!SERVER_API_URL) {
    throw new Error(
      "NEXT_PUBLIC_SERVER_API_URL is not defined"
    );
  }

  const headers = await getAuthHeaders();

  const response = await fetch(
    `${SERVER_API_URL}/profile`,
    {
      method: "GET",
      headers,
      cache: "no-store",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch profile"
    );
  }

  return data;
};


// ==========================================
// UPDATE PROFILE
// ==========================================

export const updateProfile = async (profileData) => {
  if (!SERVER_API_URL) {
    throw new Error(
      "NEXT_PUBLIC_SERVER_API_URL is not defined"
    );
  }

  const headers = await getAuthHeaders();

  const response = await fetch(
    `${SERVER_API_URL}/profile`,
    {
      method: "PATCH",
      headers,
      body: JSON.stringify(profileData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to update profile"
    );
  }
  return data;
};