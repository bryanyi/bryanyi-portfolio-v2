const Contact = () => {
  return (
    <>
      <section id="contact" className="contact-section flex flex-col items-center justify-center mb-48">
        <h1 className="text-2xl font-medium text-center mb-5 md:mb-7 md:text-3xl">Get In Touch</h1>
        <p className="text-center text-secondary text-xs mb-5 md:text-base md:w-8/12 lg:w-5/12 md:mb-7">
          I'm always open to chatting about software engineering, tech, and building
          my network. Feel free to send me an e-mail any time!
        </p>
        <a href="mailto:bryanyi1206@gmail.com" className="squishy-button">
          Say Hello
        </a>
      </section>
    </>
  );
};

export default Contact;
