import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterFormData,
} from "../../lib/validators/auth.validator";
import FormLogo from "../common/FormLogo";
import Button from "../common/Button";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("ثبت‌نام موفقیت‌آمیز!");
    } catch (error) {
      console.error("خطا:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white-100 rounded-xl">
      <FormLogo />
      {/* Social Buttons */}
      <div className="flex gap-x-6">
        <Button type="social">
          <img src="images/socials/google.png" alt="google" />
          <span>Google</span>
        </Button>

        <Button type="social">
          <img src="images/socials/facebook.png" alt="facebook" />
          <span>Facebook</span>
        </Button>
      </div>

      <div className="relative flex items-center justify-center text-sm text-black-60 my-6">
        <span className="relative px-4 bg-white-100 z-10">or sign in with</span>
        <div className="absolute left-0 right-0 h-px bg-black-10"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Username */}
        <div>
          <label className="block text-sm font-semibold text-black-100 mb-2">
            Username
          </label>
          <input
            type="text"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-100 ${
              errors.username ? "border-red-500" : "border-black-20"
            }`}
            {...register("username")}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-black-100 mb-2">
            Email
          </label>
          <input
            type="email"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-100 ${
              errors.email ? "border-red-500" : "border-black-20"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-black-100 mb-2">
            Password
          </label>
          <input
            type="password"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-100 ${
              errors.password ? "border-red-500" : "border-black-20"
            }`}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button disabled={isSubmitting} className="mt-2" type="submit">
          {isSubmitting ? "Signing up..." : "Sign up"}
        </Button>
      </form>

      <div className="flex items-center justify-center gap-x-2 text-sm text-center mt-6 cursor-pointer">
        <p className="text-black-100">Already have an Account?</p>
        <a href="#" className="text-primary-100 font-semibold">
          Sign In
        </a>
      </div>
    </div>
  );
}
