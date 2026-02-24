import {
  registerSchema,
  type RegisterFormData,
} from "../../lib/validators/auth.validator";
import FormLogo from "../common/FormLogo";
import Separator from "../common/Separator";
import SocialButtons from "../common/SocialButtons";
import AuthSwitchLink from "../common/AuthSwitchLink";
import AuthForm from "../common/AuthForm";
import { registerFields } from "../../lib/auth/formConfig";
import { useNavigate } from "react-router-dom";
import { useSweetAlert } from "../../hooks/useSweetAlert";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  const navigate = useNavigate();
  const { showSuccess, showError } = useSweetAlert();
  const { signUp } = useAuth();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log("Form data:", data);
      const result = await signUp({
        email: data.email,
        password: data.password,
        username: data.username,
      });

      if (result.success) {
        await showSuccess({
          title: "Welcome!",
          message:
            "Your account has been created successfully! Please check your email for verification.",
        });
        navigate("/login");
      } else {
        const errorMessage =
          result.error?.message || "Registration failed. Please try again.";

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
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-5 md:p-6 bg-white-100 rounded-xl">
      <FormLogo />
      <SocialButtons />
      <Separator />
      <AuthForm
        schema={registerSchema}
        onSubmit={onSubmit}
        fields={registerFields}
        buttonText="Sign Up"
        loadingText="Creating account..."
      />
      <AuthSwitchLink
        prompt="Already have an Account?"
        textLink="Sign In"
        linkTo="/login"
      />
    </div>
  );
}
