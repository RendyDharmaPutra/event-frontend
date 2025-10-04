import { AuthLayout } from "@/components/layouts/auth-layout";
import { Register } from "@/features/auth/components/register";

const RegisterPage = () => {
  return (
    <AuthLayout title="Event | Register">
      <Register />
    </AuthLayout>
  );
};

export default RegisterPage;
