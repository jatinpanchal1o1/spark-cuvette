import React from 'react';
import InputField from '../component/login/inputField';
import Button from '../component/login/button';
import { Link } from "react-router-dom";
import RecaptchaNotice from '../component/login/recaptes';
import ImageSection from '../component/signup/imageSection';
import LogoSpark from "../assets/SLogo.svg";

function SignInForm() {
  return (
    <div className="flex w-full min-h-screen bg-white max-md:flex-col">
      <section className="flex flex-col flex-1 justify-between px-40 py-8 max-md:px-5 max-md:py-8">
      <div className="p-6 w-50 absolute left-0 z-10 cursor-pointer">
      <Link to="/spark-cuvette">
        <img
            src={LogoSpark}
            className='object-cover'
            />
       </Link>     
      </div>
      <div className="flex flex-col max-w-full w-[593px] pt-22">
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
            className="mt-9 px-14 py-4 text-base w-full font-semibold tracking-tight cursor-pointer hover:bg-neutral-300 text-center bg-neutral-200 rounded-[64px] hover:text-neutral-600 text-neutral-400 max-md:px-5 max-md:max-w-full"
          >
            Log in
          </Button>
        </form>
      </div>
      <Link to="/spark-cuvette/forgot-password" className="self-center mt-9 text-green-600 underline">
        Forgot password?
      </Link>
      <div className="flex gap-1 items-start self-center mt-9">
        <p className="text-black">Don't have an account?</p>
        <Link to="/spark-cuvette/signup" className="text-green-600 underline">Sign up</Link>
      </div>
      <RecaptchaNotice className="mt-72 max-md:mt-10" />
      </section>
      <ImageSection/>
    </div>
  );
}

export default SignInForm;