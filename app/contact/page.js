import React from "react";

import { Button, Input } from "@/app/components/elements";
 
const Contacts = () => {
  return (
    <section>
      <div className="md:text-center text-white bg-primary-white  px-4 ">
        <h1 className="font-semibold text-4xl md:text-5xl">Get In Touch</h1>
        <p className="pt-[14px] pb-[84px] text-lg md:text-xl ">
          You’re making the right decision to build your next innovation with
          us.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[123px] pb-10    px-4 md:px-[120.5px] xl:px-[160px]">
        <form action="" className="grid gap-4">
          <Input
            type="text"
            label={"Name"}
            labelClass={`text-lg text-white font-semibold`}
            name={"name"}
            coverClass={"mt-4"}
            placeholder={"Enter name"}
          />
          <Input
            type="email"
            label={"Email"}
            labelClass={`text-lg text-white font-semibold`}
            name={"email"}
            coverClass={"mt-4"}
            placeholder={"Enter email"}
          />

          <div>
            <label
              htmlFor=""
              className="text-lg text-white font-semibold block mb-4"
            >
              Description
            </label>
            <textarea
              rows={5}
              cols={5}
              className="w-full  bg-transparent pl-1 text-white outline-none p-[0.75rem] border rounded-[0.27rem]"
              placeholder="Enter Description"
            />
          </div>
          <Button type="submit" className="mt-6 text-white  py-3">
            Send Message
          </Button>
        </form>

        <div className="text-[18px] text-white">
          <h5 className="font-semibold mb-4">Office Address</h5>
          <p className="mb-6">
            246 Obiwali Road Nkpolu Rumuigbo, Port Harcourt Rivers State,
            Nigeria
          </p>

          <h5 className="font-semibold mb-4">Contact Information</h5>
          <p>
            <b>Phone:</b> (+234) 802 979 4667 <br />
            <b>Fax:</b> (+234) 703 295 1044 <br />
            <b>Email:</b> holla@helixgade.com <br />
          </p>
        </div>
      </section>
    </section>
  );
};

export default Contacts;
