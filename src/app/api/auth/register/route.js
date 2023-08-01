import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { cellphone } = await req.json();
  const headers = {
    "Content-Type": "application/json",
  };
  await axios({
    url: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}auth/login`,
    method: "post",
    headers: headers,
    data: {
      cellphone: cellphone,
    },
  })
    .then((response) => {
      cookies().set({
        name: "login_token",
        path: "/",
        value: response.data.data.login_token,
        httpOnly: true,
      });
       return NextResponse.json({ token: response.data.data.login_token }, { status: 200 });
    })
    .catch(function (error) {
      return NextResponse.json(
        { message: error.response.statusText },
        { status: error.response.status }
      );
    });

  return NextResponse.json({ message: "ok" });
}
