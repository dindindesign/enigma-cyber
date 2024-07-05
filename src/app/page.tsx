import { ChevronRightIcon } from "@heroicons/react/20/solid";
import FeaturedImage from "@/images/cover.png";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";

export default function Home() {
  return (
    <div className="overflow-hidden bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="text-center lg:text-left lg:pr-4 lg:pt-4">
            <div className="flex justify-center lg:justify-start">
              <div className="relative flex items-center gap-x-4 rounded-full pl-1 pr-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-white/10 hover:ring-white/20">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold leading-6 text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                  Need Help?
                </span>
                <Link href="#" className="flex items-center gap-x-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Send us a message
                  <ChevronRightIcon
                    className="-mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              A <span className="text-emerald-500">better</span> way to
              cybersecurity
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We bring quality, sensible, and personalized cybersecurity
              services to underserved markets, like the &quot;Big Four&quot;,
              minus the cost and frills.
            </p>
            <div className="mt-10">
              <Modal
                buttonText={" Schedule a free consultation"}
                buttonClass={
                  "rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                }
              />
            </div>
            <p className="mt-6 text-xs text-gray-300">
              Start your free 30-minute consultation, no obligation. We will
              collect your email address to send you a meeting invitation. We
              will never sell your personal information or send you unsolicited
              emails.
            </p>
          </div>
          <Image
            alt=""
            src={FeaturedImage}
            width={2432}
            height={1442}
            className="w-full max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"
            priority
          />
        </div>
      </div>
    </div>
  );
}
