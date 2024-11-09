// components/ContactForm.js
"use client"; // Add this directive

import { useState } from "react";
import { Button, Input } from "@/app/components/elements";
import Image from "next/image";
import { github, linkedin, twitter } from "@/public/assets/icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });

   // Clear the error for the current field
   if (value.trim()) {
     setErrors((prevErrors) => {
       const newErrors = { ...prevErrors };
       delete newErrors[name];
       return newErrors;
     });
   }
 };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.service) newErrors.service = "Service selection is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const { name, email, service, message } = formData;
      const subject = `Contact Request: ${service}`;
      const body = `
Hello,

My name is ${name}. I am interested in your services and would like to discuss further. 

${message}

Looking forward to your response.

Best regards,
${name},
${email}.
`;

      const mailtoLink = `mailto:inyangjohnson01@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <div className=" ">
      <div className=" w-full lg:flex gap-10 lg:justify-between">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            LET'S BUILD GREAT THINGS <span className="">TOGETHER</span>
          </h1>
          <p className="mb-6">
            I'm here to bring the best out of your frontend applications.
          </p>
          <div className="space-y-2">
            <p>- inyangjohnson01@gmail.com</p>
            <p>- (+234) 816 265 9076</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/inyangj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={github}
                  alt="GitHub"
                  className="w-6 h-6 rounded-full cursor-pointer"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/inyangjohnson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-6 h-6 rounded-full cursor-pointer"
                />
              </a>
              <a
                href="https://twitter.com/inyangjohnson01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={twitter}
                  alt="Twitter"
                  className="w-6 h-6 rounded-full cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-blue-500 rounded bg-transparent outline-none focus:outline-none"
                placeholder="Please enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-blue-500 rounded bg-transparent outline-none focus:outline-none"
                placeholder="Please enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block mb-2">Choose a service</label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`px-4 py-2 border rounded-xl ${
                    formData.service === "hiring"
                      ? "bg-blue-500 text-white"
                      : "bg-transparent border-blue-500 text-blue-500"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, service: "hiring" })
                  }
                >
                  Hiring
                </button>
                {/* <button
                  type="button"
                  className={`px-4 py-2 border rounded-xl ${
                    formData.service === "tutoring"
                      ? "bg-blue-500 text-white"
                      : "bg-transparent border-blue-500 text-blue-500"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, service: "tutoring" })
                  }
                >
                  Tutoring
                </button> */}
                <button
                  type="button"
                  className={`px-4 py-2 border rounded-xl ${
                    formData.service === "collaboration"
                      ? "bg-blue-500 text-white"
                      : "bg-transparent border-blue-500 text-blue-500"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, service: "collaboration" })
                  }
                >
                  Collaboration
                </button>
              </div>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Add a Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-blue-500 rounded bg-transparent outline-none focus:outline-none"
                placeholder="Hi, inyang. I'm hiring for the role of a frontend developer"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full  text-white py-3 px-4 rounded"
            >
              Get in Touch
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
