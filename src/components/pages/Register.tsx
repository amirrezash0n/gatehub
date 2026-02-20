import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import {
  registerSchema,
  type RegisterFormData,
} from "../../lib/validators/auth.validator";

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
      // شبیه‌سازی ثبت‌نام
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("ثبت‌نام موفقیت‌آمیز!");
    } catch (error) {
      console.error("خطا:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-black-100 mb-6">
        ثبت‌نام در GateHub
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* فیلد ایمیل */}
        <div>
          <label className="block text-sm font-medium text-black-60 mb-1">
            ایمیل
          </label>
          <input
            type="email"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-100 ${
              errors.email ? "border-red-500" : "border-black-20"
            }`}
            placeholder="example@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* فیلد رمز عبور */}
        <div>
          <label className="block text-sm font-medium text-black-60 mb-1">
            رمز عبور
          </label>
          <input
            type="password"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-100 ${
              errors.password ? "border-red-500" : "border-black-20"
            }`}
            placeholder="••••••••"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-100 text-white-100 py-2 px-4 rounded-lg hover:bg-primary-100/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "در حال ثبت‌نام..." : "ثبت‌نام"}
        </button>
      </form>

      <p className="text-center mt-4 text-black-60">
        قبلاً ثبت‌نام کرده‌اید؟{" "}
        <Link to="/login" className="text-primary-100 hover:underline">
          ورود
        </Link>
      </p>
    </div>
  );
}
