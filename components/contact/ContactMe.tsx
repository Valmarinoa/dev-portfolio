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
      <h3 className="absolute top-24 md:top-16 pl-5 uppercase text-[#140e2c] tracking-[10px] md:tracking-[20px] text-xl text-center">
        Lets talk!
      </h3>
      <div className="flex flex-col space-y-4 my-5">
        {/* <h4 className="text-4xl font-semibold text-center">
          <div className="decortaion-white/50 underline">Let's talk!</div>
        </h4> */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className=" h-4 w-4 animate-pulse " />
            <p>+31648664605</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className=" h-4 w-4 animate-pulse " />
            <p>valenmarinocol@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className=" h-4 w-4 animate-pulse " />
            <p>Amsterdam, NL</p>
          </div>

          <form
            onSubmit={onSubmit}
            className="flex flex-col space-y-2 md:mx-auto pt-4 w-80 md:w-[420px] mx-0"
          >
            <div className="flex flex-col space-y-2">
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
              className="contact-input w-full"
              type="text"
            />
            <textarea
              placeholder="Message"
              {...register("message")}
              className="contact-input md:h-48 h-32"
            />
            <button className="border-[1px] w-fit mx-auto px-8 py-3 rounded-sm shadow-indigo-200 shadow-sm hover:shadow-lg transition-all hover:shadow-indigo-400">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
