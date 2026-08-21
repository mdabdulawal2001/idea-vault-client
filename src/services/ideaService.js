export const getAllIdeas = async () => {
  const res = await fetch("http://localhost:8080/ideas");

  if (!res.ok) {
    throw new Error("Failed to fetch ideas");
  }

  const data = await res.json();

  return data;
};