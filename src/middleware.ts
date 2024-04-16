import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const response = NextResponse.next();

  if (request.nextUrl.pathname.startsWith("/entrar")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token && request.nextUrl.pathname.startsWith("/cursos")) {
    response.cookies.set("entrouConta", "true", { httpOnly: true });
    return NextResponse.redirect(new URL("/", request.url));
  } else {
    return response;
  }
}

export const config = {
  matcher: ["/((?!api|_next|static|public|favicon.ico).*)"],
};
