import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { SERVICE_ID, TENPLATE_ID, PUBLIC_KEY } from "../constants/emailjs";
import { Input } from "./Form/components/Input";
import { FaCopy } from "react-icons/fa6";
import { MdOutlineDownloadDone } from "react-icons/md";

export const Contact: React.FC = () => {
  const form = useRef<any>();

  const [isMessageSent, setIsMessageSent] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [coppiedMessage, setCoppiedMessage] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await emailjs
      .sendForm(SERVICE_ID, TENPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setIsMessageSent(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const myEmail = "eliasismael.pereyra@gmail.com";

  const copyEmail = () => {
    window.navigator.clipboard.writeText(myEmail);
    setCoppiedMessage(true);
    setTimeout(() => {
      setCoppiedMessage(false);
    }, 2000);
  };

  return (
    <div id="contact" className="w-full py-8 mb-10 text-white">
      <h3 className="text-5xl text-center font-extrabold tracking-wide mb-8">
        Contact
      </h3>

      <div className="w-full flex flex-col justify-center items-center bg-transparent shadow-md  rounded-lg">
        <div className="flex  items-center relative my-2 flex-col sm:flex-row">
          Send to
          <span className="flex items-center mx-1 px-3 py-1 font-medium rounded-full  border-violet-600 bg-violet-700/10  transition">
            eliasismael.pereyra@gmail.com
            <button className="ml-4" onClick={copyEmail}>
              <FaCopy className="h-4 w-4 text-gray-100 hover:text-white active:text-purple-500 transition" />
            </button>
            <span
              className={`absolute right-0 translate-x-[100%] flex flex-col sm:flex-row items-center ${coppiedMessage ? "opacity-100" : "opacity-0"} duration-150`}
            >
              <MdOutlineDownloadDone className="text-green-500 w-6 h-6" />
            </span>
          </span>
        </div>

        <form
          ref={form}
          onSubmit={(e) => sendEmail(e)}
          className="w-full max-w-lg"
        >
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            name="user_name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />

          <Input
            id="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            name="user_email"
          />

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg  mb-2">
              Message
            </label>

            <textarea
              className="w-full py-2 px-4 border text-white bg-violet-900/5 border-violet-900 rounded-xl outline-none focus:border-violet-600 transition"
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
              className="bg-violet-900 w-full text-white font-medium text-lg py-2 px-4 rounded-lg hover:bg-violet-800 duration-300"
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
