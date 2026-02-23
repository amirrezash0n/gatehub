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

export default function Register() {
  const navigate = useNavigate();
  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("ثبت‌نام موفقیت‌آمیز!");
      navigate("/dashboard");
    } catch (error) {
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
        schema={registerSchema}
        onSubmit={onSubmit}
        fields={registerFields}
        buttonText="Sign Up"
        loadingText="Creating account..."
      />
      {/* AuthSwitchLink Component */}
      <AuthSwitchLink
        prompt="Already have an Account?"
        textLink="Sign In"
        linkTo="/login"
      />
    </div>
  );
}
