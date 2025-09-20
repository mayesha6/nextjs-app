import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [new URL('https://res.cloudinary.com/dtb6o7zzr/image/upload/cld-sample-4')],
  },
}


export default nextConfig;
