

//----------------------------------------------------------------

const ROOTS = {
	AUTH: "/auth",
	ADMIN: "/admin",
	APP: "/app",
	PUBLIC: "/pages",
	DEV: "/developer",

	BUSINESS: "/business",
	TRANSPORTER: "/transporter",
	CUSTOMER: "/customer",
	DRIVER: "/driver",
};

//-----------------------------------------------------------------

export const paths = {
	developer: {
		root: ROOTS.DEV,
		components: {
			root: `${ROOTS.DEV}/components`,

			// Components
			forms: `${ROOTS.DEV}/components/forms`,
			datagrid: `${ROOTS.DEV}/components/datagrid`,
			charts: `${ROOTS.DEV}/components/charts`,
		},
	},
	admin: {
		root: ROOTS.ADMIN,

		// pages
		users: `${ROOTS.ADMIN}/users`,
		marketing: `${ROOTS.ADMIN}/marketing`,
		finance: `${ROOTS.ADMIN}/finance`,
		business: `${ROOTS.ADMIN}/business`,
	},
	auth: {
		root: ROOTS.AUTH,
	},
	public: {
		root: "/",
		about: `${ROOTS.PUBLIC}/about`,
		contact: `/contact`,

		terms: `${ROOTS.PUBLIC}/terms`,
		privacy: `${ROOTS.PUBLIC}/privacy`,
	},
	app: {
		root: ROOTS.APP,
	},
	business: {
		root: ROOTS.BUSINESS,

		// pages
		overview: `${ROOTS.BUSINESS}/overview`,
		products: `${ROOTS.BUSINESS}/products`,
		deliveries: `${ROOTS.BUSINESS}/deliveries`,
		customers: `${ROOTS.BUSINESS}/customers`,
		transporters: `${ROOTS.BUSINESS}/transporters`,
	},
	transporter: {
		root: ROOTS.TRANSPORTER,

		// pages
		overview: `${ROOTS.TRANSPORTER}/overview`,
		vehicles: `${ROOTS.TRANSPORTER}/vehicles`,
		shipment: `${ROOTS.TRANSPORTER}/shipment`,
		drivers: `${ROOTS.TRANSPORTER}/drivers`,
		businesses: `${ROOTS.TRANSPORTER}/businesses`,
	},
	customer: {
		root: ROOTS.CUSTOMER,
		
		// pages
		overview: `${ROOTS.CUSTOMER}/overview`,
		orders: `${ROOTS.CUSTOMER}/orders`,
	},
	driver: {
		root: ROOTS.DRIVER,

		// pages
		overview: `${ROOTS.DRIVER}/overview`,
		routes: `${ROOTS.DRIVER}/routes`,	
	}
};
