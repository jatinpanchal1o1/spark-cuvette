import React from "react";
import IntegrationApp from "./intiApp";

function IntegrationApps() {
  const apps = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/02230af1f6a5dc61f53e225441a7a21e3f47ef2d6d50ded9b027040c7e4e4115?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32",
      title: "Audiomack",
      description: "Add an Audiomack player to your Linktree",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c5e23ea6bb24877e675392d7a6ae931c9459068221b0b1e6b685e1cb24f2a94?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32",
      title: "Bandsintown",
      description: "Drive ticket sales by listing your events",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e866aae266c1f027956cdfdc0e9724d3206ca3ef12f2923babe529b3f5c31bc?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32",
      title: "Bonfire",
      description: "Display and sell your custom merch",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/022d9f4edc5760c0ab1ac8078570d39338cd0ec34a8be9554cd16afbd9d8ad33?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32",
      title: "Books",
      description: "Promote books on your Linktree",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/473f4be500bf52fa8070014ee6ca2f5ffe4d8f77843aff208302a41a3315f9a9?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32",
      title: "Buy Me A Gift",
      description: "Let visitors support you with a small gift",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ecbf13e3d2323ef78cfad54846cbffa762862ca5fc62c1be03c105d827acbff7?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32",
      title: "Cameo",
      description: "Make impossible fan connections possible",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b99ac0cb683d15e59a934d80077bafeec7a89d7409a3addaf79858b8f6504bc?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32",
      title: "Clubhouse",
      description: "Let your community in on the conversation",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/401badbb1c96258e8ef7426f378b4df4182e44eb2d3e3339ccc577046d31f476?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32",
      title: "Community",
      description: "Build an SMS subscriber list",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9df6dcea7271ed92eb68d28ba03bb2337a3be240985fe29ccc98cca5332f93d?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32",
      title: "Contact Details",
      description: "Easily share downloadable contact details",
    },
  ];

  return (
    <section className="w-full ">
      <h2 className="self-start mt-20 ml-16 text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        All Link Apps and Integrations
      </h2>

      <div className="flex flex-wrap gap-4 mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <IntegrationApp {...apps[0]} />
        <IntegrationApp {...apps[1]} />
        <IntegrationApp {...apps[2]} />
      </div>

      <div className="flex flex-wrap gap-4 mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <IntegrationApp {...apps[3]} />
        <IntegrationApp {...apps[4]} />
        <IntegrationApp {...apps[5]} />
      </div>

      <div className="flex flex-wrap gap-4 mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <IntegrationApp {...apps[6]} />
        <IntegrationApp {...apps[7]} />
        <IntegrationApp {...apps[8]} />
      </div>
    </section>
  );
}

export default IntegrationApps;
