import { MiddlewareConfig, NextRequest } from "next/server";
import { createClient } from "./lib/util/supabase/middleware";

export const config: MiddlewareConfig = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}


export function middleware(request: NextRequest) {
    return createClient(request);
}