
const API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL;


// helper function for get token every component
const getToken = async () => {
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

// headers
const getAuthHeaders = async () => {
  const token = await getToken();

  return {
    "Content-Type": "application/json",
    ...(token && {
      Authorization: `Bearer ${token}`,
    }),
  };
};


// Get All Ideas
export const getAllIdeas = async (filters = {}) => {
  const params = new URLSearchParams();

  // Search
  if (filters.search?.trim()) {
    params.append("search", filters.search.trim());
  }

  // Category
  if (filters.category) {
    params.append("category", filters.category);
  }

  // From Date
  if (filters.fromDate) {
    params.append("fromDate", filters.fromDate);
  }

  // To Date
  if (filters.toDate) {
    params.append("toDate", filters.toDate);
  }
  // Author
  if (filters.authorId) {
    params.append("authorId", filters.authorId);
  }

  const queryString = params.toString();

  const url = queryString
    ? `${API_URL}/ideas?${queryString}`
    : `${API_URL}/ideas`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch ideas");
  }

  const data = await res.json();

  return data;
};

// get my ideas
export const getMyIdeas = async () => {
  const headers = await getAuthHeaders();

  const res = await fetch(`${API_URL}/my-ideas`, {
    method: "GET",
    headers,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    throw new Error(
      errorData.message || "Failed to fetch your ideas"
    );
  }

  return await res.json();
};

// Get All Categories
export const getIdeaCategories = async () => {
  const res = await fetch(`${API_URL}/idea-categories`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

// ===============================
// Get Single Idea
// ===============================

export const getIdeaById = async (id) => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${API_URL}/ideas/${id}`, {
    method: "GET",
    headers,
  });
  console.log(headers)
  if (!res.ok) {
    throw new Error("Failed to fetch idea");
  }

  const data = await res.json();

  return data;
};

// get trending ideas
export const getTrendingIdeas = async () => {
  const res = await fetch(`${API_URL}/trending`);

  if (!res.ok) {
    throw new Error("Failed to fetch trending ideas");
  }

  const data = await res.json();

  return data;
};

// create ideas
export const createIdea = async (ideaData) => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${API_URL}/ideas`, {
    method: "POST",
    headers,
    body: JSON.stringify(ideaData),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    throw new Error(errorData.message || "Failed to create idea");
  }

  return await res.json();
};

export const updateIdea = async (id, ideaData) => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${API_URL}/ideas/${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(ideaData),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    throw new Error(errorData.message || "Failed to update idea");
  }

  return await res.json();
};

// ==========================================
// DELETE IDEA
// ==========================================

export const deleteIdea = async (id) => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${API_URL}/ideas/${id}`, {
    method: "DELETE",
    headers,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    throw new Error(errorData.message || "Failed to delete idea");
  }

  return await res.json();
};

// comments functionality
// comments post
export const createComment = async (commentData) => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${API_URL}/comments`, {
    method: "POST",
    headers,
    body: JSON.stringify(commentData),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    throw new Error(errorData.message || "Failed to post comment");
  }

  return await res.json();
};

// comments get
export const getCommentsByIdea = async (ideaId) => {
  const res = await fetch(`${API_URL}/comments/idea/${ideaId}`);

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    throw new Error(errorData.message || "Failed to fetch comments");
  }

  return await res.json();
};

// get my comments
export const getMyComments = async () => {
  const headers = await getAuthHeaders();

  const res = await fetch(`${API_URL}/comments/me`, {
    method: "GET",
    headers,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    throw new Error(
      errorData.message || "Failed to fetch your comments"
    );
  }

  return await res.json();
};

// patch comments
export const updateComment = async (commentId, text) => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${API_URL}/comments/${commentId}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    throw new Error(errorData.message || "Failed to update comment");
  }

  return await res.json();
};

// delete comments
export const deleteComment = async (commentId) => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${API_URL}/comments/${commentId}`, {
    method: "DELETE",
    headers,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    throw new Error(errorData.message || "Failed to delete comment");
  }

  return await res.json();
};
