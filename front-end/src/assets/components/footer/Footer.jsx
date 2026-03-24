import React from "react";
import Logo from "../../logo/logo1.svg";
// import { Instagram, Linkedin, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#002325] text-white px-8 md:px-16 pt-16 pb-8 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-6 max-w-xs">
          <img
            src={Logo}
            alt="ZipRecruiter"
            className="h-12 object-contain self-start"
          />

          <p className="text-[#4ADE80] font-semibold text-lg leading-snug">
            We are connecting your future. <br />
            We are here for you
          </p>

          <div className="flex gap-5 text-white">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#4ADE80] transition-colors"
            ></a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-[#4ADE80] transition-colors"
            >
              {/* <Linkedin size={22} /> */}
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#4ADE80] transition-colors"
            >
              {/* <Facebook size={22} /> */}
            </a>
          </div>
        </div>

        <div className="flex gap-16 flex-wrap">
          {/* For Job Seekers */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white text-sm">For Job Seekers</h4>
            <ul className="flex flex-col gap-2 text-white/60 text-sm">
              <li>
                <a
                  href="https://www.ziprecruiter.ie/"
                  target="_blank"
                  className="hover:text-[#4ADE80] transition-colors"
                >
                  Search Jobs
                </a>
              </li>
              <li>
                <a
                  href="https://www.ziprecruiter.ie/profiles/sign_up"
                  target="_blank"
                  className="hover:text-[#4ADE80] transition-colors"
                >
                  Create Free Account
                </a>
              </li>
              <li>
                <a
                  href="support@ziprecruiter.ie"
                  target="_blank"
                  className="hover:text-[#4ADE80] transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white text-sm">Company</h4>
            <ul className="flex flex-col gap-2 text-white/60 text-sm">
              <li>
                <a
                  href="https://www.ziprecruiter.ie/about"
                  target="_blank"
                  className="hover:text-[#4ADE80] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.ziprecruiter.ie/corporate-responsibility"
                  target="_blank"
                  className="hover:text-[#4ADE80] transition-colors"
                >
                  Corporate Responsibility
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white text-sm">Contact Us</h4>
            <ul className="flex flex-col gap-2 text-white/60 text-sm">
              <li>
                <a
                  href="mailto:"
                  className="hover:text-[#4ADE80] transition-colors"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="tel:+353180084906"
                  className="hover:text-[#4ADE80] transition-colors"
                >
                  Call +353 18 0084 9006
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white/10" />

      {/* Bottom section */}
      <div className="flex flex-col items-center gap-4 text-center">
        <a
          href="https://www.ziprecruiter.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#4ADE80] text-sm hover:underline"
        >
          www.ziprecruiter.com
        </a>

        <div className="flex flex-wrap justify-center gap-3 text-white/50 text-xs">
          <a
            href="https://www.ziprecruiter.ie/privacy"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            href="https://www.ziprecruiter.ie/terms"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Terms of Use
          </a>
          <span>|</span>
          <a
            href="https://www.ziprecruiter.global/en/cookie_policy"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Cookie Policy
          </a>
          <span>|</span>
          <a
            href="https://www.ziprecruiter.global/en/job-rules"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Job Posting Rules
          </a>
        </div>

        <p className="text-white/30 text-xs leading-relaxed max-w-2xl">
          ZipRecruiter, Inc. c/o, MCF Legal Technology Solutions Limited,
          Riverside one, Sir John Rogerson's Quay, Dublin 2, D02 X576, Ireland{" "}
          <br />
          ZipRecruiter, Inc. © All Rights Reserved Worldwide
        </p>
      </div>
    </footer>
  );
}

export default Footer;
