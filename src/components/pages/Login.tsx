import {
  loginSchema,
  type LoginFormData,
} from "../../lib/validators/auth.validator";
import FormLogo from "../common/FormLogo";
import Separator from "../common/Separator";
import SocialButtons from "../common/SocialButtons";
import AuthSwitchLink from "../common/AuthSwitchLink";
import AuthForm from "../common/AuthForm";
import { loginFields } from "../../lib/auth/formConfig";
import { useNavigate } from "react-router-dom";
import { useSweetAlert } from "../../hooks/useSweetAlert";

export default function Login() {
  const navigate = useNavigate();
  const { showSuccess, showError } = useSweetAlert();
  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await showSuccess({
        title: "Welcome Back!",
        message: "You have successfully logged in!",
      });
      navigate("/dashboard");
    } catch (error) {
      await showError({
        title: "Error",
        message: "Invalid email. Please try again.",
      });
      console.error("خطا:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-5 md:p-6 bg-white-100 rounded-xl">
      {/* Form Logo Component */}
      <FormLogo />
      {/* Social Buttons Component*/}
      <SocialButtons />
      {/* Separator Component*/}
      <Separator />
      {/* AuthForm Component */}
      <AuthForm
        schema={loginSchema}
        onSubmit={onSubmit}
        fields={loginFields}
        buttonText="Sign In"
        loadingText="Signing in..."
      />
      {/* AuthSwitchLink Component */}
      <AuthSwitchLink
        prompt="New to TailwindAdmin?"
        textLink="Create an account"
        linkTo="/signup"
      />
    </div>
  );
}
