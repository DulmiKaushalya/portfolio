/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This tells Next.js to generate a static export
    distDir: 'out', // Specifies the output directory
    images: {
      unoptimized: true, // Fix for images in static export
    },
  };
  
  export default nextConfig;
  