import { AuthLayout } from "@/features/auth/components/layout/auth-layout";
import Login from "@/features/auth/components/login";

const LoginPage = () => {
  return (
    <AuthLayout title="Event | Login">
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;
