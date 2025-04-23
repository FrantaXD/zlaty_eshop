import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('jwtToken')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    const res = await fetch('https://apigolde-shop-production-5431.up.railway.app/api/auth/isAdmin', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
    });

    const data = await res.json();

    if (!data.isAdmin) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

// ⬇️ Tady přidáš matcher
export const config = {
    matcher: ['/admin/:path*'], // Aplikuje middleware na všechny cesty začínající /admin/
};
