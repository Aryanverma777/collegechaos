/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	env: {
		SESSION_SECRET: process.env.SESSION_SECRET,
	},
	allowedDevOrigins: ["*.theopenbuilder.com"],
};

export default nextConfig;
