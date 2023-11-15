import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { SERVICE_ID, TENPLATE_ID, PUBLIC_KEY } from "../constants/emailjs";

const Contact = () => {
  const form = useRef<any>();

  const [isMessageSent, setIsMessageSent] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e: any) => {
    e.preventDefault();

    await emailjs
      .sendForm(SERVICE_ID, TENPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setIsMessageSent(true);
    setName("");
    setEmail("");
    setMessage("");
    console.log("se cambio el estado");
  };

  return (
    <div id="contact" className="w-full py-8 mb-4 text-white">
      <h3 className="text-4xl text-center font-extrabold tracking-wide mb-8">
        Contact
      </h3>

      <div className="w-full flex flex-col justify-center items-center bg-transparent shadow-md rounded-lg">
        <form
          ref={form}
          onSubmit={(e) => sendEmail(e)}
          className="w-full max-w-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">
              Name
            </label>

            <input
              className="w-full p-2 border-2 text-gray-500 border-gray-300 rounded focus:outline-none focus:border-green-900
              shadow-md shadow-gray-950
              "
              id="name"
              type="text"
              placeholder="Your Name"
              name="user_name"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg  mb-2">
              Email
            </label>

            <input
              className="w-full p-2 border-2 text-gray-500 border-gray-300 rounded focus:outline-none focus:border-green-900"
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              name="user_email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg  mb-2">
              Message
            </label>

            <textarea
              className="w-full p-2 border-2 text-gray-500 border-gray-300 rounded focus:outline-none focus:border-green-900"
              id="message"
              placeholder="Hi Elías, I want to build things with you!"
              value={message}
              onChange={(evt) => setMessage(evt.target.value)}
              rows={4}
              name="message"
              required
            />
          </div>

          {!isMessageSent && (
            <button
              className="bg-gray-800 w-full text-white font-semibold py-2 px-4 rounded-lg
            hover:bg-gray-900 duration-300"
              type="submit"
            >
              Send
            </button>
          )}

          {isMessageSent && (
            <div>
              <div className="w-full bg-transparent text-green-700 text-lg text-center font-semibold rounded-md py-2">
                Message sent succesfuly
              </div>

              <button
                onClick={() => setIsMessageSent(false)}
                className="w-full py-2 mt-4 rounded-md bg-gray-600 text-center hover:bg-gray-500 duration-500"
              >
                Send another message
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
