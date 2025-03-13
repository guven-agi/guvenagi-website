import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const inputSchema = z.object({
    pageIndex: z.number().min(0, "invalid parameters"),
    pageSize: z.number().min(0, "pageSize cannot be smaller than 10"),
},)

export async function POST(req: NextRequest) {
    const bodyJson = await req.json();
    const validation = inputSchema.safeParse(bodyJson);

    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 });
    }

    return bodyJson;
}