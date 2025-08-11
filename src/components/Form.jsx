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
        <button
          type="button"
          onClick={onClose}
          className="
            inline-flex items-center p-2  ms-2 text-sm text-red-400 bg-transparent rounded-xs hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300"
          data-dismiss-target="#badge-dismiss-red"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>

        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Add User
        </h1>

        <div className="grid gap-5">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              {...register("fullName")}
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Full Name
            </label>
            {errors.fullName && (
              <p className="text-red-600 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              {...register("email")}
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              {...register("password")}
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              {...register("phone")}
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Phone
            </label>
            {errors.phone && (
              <p className="text-red-600 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="url"
              {...register("website")}
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Website
            </label>
            {errors.website && (
              <p className="text-red-600 text-sm">{errors.website.message}</p>
            )}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              {...register("birthDate")}
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Birth Date
            </label>
            {errors.birthDate && (
              <p className="text-red-600 text-sm">{errors.birthDate.message}</p>
            )}
          </div>

          <label className="block font-semibold text-gray-700">
            Experience: {watch("experience")} years
          </label>
          <input
            type="range"
            min="0"
            max="20"
            step="0.5"
            {...register("experience", { valueAsNumber: true })}
            className="w-full accent-gray-600"
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
                    className="accent-gray-600"
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
                  className="accent-gray-600"
                />
                <span className="ml-2 text-gray-800">{plan}</span>
              </label>
            ))}
          </div>

          {(subscription === "Pro" || subscription === "Enterprise") && (
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                {...register("companySize")}
                placeholder=" "
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              />
              <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Company Size
              </label>
              {errors.companySize && (
                <p className="text-red-600 text-sm">
                  {errors.companySize.message}
                </p>
              )}
            </div>
          )}

          <select
            {...register("country")}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
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
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
