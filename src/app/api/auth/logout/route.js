import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

export async function POST(req) {
    const token = cookies().get('token');
    
    const resApi = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.value}`
        }
    });
    const data = await resApi.json();

    if (resApi.ok) {
        cookies().set({
            name: 'token',
            value: data.token,
            httpOnly: true,
            path: '/',
            expires: new Date(0)
        });

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } else {
        return NextResponse.json({ message: data }, { status: resApi.status });
    }

}