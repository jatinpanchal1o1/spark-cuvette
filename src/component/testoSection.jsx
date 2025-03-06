import React from "react";
import TestimonialCard from "./testoCard";

function TestimonialsSection() {
  return (
    <section className="mt-20 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-6 items-start w-full">
        <TestimonialCard backgroundColor="bg-neutral-200" />
        <TestimonialCard backgroundColor="bg-white" />
      </div>
      <div className="flex flex-wrap gap-6 items-start mt-6 w-full">
        <TestimonialCard backgroundColor="bg-white" />
        <TestimonialCard backgroundColor="bg-neutral-200" />
      </div>
    </section>
  );
}

export default TestimonialsSection;
