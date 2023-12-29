import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="flex codia-aliceblue-text">
      <div className="flex flex-col items-center justify-center text-center w-1/2">
        <p className="text-7xl mb-12">Contact us</p>
        <p className="w-3/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;