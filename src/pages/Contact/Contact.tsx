import LeftDecoration from "./components/LeftDecoration/LeftDecoration";
import RightDecoration from "./components/RightDecoration/RightDecoration";

import "./Contact.css";

function Contact() {
  return (
    <>
      <LeftDecoration />
      <RightDecoration />
      <div className="section">
        <h1 className="font-bebas text-[5rem]">Contacto</h1>
      </div>
    </>
  );
}

export default Contact;
