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
						title: t("navigation.side.customer.home"),
						path: paths.customer.root,
						icon: <Iconify icon="lets-icons:home-duotone" />
					},
					{
						title: t("navigation.side.customer.orders"),
						path: paths.customer.orders,
						icon: <Iconify icon="ion:bag-check" />
					},
				]
			}
			// eslint-disable-next-line
		], [t]
	)

	return data
}