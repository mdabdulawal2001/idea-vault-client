const API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL;

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
  const res = await fetch(`${API_URL}/ideas/${id}`);

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