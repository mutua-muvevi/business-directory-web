import { Container, Card, CardContent, Stack } from "@mui/material";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Stack direction="column" alignItems="center" justifyContent="center" sx={{ height: "100vh" }}>
			<Container maxWidth="sm">
				<Card>
					<CardContent>{children}</CardContent>
				</Card>
			</Container>
		</Stack>
	);
};

export default AuthLayout;
