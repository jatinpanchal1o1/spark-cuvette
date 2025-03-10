import React from "react";
import SignUpForm from "../component/signup/signupform";
import ImageSection from "../component/signup/imageSection";
import LogoSpark from "../assets/SLogo.svg";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&family=Inter:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className="flex w-full min-h-screen bg-white max-md:flex-col">
        <section className="flex flex-col flex-1 justify-between px-40 py-8 max-md:px-5 max-md:py-8">
      <div className="p-6 w-50 absolute left-0 z-10 cursor-pointer">
      <Link to="/spark-cuvette">
        <img
            src={LogoSpark}
            className='object-fill'
            />
      </Link>
      </div>
          <div className="mx-auto mt-24 mb-0 max-w-screen-sm max-md:mx-auto max-md:mt-10 max-md:mb-0">
            <h1 className="mb-10 text-5xl font-extrabold tracking-tighter text-black max-sm:text-4xl">
              Sign up to your Spark
            </h1>
            <SignUpForm />
          </div>
          <footer className="mb-5 text-xs text-center text-stone-500">
            <span>This site is protected by reCAPTCHA and the </span>
            <a href="#" className="underline text-stone-500">
              Google Privacy Policy
            </a>
            <span> and </span>
            <a href="#" className="underline text-stone-500">
              Terms of Service
            </a>
            <span> apply.</span>
          </footer>
        </section>
        <ImageSection />
      </main>
    </>
  );
}

export default SignUpPage;