import { useForm } from "react-hook-form";
import { formData, UserSchema, skillsOptions } from "../forms/types";
import FormField from "./FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const Form = ({ onSubmit, isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: formData,
  });

  const subscription = watch("subscription");

  useEffect(() => {
    if (isOpen) {
      reset(formData);
    }
  }, [isOpen, reset]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-40 z-50 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg shadow-lg max-w-xl w-full max-h-[90vh] overflow-y-auto p-8"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Add User
        </h1>

        <div className="grid gap-5">
          <FormField
            type="text"
            placeholder="Full Name"
            name="fullName"
            register={register}
            error={errors.fullName}
          />
          <FormField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
          />

          <FormField
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
          />

          <FormField
            type="tel"
            placeholder="+1 123-456-7890"
            name="phone"
            register={register}
            error={errors.phone}
          />

          <FormField
            type="url"
            placeholder="https://example.com"
            name="website"
            register={register}
            error={errors.website}
          />

          <FormField
            type="date"
            placeholder=""
            name="birthDate"
            register={register}
            error={errors.birthDate}
          />

          <label className="block font-semibold text-gray-700">
            Experience: {watch("experience")} years
          </label>
          <input
            type="range"
            min="0"
            max="20"
            step="0.5"
            {...register("experience", { valueAsNumber: true })}
            className="w-full accent-blue-600"
          />
          {errors.experience && (
            <span className="text-red-600 text-sm">
              {errors.experience.message}
            </span>
          )}

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Skills (Select at least 2):
            </label>
            <div className="flex flex-wrap gap-3">
              {skillsOptions.map((skill) => (
                <label
                  key={skill}
                  className="inline-flex items-center space-x-2 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    value={skill}
                    {...register("skills")}
                    className="accent-blue-600"
                  />
                  <span className="text-gray-800">{skill}</span>
                </label>
              ))}
            </div>
            {errors.skills && (
              <p className="text-red-600 text-sm mt-1">
                {errors.skills.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Subscription:
            </label>
            {["Free", "Pro", "Enterprise"].map((plan) => (
              <label
                key={plan}
                className="inline-flex items-center mr-6 cursor-pointer select-none"
              >
                <input
                  type="radio"
                  value={plan}
                  {...register("subscription")}
                  defaultChecked={plan === "Free"}
                  className="accent-blue-600"
                />
                <span className="ml-2 text-gray-800">{plan}</span>
              </label>
            ))}
          </div>

          {(subscription === "Pro" || subscription === "Enterprise") && (
            <FormField
              type="text"
              placeholder="Company Size"
              name="companySize"
              register={register}
              error={errors.companySize}
            />
          )}

          <select
            {...register("country")}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
          </select>
          {errors.country && (
            <p className="text-red-600 text-sm mt-1">
              {errors.country.message}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 rounded"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
