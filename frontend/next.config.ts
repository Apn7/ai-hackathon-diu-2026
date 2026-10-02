import type { NextConfig } from "next";

// All /api calls go to FastAPI, so the browser sees one origin and CORS is never needed.
const backend = process.env.BACKEND_URL ?? "http://localhost:8000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${backend}/api/:path*` }];
  },
};

export default nextConfig;
