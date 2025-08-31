"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import logo from "../../public/assets/pictures/logo.svg";
import menuNormal from "../../public/assets/pictures/menuNormal.svg";
import menuClose from "../../public/assets/pictures/menuClose.svg";
import englishFlag from "../../public/assets/pictures/englishFlag.svg";
import franceFlag from "../../public/assets/pictures/franceFlag.svg";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export function closeMenuOnNavClick() {
  if (typeof window === "undefined") return;
  const toggle = document.getElementById("menuToggle");
  document.querySelectorAll('a[href^="/"]').forEach((link) => {
    link.addEventListener("click", () => toggle && (toggle.checked = false));
  });
}

export default function Navbar() {
  // Find the current flag based on locale

  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  useEffect(() => {
    closeMenuOnNavClick();
  }, []);

  return (
    <main className="flex fixed z-50 justify-between items-center h-24 w-full p-6 bg-light-background">
      {/*Homepage link*/}
      <Link
        href="/"
        className="px-2.5 text-label-large font-roboto font-medium"
      >
        <Image src={logo} alt="logo mon toubib" />
      </Link>

      {/*Big navbar*/}
      <div className="flex justify-center items-center gap-5">
        <nav className="hidden lg:block">
          <ul className="flex gap-2">
            <Link
              href="/about"
              className={`px-2.5 text-label-large text-light-on-surface font-roboto font-semibold
                    ${isActive("/about") ? "text-light-primary" : ""}`}
            >
              {"about"}
            </Link>

            <Link
              href="/patients"
              className={`px-2.5 text-label-large text-light-on-surface font-roboto font-semibold
                    ${isActive("/patients") ? "text-light-primary" : ""}`}
            >
              {"patients"}
            </Link>
            <Link
              href="/medecins"
              className={`px-2.5 text-label-large text-light-on-surface font-roboto font-semibold
                    ${isActive("/medecins") ? "text-light-primary" : ""}`}
            >
              {"doctors"}
            </Link>
            <Link
              href="/professionnels"
              className={`px-2.5 text-label-large text-light-on-surface font-roboto font-semibold
                    ${isActive("/professionnels") ? "text-light-primary" : ""}`}
            >
              {"professionals"}
            </Link>
            <Link
              href="/blog"
              className={`px-2.5 text-label-large text-light-on-surface font-roboto font-semibold
                    ${isActive("/blog") ? "text-light-primary" : ""}`}
            >
              {"blog"}
            </Link>
            <Link
              href="/contact"
              className={`px-2.5 text-label-large text-light-on-surface font-roboto font-semibold
                    ${isActive("/contact") ? "text-light-primary" : ""}`}
            >
              {"contact"}
            </Link>
          </ul>
        </nav>
      </div>

      {/*Menu and language*/}
      <div className="flex justify-center items-center gap-5">
        {/*Menu logic*/}
        <div className="relative">
          {/*<!-- Hidden checkbox and menu button -->*/}
          <input type="checkbox" id="menuToggle" className="peer hidden" />
          <label htmlFor="menuToggle" className="cursor-pointer lg:hidden">
            <Image className="lg:hidden" src={menuNormal} alt="icone menu" />
          </label>

          {/*<!-- Backdrop -->*/}
          <label
            htmlFor="menuToggle"
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 hidden peer-checked:block peer-checked:lg:hidden"
          ></label>

          {/*<!-- Sidebar menu -->*/}
          <div className="flex flex-col fixed lg:hidden px-3 gap-3 py-5 top-0 left-0 h-full w-[300px] bg-white z-40 transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 shadow-lg">
            <div className="p-5">
              {/*<!-- Close button -->*/}
              <label
                htmlFor="menuToggle"
                className="cursor-pointer text-gray-500"
              >
                <Image className="lg:hidden" src={menuClose} alt="icone menu" />
              </label>
            </div>

            <ul className="flex flex-col gap-5">
              <Link
                href="/about"
                className={`hover:bg-light-primary-fixed rounded-full py-5 px-5
                      text-label-large font-roboto font-medium
                      ${
                        isActive("/about")
                          ? "text-label-large bg-light-primary-fixed"
                          : "text-light-primary"
                      }`}
              >
                {"about"}
              </Link>
              <Link
                href="/patients"
                className={`hover:bg-light-primary-fixed rounded-full py-5 px-5
                      text-label-large font-roboto font-medium
                      ${
                        isActive("/patients")
                          ? "text-label-large bg-light-primary-fixed"
                          : "text-light-primary"
                      }`}
              >
                {"patients"}
              </Link>
              <Link
                href="/medecins"
                className={`hover:bg-light-primary-fixed rounded-full py-5 px-5
                      text-label-large font-roboto font-medium
                      ${
                        isActive("/medecins")
                          ? "text-label-large bg-light-primary-fixed"
                          : "text-light-primary"
                      }`}
              >
                {"doctors"}
              </Link>
              <Link
                href="/professionnels"
                className={`hover:bg-light-primary-fixed rounded-full py-5 px-5
                      text-label-large font-roboto font-medium
                      ${
                        isActive("/professionnels")
                          ? "text-label-large bg-light-primary-fixed"
                          : "text-light-primary"
                      }`}
              >
                {"professionals"}
              </Link>
              <Link
                href="/blog"
                className={`hover:bg-light-primary-fixed rounded-full py-5 px-5
                      text-label-large font-roboto font-medium
                      ${
                        isActive("/blog")
                          ? "text-label-large bg-light-primary-fixed"
                          : "text-light-primary"
                      }`}
              >
                {"blog"}
              </Link>
              <Link
                href="/contact"
                className={`hover:bg-light-primary-fixed rounded-full py-5 px-5
                      text-label-large font-roboto font-medium
                      ${
                        isActive("/contact")
                          ? "text-label-large bg-light-primary-fixed"
                          : "text-light-primary"
                      }`}
              >
                {"contact"}
              </Link>
            </ul>
          </div>
        </div>

        {/*<!-- Language menu -->*/}
        <div className="relative">
          <button onClick={() => setLanguageMenuOpen(!languageMenuOpen)}>
            <Image src={franceFlag} alt="lang" />
          </button>
        </div>
      </div>
    </main>
  );
}
