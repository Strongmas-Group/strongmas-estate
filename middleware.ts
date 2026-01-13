import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const country = req.headers.get('x-nf-geo-country') || 'UNKNOWN';
  const city = req.headers.get('x-nf-geo-city') || '';
  const region = req.headers.get('x-nf-geo-region') || '';

  const res = NextResponse.next();

  res.cookies.set('geo_country', country, { path: '/' });
  res.cookies.set('geo_city', city, { path: '/' });
  res.cookies.set('geo_region', region, { path: '/' });

  return res;
}
