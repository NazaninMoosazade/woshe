import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json(
      { message: "User logged out successfully" },
      { status: 200 }
    );

    response.headers.set(
      "Set-Cookie",
      "token=; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:00 GMT;"
    );

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Error while logging out" },
      { status: 500 }
    );
  }
}
