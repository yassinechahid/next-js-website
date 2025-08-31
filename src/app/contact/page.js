import React from "react";

import ContactCard from "../../components/ContactCardMain";
import ContactCardCustom from "../../components/ContactCardCustom";

import contactPhone from "../../../public/assets/pictures/contactPhone.svg";
import contactMail from "../../../public/assets/pictures/contactMail.svg";
import contactMedia from "../../../public/assets/pictures/contactMedia.svg";

import icon_1 from "../../../public/assets/pictures/roundFacebook.svg";
import icon_2 from "../../../public/assets/pictures/instagramLine.svg";
import icon_3 from "../../../public/assets/pictures/primeTwitter.svg";

export default function Contact() {
  return (
    <article className="flex px-5 bg-light-background justify-center pt-24">
      <main className="flex flex-col justify-center w-[1040px] pb-28 gap-16 bg-light-background ">
        {/*Contact section*/}
        <section className="flex flex-col gap-2 sm:px-14 md:px-32 lg:px-0">
          <span className="font-roboto font-normal text-headline-large text-light-primary">
            Contact
          </span>
          <span className="font-roboto font-normal text-body-large text-light-on-surface-variant">
            Pour toute question ou suggestion, contactez-nous. Notre équipe est
            là pour vous aider.
          </span>
        </section>

        {/*Main section*/}
        <section className="flex flex-col gap-28 lg:flex-row lg:justify-between">
          {/*Phone section*/}
          <section className="flex w-full flex-col gap-4 sm:px-14 md:px-32 lg:px-0">
            <ContactCard
              title="Téléphone"
              info="+212 452 365 856"
              image={contactPhone}
              alt="image téléphone"
            />

            <ContactCard
              title="Email"
              info="Info@montoubib.com"
              image={contactMail}
              alt="image téléphone"
            />

            <ContactCardCustom
              title="Suivez-nous sur"
              icon1={icon_1}
              icon2={icon_2}
              icon3={icon_3}
              image={contactMedia}
              alt="image téléphone"
            />
          </section>

          {/*Form section*/}
          <section className="flex w-full flex-col gap-6 sm:px-14 md:px-24 lg:px-0">
            <form className="flex flex-col gap-6">
              <input
                className="rounded-[4px] h-14 py-1 px-4 bg-light-surface-container-highest placeholder-blue-gray-900"
                type="text"
                name={""}
                placeholder="Nom"
                onChange={"handleChange"}
              />
              <input
                className="rounded-[4px] h-14 py-1 px-4 bg-light-surface-container-highest placeholder-blue-gray-900"
                type="text"
                name={""}
                placeholder="Prénom"
                onChange={"handleChange"}
              />
              <input
                className="rounded-[4px] h-14 py-1 px-4 bg-light-surface-container-highest placeholder-blue-gray-900"
                type="text"
                name={""}
                placeholder="Email"
                onChange={"handleChange"}
              />
              <input
                className="rounded-[4px] h-14 py-1 px-4 bg-light-surface-container-highest placeholder-blue-gray-900"
                type="text"
                name={""}
                placeholder="Téléphone"
                onChange={"handleChange"}
              />
              <input
                className="rounded-[4px] h-14 py-1 px-4 bg-light-surface-container-highest placeholder-blue-gray-900"
                type="text"
                name={""}
                placeholder="Sujet"
                onChange={"handleChange"}
              />
              <textarea
                className="rounded-[4px] pt-5 h-52 py-1 px-4 bg-light-surface-container-highest placeholder-blue-gray-900"
                type="text"
                name={""}
                placeholder="Message"
                onChange={"handleChange"}
              />
            </form>
            <button className="rounded-full h-10 gap-2 bg-light-primary">
              Envoyer
            </button>
          </section>
        </section>
      </main>
    </article>
  );
}
