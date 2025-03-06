"use client";
import React from "react";
import Header from "../component/header";
import Hero from "../component/hero";
import FeatureSection from "../component/featureSection";
import TestimonialsSection from "../component/testoSection";
import IntegrationApps from "../component/intiapps";
import Footer from "../component/footer";

function Desktop() {
  return (
    <main className="flex overflow-hidden flex-col items-center py-12 pl-8 bg-neutral-50 max-md:pl-5">
      <Header />
      <Hero />

      <FeatureSection
        reversed={false}
        content={{
          title: "Analyze your audience and keep your followers engaged",
          description:
            "Track your engagement over time, monitor revenue and learn what's converting your audience. Make informed updates on the fly to keep them coming back.",
        }}
        image={{
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1ba27dcfa9ba2d80b5214dad50deffa3aaafe1846a924386c40f1a74eec3777?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32",
          alt: "Analytics dashboard visualization",
          containerClassName: "flex overflow-hidden items-start w-[133px]",
          imageClassName: "object-contain aspect-[0.62] w-[133px]",
        }}
        backgroundColor="bg-white"
        contentWidth="w-[39%]"
        imageWidth="w-[61%]"
        imageContent={
          <div className="flex flex-wrap gap-0 items-start self-end pt-1 pr-5 pl-3 max-md:max-w-full">
            <div className="flex min-h-[215px]" />
            <div className="flex min-h-[215px]" />
            <div className="flex min-h-[215px]" />
            <div className="flex min-h-[215px]" />
            <div className="flex overflow-hidden items-start w-[133px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1ba27dcfa9ba2d80b5214dad50deffa3aaafe1846a924386c40f1a74eec3777?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32"
                className="object-contain aspect-[0.62] w-[133px]"
                alt="Analytics visualization"
              />
            </div>
          </div>
        }
        additionalContent={
          <h3 className="self-start mt-16 text-2xl tracking-tight leading-9 text-gray-800 max-md:mt-10 max-md:max-w-full">
            Sell products and collect payments. It's monetization made simple.
          </h3>
        }
      />

      <FeatureSection
        reversed={true}
        content={{
          title: "Share limitless content in limitless ways",
          description:
            "Connect your content in all its forms and help followers find more of what they're looking for. Your TikToks, Tweets, YouTube videos, music, articles, recipes, podcasts and more… It all comes together in one powerful place",
        }}
        image={{
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb928e1a427b1759a4decc1b69f23dc6e7b041f79d9dc102d22da4d2bb6c03f3?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32",
          alt: "Content sharing visualization",
          containerClassName:
            "flex grow items-start px-10 py-12 w-full text-3xl tracking-tight leading-9 text-white bg-stone-300 rounded-[32px] max-md:px-5 max-md:mt-8",
          imageClassName:
            "object-contain self-end mr-0 w-full aspect-[4.33] max-md:max-w-full",
        }}
        backgroundColor="bg-stone-300"
        contentWidth="w-[39%]"
        imageWidth="w-[61%]"
        imageContent={
          <div className="flex flex-col flex-1 shrink pt-14 w-full basis-0 min-w-60 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb928e1a427b1759a4decc1b69f23dc6e7b041f79d9dc102d22da4d2bb6c03f3?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32"
              className="object-contain self-end mr-0 w-full aspect-[4.33] max-md:max-w-full"
              alt="Content sharing visualization"
            />
            <h3 className="mt-24 w-[511px] max-md:mt-10 max-md:max-w-full text-3xl tracking-tight leading-9 text-white">
              Share your content in limitless ways on your Spark
            </h3>
          </div>
        }
      />

      <section className="flex flex-wrap gap-4 items-start mt-20 w-full max-w-[1257px] max-md:mt-10 max-md:max-w-full">
        <h2 className="grow shrink text-5xl font-semibold tracking-tighter leading-10 text-black w-[615px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          <span
            style={{
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 400,
            }}
          >
            Here's what our{" "}
          </span>
          <span
            style={{
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 400,
              color: "rgba(29,163,94,1)",
            }}
          >
            customer
          </span>
          <br />
          <span
            style={{
              fontFamily:
                "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 400,
            }}
          >
            has to says
          </span>
        </h2>
        <div className="flex flex-wrap grow shrink gap-4 justify-center items-center text-sm font-medium leading-4 min-w-60 text-stone-900 w-[355px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/540f094787f925a403ba6e0870785a54bcc07718f6974161f93805282ea118c0?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
            alt="Customer icon"
          />
          <p className="self-stretch my-auto w-[300px]">
            [short description goes in here] lorem ipsum is a placeholder text
            to demonstrate.
          </p>
        </div>
        <button className="gap-2.5 self-stretch px-6 py-3 text-base text-green-600 border-2 border-green-600 border-solid rounded-[99px] max-md:px-5">
          Read customer stories
        </button>
      </section>

      <TestimonialsSection />
      <IntegrationApps />
      <Footer />
    </main>
  );
}

export default Desktop;
