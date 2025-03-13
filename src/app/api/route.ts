import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const res = NextResponse.json({ status: 'active' });

    res.cookies.set("api_used", "ACTIVE", {
        httpOnly: true,
        secure: true,
        maxAge: 120,
        path: '/'
    })

    return res;
}