"use client";

import * as Yup from "yup";
import FormProvider, { RHFCode } from "@/components/hook-form";
import {
	Alert,
	Box,
	Divider,
	Stack,
	Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const VerificationSchema = Yup.object().shape({
	code: Yup.string().required("Code is required"),
});

const defaultValues = {
	code: "",
};

const Verification = () => {
	const [errorMsg, setErrorMsg] = useState("");

	const methods = useForm({
		defaultValues,
		resolver: yupResolver(VerificationSchema),
	});

	const {
		reset,
		handleSubmit,
		formState: { isSubmitting },
	} = methods;

	const onSubmit = handleSubmit((data) => {
		try {
			console.log(data);
			reset();
		} catch (error) {
			setErrorMsg(error as string);
		}
	});

	return (
		<>
			{!!errorMsg && (
				<Alert severity="error" sx={{ m: 3 }}>
					{errorMsg}
				</Alert>
			)}

			<FormProvider methods={methods} onSubmit={onSubmit}>
				<Stack direction="column" spacing={3}>
					<Box>
						<Typography variant="h4">Email Verification</Typography>
						<Divider sx={{ mt: 1.5 }} />
					</Box>

					<RHFCode name="code" />

					<LoadingButton
						variant="contained"
						loading={isSubmitting}
						type="submit"
						color="primary"
						sx={{ p: 1.5 }}
					>
						Verify
					</LoadingButton>
				</Stack>
			</FormProvider>
		</>
	);
};

export default Verification;
