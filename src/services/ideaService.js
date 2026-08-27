
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
    headers: headers,
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
  const res = await fetch(`${API_URL}/ideas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ideaData),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    throw new Error(errorData.message || "Failed to create idea");
  }

  return await res.json();
};

export const updateIdea = async (id, ideaData) => {
  const res = await fetch(`${API_URL}/ideas/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
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
  const res = await fetch(`${API_URL}/ideas/${id}`, {
    method: "DELETE",
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
  const res = await fetch(`${API_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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

// comments get by user id
export const getCommentsByUser = async (userId) => {
  const res = await fetch(`${API_URL}/comments/user/${userId}`);

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    throw new Error(errorData.message || "Failed to fetch user comments");
  }

  return await res.json();
};

// patch comments
export const updateComment = async (commentId, text) => {
  const res = await fetch(`${API_URL}/comments/${commentId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
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
  const res = await fetch(`${API_URL}/comments/${commentId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    throw new Error(errorData.message || "Failed to delete comment");
  }

  return await res.json();
};
