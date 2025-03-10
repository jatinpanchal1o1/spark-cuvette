import React, { useState } from "react";
import FormInput from "./inputForm";
import CheckboxWithLabel from "./checkBox";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      agreeToTerms: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-5 py-0 w-[419px] max-md:w-full max-md:max-w-[419px] max-sm:p-0"
      aria-labelledby="create-account-heading"
    >
      <div className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:gap-2.5 max-sm:items-start">
        <h2
          id="create-account-heading"
          className="text-2xl font-medium text-zinc-800 max-sm:text-xl"
        >
          Create an account
        </h2>
       <Link to="/spark-cuvette/login"><button type="button" className="text-xs text-green-600 underline cursor-pointer">
          Sign in instead
        </button>
        </Link>
      </div>

      <FormInput
        label="First name"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      />

      <FormInput
        label="Last name"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        required
      />

      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <FormInput
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />

      <FormInput
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        required
      />

      <CheckboxWithLabel
        checked={formData.agreeToTerms}
        onChange={handleCheckboxChange}
        id="terms-checkbox"
      >
        <span>By creating an account, I agree to our </span>
        <span className="underline text-neutral-900">Terms of use</span>
        <span> and </span>
        <span className="underline text-neutral-900">Privacy Policy</span>
      </CheckboxWithLabel>

      <button
        type="submit"
        className={`px-0 py-3 w-full text-base font-medium text-white rounded-3xl ${
          formData.agreeToTerms ? "bg-neutral-900" : "bg-neutral-900 opacity-25"
        } cursor-pointer border-none`}
        disabled={!formData.agreeToTerms}
        aria-label="Create an account"
      >
        Create an account
      </button>
    </form>
  );
}

export default SignUpForm;
