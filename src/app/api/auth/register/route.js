import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { cellphone } = await req.json();
  const headers = {
    "Content-Type": "application/json",
  };
  const resApi = await axios({
    url: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}auth/login`,
    method: "post",
    headers: headers,
    data: {
      cellphone: cellphone,
    },
  });
  if (resApi.status == 200) {
    cookies().set({
      name: "login_token",
      path: "/",
      value: resApi.data.data.login_token,
      httpOnly: true,
    });
    return NextResponse.json(
      {  new: resApi.data.data.new },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: resApi.response.statusText },
      { status: resApi.response.status }
    );
  }
  // .then((response) => {
  // })
  // .catch(function (error) {
  // });

  // return NextResponse.json({ message: "ok" });
}
