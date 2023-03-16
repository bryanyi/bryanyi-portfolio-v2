const Introduction = () => {
  return (
    <>
      <section className="flex flex-col h-screen text-left pt-28 gap-y-5 mt-40">
        <h1 className="text-lg font-spacemono text-accent font-thin pl-3">
          Hi, my name is
        </h1>

        <h2 className="text-7xl font-bold">Bryan Yi.</h2>
        <h2 className="text-7xl text-secondary font-bold">
          I build things for the web.
        </h2>

        <p className="w-5/6 text-secondary text-lg">
          I'm a self-taught software engineer with a passion for building
          extraordinary applications and tinkering with technology. Currently,
          I'm focused on developing customer-centric web apps at{" "}
          <a className="fun-underline" href="https://www.ridge.com">
            The Ridge
          </a>{" "}
          and{" "}
          <a className="fun-underline" href="https://www.medium.com/@bryanyi">
            writing blogs
          </a>{" "}
          to give other self-taught engineers guidance that I wish I had.
        </p>

        <div className="flex gap-x-9 text-lg mt-2">
          <a
            href="https://www.linkedin.com/in/bryantaeyi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-4xl image-hover"></i>
          </a>
          <a
            href="https://github.com/bryanyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-4xl image-hover"></i>
          </a>
          <a
            href="./BryanYi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="far fa-file text-4xl image-hover"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Introduction;
