/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.cloudinary.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "unsplash.com",
				port: "",
			},
		],
	},
};
