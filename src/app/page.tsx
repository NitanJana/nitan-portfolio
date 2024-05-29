import Link from "next/link";
import { FiDownload } from "react-icons/fi";

// components
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24 gap-8">
          {/* description */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg">Software Developer</span>
            <h1 className="h1 mt-2 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Nitan Jana</span>
            </h1>
            <p className="max-w-[520px] mb-9 text-white/80">
              I excel in creating user-friendly, fast and scalable web
              applications, with proficiency in a wide range of programming
              languages and technologies.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* cv button */}
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-4 transition duration-500 ease-in-out"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>

              {/* social links */}
              <div className="mb-8 xl:mb-0 ">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="h-9 w-9 text-accent border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary transition duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
          {/* profile image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
