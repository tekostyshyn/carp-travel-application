"use client";

import { useForm } from "react-hook-form";
import FormError from "./FormError";

const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex sm:flex-col md:flex-row lg:flex-col md:gap-[20px] lg:gap-[40px] lg:w-[607px] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="md:w-[221px] lg:w-full lg:flex lg:gap-[20px] shrink-0">
        <div className="w-full">
          <label htmlFor="name" className="label">
            Full name
          </label>
          <div className="relative h-[24px] w-full sm:mb-[25px] md:mb-[28px] lg:mb-0">
            <input
              type="text"
              id="name"
              className="input"
              placeholder="John Smith"
              {...register("fullName", {
                required: true,
                minLength: 3,
                pattern: /^[A-Za-z0-9]+\s+[A-Za-z0-9]+$/,
              })}
            />
            {errors.fullName && <FormError error="Incorrect name" />}
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="email" className="label">
            E-mail
          </label>
          <div className="relative h-[24px] w-full mb-[25px] lg:mb-0">
            <input
              type="email"
              id="email"
              className="input"
              placeholder="johnsmith@email.com"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && <FormError error="Invalid email" />}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea id="message" className="textarea" {...register("message")}></textarea>
        <button type="submit" className="form_button">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactsForm;
