const Contact = () => {
  return (
    <>
      <section className="contact-section flex flex-col items-center justify-center mb-48">
        <h1 className="text-3xl font-medium text-center mb-7">Get In Touch</h1>
        <p className="text-center text-secondary w-5/12 mb-7">
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
