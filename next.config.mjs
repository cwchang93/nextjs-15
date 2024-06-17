/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental : {
        reactCompiler: {
            compilationMode: "annotation"
        },
    }

};

export default nextConfig;
