import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../common/Button";
import { z } from "zod";

type FormField = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
};

interface AuthFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: z.ZodObject<any, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => Promise<void>;
  fields: FormField[];
  buttonText: string;
  loadingText?: string;
}

export default function AuthForm({
  schema,
  onSubmit,
  fields,
  buttonText,
  loadingText = "Processing...",
}: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const error = (errors as any)[field.name];

        return (
          <div key={field.name}>
            <label className="block text-sm font-semibold text-black-100 mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-100 ${
                error ? "border-red-500" : "border-black-20"
              }`}
              {...register(field.name)}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error.message}</p>
            )}
          </div>
        );
      })}

      <Button disabled={isSubmitting} className="mt-2" type="submit">
        {isSubmitting ? loadingText : buttonText}
      </Button>
    </form>
  );
}
