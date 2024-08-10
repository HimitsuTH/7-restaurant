/** @type {import('next').NextConfig} */
const nextConfig = {
    theme: {
        fontFamily: {
            'display': ['Helvetica', 'Arial', 'sans-serif'],
        }
    },
    images: {
      remotePatterns: [
        {
          hostname: 'picsum.photos',
        },
      ],
    },
  }

export default nextConfig;
