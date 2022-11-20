import Link from "next/link";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending");
    let data = {
      name: name,
      phone: phone,
      email: email,
      subject: subject,
      message: message,
    };

    setName("");
    setMessage("");
    setPhone("");
    setSubject("");
    setEmail("");

    fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      console.log(res);
      if (res.status == 200) {
        console.log("success");
        setSubmitted(true);
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else console.log(res);
    });
  };

  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Aviraj Walunj</h2>
                <p>Full Stack Developer</p>
                <p className="py-4"> I am available for freelance projects.</p>
              </div>
              <div>
                <p className="uppercase pt-8">connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <Link href="https://www.linkedin.com/in/avirajwalunj/">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href="https://github.com/avirajwalunj">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href="mailto:walunjaviraj123@yoursite.com">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="mailto:walunjaviraj123@yoursite.com">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                      name="name"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                      type="text"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      name="phone"
                      value={phone}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 "
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    name="email"
                    value={email}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 "
                    type="text"
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    name="subject"
                    value={subject}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 "
                    rows="10"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    name="message"
                    value={message}
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 ">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5] " size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
