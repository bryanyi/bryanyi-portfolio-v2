"use client";
import { useEffect, useState } from "react";
import ScrollLink from "../util/ScrollLink";
import { NavLinks } from "@/data/navlinks";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [NavLinksArr, setNavLinksArr] = useState<any>([]);

  useEffect(() => {
    const headerEl = document.querySelector("header.main-header");
    window.addEventListener("wheel", function (event) {
      if (event.deltaY < 0 && this.window.pageYOffset <= 10) {
        headerEl?.classList.remove("shade");
      } else if (event.deltaY > 0 && this.window.pageYOffset > 95) {
        headerEl?.classList.add("shade");
      }
    });

    let newLinksArr: any[] = [];
    for (let i = 0; i < NavLinks.length; i++) {
      let navLink = NavLinks[i];
      let el = document.querySelector(navLink.id);
      let elTop = el?.getBoundingClientRect().top;
      navLink["position"] = elTop ? elTop - 100 : 0;
      newLinksArr.push(navLink);
    }
    setNavLinksArr(newLinksArr);
  }, []);

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
      <header className="main-header">
        <aside className="sidebar-menu">
          <nav className="sidebar-inner-container flex justify-center items-center h-full">
            <ul className="flex flex-col justify-center items-center gap-y-9 text-base">
              {NavLinksArr.map((navLink: any, idx: number) => {
                return (
                  <li key={idx} onClick={() => hamburgerMenuHandler()}>
                    <ScrollLink href={navLink.id} position={navLink.position}>
                      {navLink.navTitle}
                    </ScrollLink>
                  </li>
                );
              })}
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

        <ul className="hidden text-sm justify-around items-center list-none gap-x-14 font-thin md:flex">
          {NavLinksArr.map((navLink: any, idx: number) => {
            return (
              <li key={idx} className="list-hover">
                <ScrollLink href={navLink.id} position={navLink.position}>
                  {navLink.navTitle}
                </ScrollLink>
              </li>
            );
          })}
          <li className="list-hover">
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
