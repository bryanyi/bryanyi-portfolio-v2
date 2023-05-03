"use client";
import { useState } from "react";
import ScrollLink from "../util/ScrollLink";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const hamburgerMenuHandler = () => {
    const menuHamburger = document.querySelector(".menu-hamburger");
    const sidebar = document.querySelector(".sidebar-menu");
    const mainPageEl = document.querySelector(".main-page");
    const bodyEl = document.querySelector("body");
    if (!isMenuOpen) {
      menuHamburger?.classList.add("active");
      sidebar?.classList.add("active");
      mainPageEl?.classList.add("blur");
      bodyEl?.classList.add("sliderOpen");
      setIsMenuOpen(true);
    } else {
      menuHamburger?.classList.remove("active");
      sidebar?.classList.remove("active");
      mainPageEl?.classList.remove("blur");
      bodyEl?.classList.remove("sliderOpen");
      setIsMenuOpen(false);
    }
  };
  return (
    <>
      <header className="flex justify-between h-full w-full px-6 sm:px-12 pt-10 font-spacemono text-sm">
        <aside className="sidebar-menu">
          <nav className="sidebar-inner-container flex justify-center items-center h-full">
            <ul className="flex flex-col justify-center items-center gap-y-9 text-base">
              <li onClick={() => hamburgerMenuHandler()}>
                <ScrollLink href={"#about"}>About</ScrollLink>
              </li>
              <li onClick={() => hamburgerMenuHandler()}>
                <ScrollLink href={"#work"}>Work</ScrollLink>
              </li>
              <li onClick={() => hamburgerMenuHandler()}>
                <ScrollLink href={"#projects"}>Projects</ScrollLink>
              </li>
              <li onClick={() => hamburgerMenuHandler()}>
                <ScrollLink href={"#contact"}>Contact me</ScrollLink>
              </li>
              <li>
                <a className="cursor-pointer text-primary py-[.7rem] px-[16px] border border-accent rounded" href="/bryanyi_resume.pdf">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <a href="/" className="text-accent text-2xl flex justify-center items-center">
          BY
        </a>

        <ul className="hidden md:flex justify-around items-center list-none gap-x-14 font-thin">
          <li className="list-hover">
            <a href="#about">About</a>
          </li>
          <li className="list-hover">
            <a href="#work">Work</a>
          </li>
          <li className="list-hover">
            <a href="#projects">Projects</a>
          </li>
          <li className="list-hover">
            <a href="#contact">Contact Me</a>
          </li>
          <li className="ml-2 list-hover">
            <a className="squishy-button" href="/bryanyi_resume.pdf">
              Resume
            </a>
          </li>
        </ul>

        <div className="menu-hamburger" onClick={() => hamburgerMenuHandler()}>
          <div className="hamburger_line"></div>
        </div>
      </header>
    </>
  );
};

export default Nav;
