
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const requireAuth = async (callbackUrl = "/") => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // User is NOT logged in
  if (!session?.user) {
    redirect(
      `/login?callbackUrl=${encodeURIComponent(callbackUrl)}`
    );
  }

  // User is logged in
  return session;
};

