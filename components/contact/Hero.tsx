"use client";
import { manrope } from "lib/util/get-class";
import clsx from "clsx";
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

type Props = {};

const Hero: React.FC<Props> = (props) => {
  return (
    <div
      className={clsx(
        manrope,
        "text-secondary-white text-hero-primary-para",
        "space-y-12 mb-12"
      )}
    ></div>
  );
};

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, project, message });
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading text-4xl font-bold text-center text-white mb-6 hover:text-yellow-300 transition duration-300">
    <span className="text-yellow-500">contact</span> me
</h1>

      <div className="flex items-center justify-center flex-wrap">
        <div className="flex-1 min-w-[30rem] p-16 pb-0">
          <h3 className="text-3xl uppercase text-yellow-500 pb-8">contact info</h3>
          <div className="info">
            <h3 className="flex items-center text-2xl text-gray-300 py-4 font-normal">
              <FaEnvelope className="text-yellow-500 mr-2" size={24} />{" "}
              m.muhammad.ahmed115@gmail.com
            </h3>
            <h3 className="flex items-center text-2xl text-gray-300 py-4 font-normal">
              <FaPhone className="text-yellow-500 mr-2" size={24} />{" "}
              +123-456-7890
            </h3>
            <h3 className="flex items-center text-2xl text-gray-300 py-4 font-normal">
              <FaPhone className="text-yellow-500 mr-2" size={24} />{" "}
              +111-222-3333
            </h3>
            <h3 className="flex items-center text-2xl text-gray-300 py-4 font-normal">
              <FaMapMarkerAlt className="text-yellow-500 mr-2" size={24} />{" "}
              Karachi, Pakistan - 75200
            </h3>
          </div>
        </div>
        <form
          className="flex-1 min-w-[45rem] p-8 m-8 mb-16"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="name"
            className="box p-6 mb-4 bg-[#3333] text-white text-lg w-full placeholder:capitalize"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            className="box p-6 mb-4 bg-[#3333] text-white text-lg w-full placeholder:capitalize"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="project"
            className="box p-6 mb-4 bg-[#3333] text-white text-lg w-full placeholder:capitalize"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
          <textarea
            cols={30}
            rows={10}
            className="box p-6 mb-4 bg-[#3333] text-white text-lg w-full resize-none"
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="btn bg-yellow-500 text-white p-4 rounded"
          >
            send <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export { Hero, Contact };
