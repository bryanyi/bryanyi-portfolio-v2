const Nav = () => {
  return (
    <>
      <header className="flex justify-between h-8 w-full px-9 pt-5 font-spacemono text-lg">
        <div className="text-accent text-2xl">BY</div>

        <ul className="flex justify-around list-none gap-x-14 font-thin">
          <li className="list-hover">
            <a href="#work">Work</a>
          </li>
          <li className="list-hover">
            <a href="#about">About</a>
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
      </header>
    </>
  );
};

export default Nav;