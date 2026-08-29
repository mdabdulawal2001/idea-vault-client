import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  // User is NOT logged in
  if (!session?.user) {
    const pathname = request.nextUrl.pathname;
    const search = request.nextUrl.search;

    const callbackUrl = `${pathname}${search}`;

    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set(
      "callbackUrl",
      callbackUrl
    );

    return NextResponse.redirect(loginUrl);
  }

  // User is logged in
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/ideas/:id",
    "/add-idea",
    "/my-ideas",
    "/my-interactions",
    "/profile",
  ],
};