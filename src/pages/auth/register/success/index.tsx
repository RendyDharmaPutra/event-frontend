import { AuthLayout } from "@/components/layouts/auth-layout";
import { RegisterSuccess } from "@/features/auth/components/register-success";

const RegisterSuccessPage = () => {
  return (
    <AuthLayout title="Event | Register Success">
      <RegisterSuccess />
    </AuthLayout>
  );
};

export default RegisterSuccessPage;
