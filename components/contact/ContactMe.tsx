import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

type Props = {};

type FormData = {
  email: string;
  name: string;
  message: string;
  subject: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    window.location.href = `mailto:valenmarinocol@gmail?subject='${data.subject}&body=${data.name}. ${data.message} (${data.email})`;
    console.log(data);
  });

  return (
    <div className="h-screen flex justify-evenly px-10 pt-20 max-w-7xl mx-auto relative text-center md:text-left md:flex-row items-center ">
      <h3 className="absolute top-24 uppercase text-[#F1FAEE] tracking-[20px] text-2xl text-center">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-4">
        <h4 className="text-4xl font-semibold text-center">
          <div className="decortaion-white/50 underline">Let's talk!</div>
        </h4>
        <div className="space-y-2">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className=" h-7 w-7 animate-pulse " />
            <p>+31648664605</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className=" h-7 w-7 animate-pulse " />
            <p>valenmarinocol@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className=" h-7 w-7 animate-pulse " />
            <p>Amsterdam, NL</p>
          </div>

          <form
            onSubmit={onSubmit}
            className="flex flex-col space-y-2 w-fit mx-auto pt-4"
          >
            <div className="flex space-x-2">
              <input
                placeholder="Name"
                {...register("name")}
                className="contact-input"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contact-input"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contact-input"
              type="text"
            />
            <textarea
              placeholder="Message"
              {...register("message")}
              className="contact-input"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
