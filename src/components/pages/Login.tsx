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
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { showSuccess, showError } = useSweetAlert();
  const { signIn } = useAuth();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await signIn({
        email: data.email,
        password: data.password,
      });

      if (result.success) {
        await showSuccess({
          title: "Welcome Back!",
          message: "You have successfully logged in!",
        });
        navigate("/dashboard");
      } else {
        // ✅ استخراج message از error
        const errorMessage =
          result.error?.message || "Invalid email or password.";

        await showError({
          title: "Error",
          message: errorMessage,
        });
      }
    } catch (error) {
      await showError({
        title: "Error",
        message: "Something went wrong. Please try again.",
      });
      console.error("خطا:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-5 md:p-6 bg-white-100 rounded-xl">
      <FormLogo />
      <SocialButtons />
      <Separator />
      <AuthForm
        schema={loginSchema}
        onSubmit={onSubmit}
        fields={loginFields}
        buttonText="Sign In"
        loadingText="Signing in..."
      />
      <AuthSwitchLink
        prompt="New to GateHub?"
        textLink="Create an account"
        linkTo="/signup"
      />
    </div>
  );
}
