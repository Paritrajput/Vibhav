import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <footer className="p-4 relative bottom-0 z-10  pb-4 mx-auto text-white  footer footer-center bg-base-300 text-base-content">
        <div className="">
          <p className="flex items-center justify-center text-md sm:text-2xl font-chakra">
            Made with <span className="text-cyan-400">💚</span> by
            <Link
              href="https://www.linkedin.com/company/team-vibhav/"
              className="sm:text-3xl text-xl text-[#78B159] cursor-pointer "
            >
              {" "}
              Team Vibhav{" "}
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
