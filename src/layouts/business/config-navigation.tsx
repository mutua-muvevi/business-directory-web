import { useMemo } from "react";
import { paths } from "@/routes/paths";
import  { useTranslate } from "@/locales"

import Iconify from "@/components/iconify";


export const useNavData = () => {

	const { t } = useTranslate();

	const data = useMemo(
		() => [
			{
				subheader: "",
				items: [
					{
						title: t("navigation.side.business.home"),
						path: paths.business.root,
						icon: <Iconify icon="lets-icons:home-duotone" />
					},
					{
						title: t("navigation.side.business.product"),
						path: paths.business.products,
						icon: <Iconify icon="teenyicons:users-solid" />
					},
					{
						title: t("navigation.side.business.deliveries"),
						path: paths.business.deliveries,
						icon: <Iconify icon="mdi:truck-check" />
					},
					{
						title: t("navigation.side.business.customers"),
						path: paths.business.customers,
						icon: <Iconify icon="fa6-solid:users" />
					},
					{
						title: t("navigation.side.business.transporters"),
						path: paths.business.transporters,
						icon: <Iconify icon="mdi:truck-delivery" />
					},
				]
			}
			// eslint-disable-next-line
		], [t]
	)

	return data
}