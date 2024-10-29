import React, { useEffect } from "react";
import { Email, Location, Phone } from "../icons/contactIcons";
import Footer from "../layouts/Footer";
import PageLayout from "../layouts/PageLayout";
import Navbar from "./../layouts/Navbar";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <Navbar />
      <div className="pb-16 pt-32">
        <div className="flex flex-col items-center justify-center">
          <div className="contact-title mb-20 text-center">
            <h2 className="small-title text-base font-bold text-primary md:text-lg lg:text-xl">
              Kontak Pondok
            </h2>
            <h1 className="big-title header-underline text-2xl font-semibold uppercase !leading-snug tracking-tight text-dark dark:text-light md:text-3xl xl:text-4xl">
              Pondok Pesantren <br className="md:hidden" />
              At-Tanwir
            </h1>
          </div>
          <div className="contact-content flex flex-col items-center justify-center px-6 md:flex-row md:px-14 lg:px-24">
            <div className="content-info mb-12 w-96 space-y-5 md:mb-0 md:flex md:w-1/2 md:flex-col md:items-baseline md:justify-between md:gap-y-10 lg:gap-y-16">
              <div className="info-phone flex flex-row items-center gap-4">
                <div className="phone-icon flex size-16 shrink-0 items-center justify-center rounded-md border-2 border-primary bg-primary shadow-md dark:bg-transparent lg:size-20">
                  <Phone className="size-1/2 text-light dark:text-primary" />
                </div>
                <div className="phone-text text-sm capitalize text-stone-600 dark:text-stone-400 lg:text-base">
                  <p>0812 3456 789 - Ust. Ali Bin Syihab</p>
                  <p>0898 7654 321 - Ust. Dzulkifli</p>
                  <p>0856 7891 234 - Ust. Ahmad Thohir</p>
                </div>
              </div>
              <div className="info-email flex flex-row items-center gap-4">
                <div className="email-icon flex size-16 shrink-0 items-center justify-center rounded-md border-2 border-primary bg-primary shadow-md dark:bg-transparent lg:size-20">
                  <Email className="size-1/2 text-light dark:text-primary" />
                </div>
                <div className="email-text text-sm text-stone-600 dark:text-stone-400 lg:text-base">
                  <p>ponpesattanwir@example.com</p>
                </div>
              </div>
              <div className="info-location flex flex-row items-center gap-4">
                <div className="location-icon flex size-16 shrink-0 items-center justify-center rounded-md border-2 border-primary bg-primary shadow-md dark:bg-transparent lg:size-20">
                  <Location className="size-1/2 text-light dark:text-primary" />
                </div>
                <div className="location-text text-sm text-stone-600 dark:text-stone-400 lg:text-base">
                  <p className="text-balance">
                    Jalan Sendawar RT. 02, Loa Buah, Kec. Sungai Kunjang, Kota
                    Samarinda, Kalimantan Timur 75391
                  </p>
                </div>
              </div>
            </div>
            <div className="content-map flex w-96 justify-center overflow-hidden rounded-xl border border-dark shadow-md dark:border-light md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6320479306073!2d117.07303137472354!3d-0.553652199440922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df68735eb64a58f%3A0x13a500977e723611!2sPondok%20Pesantren%20At%20Tanwir!5e0!3m2!1sid!2sid!4v1729845392642!5m2!1sid!2sid"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-square w-full md:aspect-[9/7]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageLayout>
  );
}

export default Contact;
