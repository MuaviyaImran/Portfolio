"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (formData.name.trim() === "") {
      formValid = false;
      newErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      formValid = false;
      newErrors.email = "Email is required";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)
    ) {
      formValid = false;
      newErrors.email = "Invalid email format";
    }

    if (formData.message.trim() === "") {
      formValid = false;
      newErrors.message = "Message is required";
    }

    if (formValid) {
      // Submit the form or perform other actions here
    } else {
      setErrors(newErrors);
    }
  };
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const sub = () => {
    axios
      .post(
        process.env.NEXT_PUBLIC_FORM_ENDPOINT,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        { headers: { Accept: "application/json" } }
      )
      .then((response) => {
        if (response.status === 200) {
          Swal.fire("Success!", "Form has been submitted", "success").then(
            () => {
              resetForm();
              window.location.reload();
            }
          );
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <section id="contact-me" className="">
      <div className="grid justify-center">
        <h1 className="text-center font-extrabold text-[22px] md:text-[28px] lg:text-[32px] md:mt-6 lg:mt-10 mt-3 md:mb-6 mb-0 lg:mb-12  py-2 px-4 text-black border border-gray-600 w-fit rounded-xl">
          Contact Me
        </h1>
      </div>
      <div className="lg:grid lg:grid-cols-3 mx-7">
        <div className="col-span-2 md:mt-10 mt-0">
          <form
            action="https://getform.io/f/4b04c959-c718-4a67-aae6-5fcbe4a48ae0"
            method="POST"
            onSubmit={handleSubmit}
            className="w-[80%] mt-20 px-8 border-4 border-[#56555D] py-10 rounded-2xl
            bg-gray-400  bg-clip-padding backdrop-blur-sm bg-opacity-10"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                onChange={handleChange}
                name="name"
                className="mt-1 p-2 border w-full rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                onChange={handleChange}
                id="email"
                name="email"
                className="mt-1 p-2 border w-full rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 border w-full rounded-md"
                required
              ></textarea>
            </div>
            <div className="grid justify-center">
              <button
                type="submit"
                onClick={sub}
                className="bg-[#4842BF] text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-1 grid items-center justify-center ">
          <img
            src="./Saly-14.png"
            alt="Illustration"
            className="hover:animate-bounce"
          />
        </div>
      </div>
    </section>
  );
}
