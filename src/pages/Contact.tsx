import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mt-36 text-center w-1/2">
        <p className="text-8xl mb-12">Contact us</p>
        <p className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;