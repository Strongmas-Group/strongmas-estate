export type GeoInfo = {
    country?: string;
    city?: string;
    region?: string;
  };
  
  export function getGeo(): GeoInfo | null {
    if (typeof document === 'undefined') return null;
  
    const cookies = document.cookie.split(';').reduce((acc, item) => {
      const [k, v] = item.trim().split('=');
      acc[k] = decodeURIComponent(v);
      return acc;
    }, {} as Record<string, string>);
  
    return {
      country: cookies.geo_country,
      city: cookies.geo_city,
      region: cookies.geo_region,
    };
  }
  
  export function isDiaspora(country?: string) {
    return !!country && country !== 'NG';
  }
  