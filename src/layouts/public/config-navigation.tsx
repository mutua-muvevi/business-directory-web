"use client";

// import { useMemo } from "react";
import { paths } from "@/routes/paths";
// import { useTranslate } from "@/locales";

import Iconify from "@/components/iconify";

export const navConfig = [
	{
		title: "Home",
		icon: <Iconify icon="lets-icons:home-duotone" />,
		path: paths.public.root,
	},
	{
		title: "About",
		icon: <Iconify icon="mdi:faq" />,
		path: paths.public.about,
	},
	{
		title: "Business",
		icon: <Iconify icon="material-symbols:add-business" />,
		path: paths.public.business,
	},
	{
		title: "Truck Owner",
		icon: <Iconify icon="mdi:truck" />,
		path: paths.public.transporter,
	},
	{
		title: "Pricing",
		icon: <Iconify icon="fa6-solid:circle-info" />,
		path: paths.public.pricing,
	},
	{
		title: "Articles",
		icon: <Iconify icon="ph:article-medium-fill" />,
		path: paths.public.articles,
	},
	// {
	// 	title: "Pages",
	// 	path: "/pages",
	// 	icon: <Iconify icon="solar:file-bold-duotone" />,
	// 	children: [
	// 		{
	// 			subheader: "Other",
	// 			items: [
	// 				{ title: "About us", path: paths.about },
	// 				{ title: "Contact us", path: paths.contact },
	// 				{ title: "FAQs", path: paths.faqs },
	// 				{ title: "Pricing", path: paths.pricing },
	// 				{ title: "Payment", path: paths.payment },
	// 				{ title: "Maintenance", path: paths.maintenance },
	// 				{ title: "Coming Soon", path: paths.comingSoon },
	// 			],
	// 		},
	// 	],
	// },
];