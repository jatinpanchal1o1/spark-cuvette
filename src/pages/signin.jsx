import React from 'react';
import InputField from './InputField';
import Button from './Button';
import Link from './Link';
import RecaptchaNotice from './RecaptchaNotice';

function SignInForm() {
  return (
    <div className="flex flex-col items-start pt-32 pb-20 max-md:pt-24">
      <div className="flex flex-col max-w-full w-[593px]">
        <h1 className="self-start text-5xl font-extrabold tracking-tighter leading-tight text-black max-md:max-w-full max-md:text-4xl">
          Sign in to your Spark
        </h1>
        <form className="mt-12">
          <InputField
            label="Username"
            type="text"
            placeholder="Spark/Username"
            className="flex gap-1 px-4 py-3.5 rounded-lg bg-zinc-100"
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Password"
            className="mt-6 px-4 py-3.5 rounded-lg bg-zinc-100"
          />
          <Button
            type="submit"
            className="mt-9 px-14 py-4 text-base font-semibold tracking-tight text-center bg-neutral-200 rounded-[64px] text-neutral-400 max-md:px-5 max-md:max-w-full"
          >
            Log in
          </Button>
        </form>
      </div>
      <Link href="/forgot-password" className="self-center mt-9 text-green-600 underline">
        Forgot password?
      </Link>
      <div className="flex gap-1 items-start self-center mt-9">
        <p className="text-black">Don't have an account?</p>
        <Link href="/signup" className="text-green-600 underline">Sign up</Link>
      </div>
      <RecaptchaNotice className="mt-72 max-md:mt-10" />
    </div>
  );
}

export default SignInForm;