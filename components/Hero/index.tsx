import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="pt-35 xl:pb-25 xl:pt-46 overflow-hidden pb-20 md:pt-40">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="xl:gap-32.5 flex lg:items-center lg:gap-8">
            <div className="md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Solid - A Complete SaaS Starter Template for SaaS
              </h4>
              <h1 className="xl:text-hero mb-5 pr-16 text-3xl font-bold text-black dark:text-white ">
                Robust SaaS Boilerplate and Starter for
                <span className="before:-z-1 before:bg-titlebg dark:before:bg-titlebgdark relative ml-2.5 inline-block before:absolute before:bottom-2.5 before:left-0 before:h-3 before:w-full ">
                  Next.js
                </span>
              </h1>
              <p>
                Packed with all the key integrations you need for swift SaaS
                startup launch, including - Authentication, Database, Sanity
                Blog, Essential UI Components, Business Pages and More.
                Built-winth - Next.js, React 19 and TypeScript.
              </p>

              <div className="mt-10">
                <Link
                  href={"/auth/signup"}
                  aria-label="get started button"
                  className="px-7.5 hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho inline-block rounded-full bg-black py-2.5 text-white duration-300 ease-in-out"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="hidden md:w-1/2 lg:block">
              <div className="2xl:-mr-7.5 relative">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="-left-11.5 absolute top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="-right-6.5 z-1 absolute bottom-0"
                />
                <div className=" aspect-700/444 relative w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="shadow-solid-l hidden dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
