/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as Yup from "yup";
import FormProvider, { RHFSelect, RHFTextField } from "@/components/hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Iconify from "@/components/iconify";
import { countries } from "@/assets/data";
import { Alert, InputAdornment, Stack, Typography } from "@mui/material";

//------------------------------------------------------------

interface CustomError {
	message: string;
}

const defaultValues = {
	name: "",
	email: "",
	phone: "",
	country: "",
	message: "",
};

const ContactUsSchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	email: Yup.string()
		.email("Email must be a valid email address")
		.required("Email is required"),
	phone: Yup.string().required("Phone is required"),
	country: Yup.string().required("Country is required"),
	message: Yup.string().required("Message is required"),
});

const ContactUsForm = () => {
	const [errorMsg, setErrorMsg] = useState<CustomError | null>(null);

	const methods = useForm({
		defaultValues,
		resolver: yupResolver(ContactUsSchema),
	});

	const {
		reset,
		handleSubmit,
		formState: { isSubmitting },
	} = methods;

	const onSubmit = handleSubmit(async (data) => {
		try {
			console.log(data);

			// await registerUser({username, email, password, role, country});

			reset();
		} catch (error: any) {
			setErrorMsg(error);
			console.log(error);
		}
	});

	return (
		<>
			{!!errorMsg && (
				<Alert severity="error" sx={{ my: 3 }}>
					{errorMsg?.message}
				</Alert>
			)}

			<FormProvider methods={methods} onSubmit={onSubmit}>
				<Stack direction="column" spacing={3}>
					<Typography variant="h4">Reach us</Typography>

					<RHFTextField
						name="name"
						label="Name"
						variant="outlined"
						placeholder="johndoe"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Iconify
										icon="tabler:user-filled"
										width={18}
									/>
								</InputAdornment>
							),
						}}
					/>

					<RHFTextField
						name="email"
						label="Email"
						variant="outlined"
						placeholder="johndoe@me.com"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Iconify
										icon="ic:twotone-alternate-email"
										width={18}
									/>
								</InputAdornment>
							),
						}}
					/>

					<RHFTextField
						name="phone"
						label="Phone"
						variant="outlined"
						placeholder="+254 700 000 000"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Iconify
										icon="tabler:user-filled"
										width={18}
									/>
								</InputAdornment>
							),
						}}
					/>

					<RHFSelect
						name="country"
						label="Country"
						options={countries}
						placeholder="Select your country"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Iconify
										icon="gis:world-map-alt-o"
										width={18}
									/>
								</InputAdornment>
							),
						}}
					/>

					<RHFTextField
						name="message"
						label="Message"
						variant="outlined"
						placeholder="I would like to..."
						multiline
						rows={4}
					/>

					<LoadingButton
						variant="contained"
						loading={isSubmitting}
						type="submit"
						color="primary"
						sx={{ p: 1.5 }}
					>
						Send Message
					</LoadingButton>
				</Stack>
			</FormProvider>
		</>
	);
};

export default ContactUsForm;
