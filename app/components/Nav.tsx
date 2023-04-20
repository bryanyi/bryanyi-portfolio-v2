const Nav = () => {
  return (
    <>
      <header className="flex justify-between h-full w-full px-6 sm:px-12 pt-10 font-spacemono text-sm">
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

        <div className="menu-hamburger cursor-pointer flex justify-center items-center md:hidden">
          <div className="hamburger_line"></div>
        </div>
      </header>
    </>
  );
};

export default Nav;
