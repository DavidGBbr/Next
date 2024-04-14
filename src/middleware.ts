import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(`${request.nextUrl.pathname}`);
  const token = request.cookies.get("token")?.value;

  if (token) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/animais"],
};
