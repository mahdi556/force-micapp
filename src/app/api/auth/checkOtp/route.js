import { handleError } from "@/components/lib/helper";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { otp, name, codeMelli } = await req.json();
  const login_value = cookies().get("login_token");
  const login_token = login_value.value;
  const resApi = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}auth/check-otp`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp,
        name,
        codeMelli,
        login_token,
      }),
    }
  );
  const data = await resApi.json();
  if (resApi.ok) {
    cookies().set({
      name: "login_token",
      value: "",
      httpOnly: true,
      path: "/",
      expires: new Date(0),
    });
    cookies().set({
      name: "token",
      value: data.data.token,
      httpOnly: true,
      path: "/",
    });

    return NextResponse.json({ user: data.data.user }, { status: 200 });
  } else {
     return NextResponse.json({ message: data.message}, { status: resApi.status });
  }
}
