import React from "react";

function Footer() {
  return (
    <footer className="relative px-16 py-14 mt-20 w-full bg-white rounded-2xl max-w-[1276px] min-h-[382px] shadow-[0px_-4px_99px_rgba(40,162,99,0.3)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex z-0 flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start self-start max-md:max-w-full">
          <div className="flex gap-2 items-start pb-16 text-base leading-loose min-h-16 min-w-60">
            <button className="pt-5 pr-7 pb-5 pl-6 text-gray-800 rounded-xl bg-zinc-100 max-md:px-5">
              Log in
            </button>
            <button className="pt-5 pr-8 pb-5 pl-6 text-white bg-green-600 rounded-[96px] max-md:px-5">
              Sign up free
            </button>
          </div>
          <nav className="flex flex-wrap gap-10 items-start text-xs font-bold text-gray-800 min-w-60 max-md:max-w-full">
            <div className="w-[90px]">
              <h4>About Spark</h4>
              <ul>
                <li className="mt-5">
                  <a href="#">Blog</a>
                </li>
                <li className="mt-5">
                  <a href="#">Press</a>
                </li>
                <li className="mt-5 text-xs">
                  <a href="#">Social Good</a>
                </li>
                <li className="mt-5">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="w-[136px]">
              <h4>Careers</h4>
              <ul>
                <li className="mt-5">
                  <a href="#">Getting Started</a>
                </li>
                <li className="mt-5">
                  <a href="#">Features and How-Tos</a>
                </li>
                <li className="mt-5">
                  <a href="#">FAQs</a>
                </li>
                <li className="mt-5">
                  <a href="#">Report a Violation</a>
                </li>
              </ul>
            </div>
            <div className="w-[132px]">
              <h4>Terms and Conditions</h4>
              <ul>
                <li className="mt-5">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="mt-5">
                  <a href="#">Cookie Notice</a>
                </li>
                <li className="mt-5">
                  <a href="#">Trust Center</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <p className="self-stretch my-auto text-xs font-bold tracking-normal leading-5 text-gray-800 w-[656px] max-md:max-w-full">
            We acknowledge the Traditional Custodians of the land on which our
            office stands, The Wurundjeri people of the Kulin Nation, and pay
            our respects to Elders past, present and emerging.
          </p>
          <div className="flex gap-6 items-start self-stretch pb-4 my-auto min-w-60">
            <div className="flex gap-6 items-start min-w-60">
              <a href="#" aria-label="Social media link">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a57fb3695efcd9a4a1b14e254c9d0fa019a3e87b37be06794b8b5735261f0791?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32"
                  className="object-contain shrink-0 w-9 aspect-[1.39]"
                  alt="Social media icon"
                />
              </a>
              <a href="#" aria-label="Social media link">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/788b4109b5da63b4a2be6664c69637ae7e2209c4d03104a649ef325750c79251?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32"
                  className="object-contain shrink-0 w-9 aspect-[1.39]"
                  alt="Social media icon"
                />
              </a>
              <a href="#" aria-label="Social media link">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0011ed3829687ea544e6cb5f9054b7ba306529fbbf8f5f0236088eac32a7f3bd?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32"
                  className="object-contain shrink-0 w-9 aspect-[1.39]"
                  alt="Social media icon"
                />
              </a>
              <a href="#" aria-label="Social media link">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5815ef3a0e08c4eb4d5f240f37e581eecac740642ce5f80748ed11d149d9b647?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32"
                  className="object-contain shrink-0 w-9 aspect-[1.39]"
                  alt="Social media icon"
                />
              </a>
              <div className="flex shrink-0 w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex absolute inset-x-16 top-16 z-0 w-full h-[169px] min-h-[169px]" />
    </footer>
  );
}

export default Footer;
