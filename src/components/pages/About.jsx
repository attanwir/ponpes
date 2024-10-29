import React, { useEffect } from "react";
import Footer from "../layouts/Footer";
import PageLayout from "../layouts/PageLayout";
import Navbar from "./../layouts/Navbar";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <Navbar />
      <div className="pb-16 pt-32">
        <div className="about-title mb-20 text-center">
          <h2 className="small-title text-base font-bold text-primary md:text-lg lg:text-xl">
            Tentang Pondok
          </h2>
          <h1 className="big-title header-underline text-2xl font-semibold uppercase !leading-snug tracking-tight text-dark dark:text-light md:text-3xl xl:text-4xl">
            Pondok Pesantren <br className="md:hidden" />
            At-Tanwir
          </h1>
        </div>
        <div className="about-content px-6 md:px-20 lg:px-40 xl:px-60">
          <div className="profile text-content mb-20 space-y-5 text-justify indent-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 lg:text-base">
            <p>
              Pondok Pesantren At-tanwir Samarinda adalah lembaga pendidikan
              Islam yang fokus di bidang pendidikan ilmu syari&apos;at agama
              Islam. berdasarkan Manhaj Ahlus Sunnah Wal Jama&apos;ah, yang
              dalam fiqih bermadzhab Asy Syafi&apos;i, dalam Aqidah menganut apa
              yang dirumuskan oleh Al Imam Abul Hasan Al Asy&apos;ari, dalam
              Tasawwuf menempuh jalan dan Thariqah Al &apos;Alawiyah yang
              didirikan oleh Al Faqih Al Muqaddam Muhammad Bin Ali
              Ba&apos;alawi.
            </p>
            <p>
              Pondok Pesantren At-Tanwir mengajarkan Al Qur&apos;an dan Tajwid
              serta Tafsir dan disiplin-disiplin ilmu yang berkaitan dengan Al
              Qur&apos;an mengajarkan Ilmu Hadits Riwayah dan Diroyah,
              mengajarkan Ilmu Bahasa Arab dan limu Alat lainnya, mengajarkan
              limu Fiqh dari Madzhab Al Imam Muhammad Bin Idris Asy
              Syafi&apos;i, Sirah Nabi Muhammad SAW dan Ilmu Sejarah, Ilmu
              Tasawwuf dan banyak lagi disiplin Ilmu lainnya.
            </p>
            <p>
              Pondok Pesantren At-Tanwir juga mendidik para santri untuk
              berdakwah dan mengajar, serta menekankan pentingnya upaya bersuci
              jiwa dan hati, sebagaimana penekanan utama kepada Akhlaq mulia dan
              berkasih sayang kepada sekalian makhluq Allah serta menebar cinta
              dan rahmat terjemah nyata dari Islam yang Rahmatan Lil Alamin
            </p>
          </div>
          <div className="visi-misi space-y-12 md:space-y-6 md:px-10 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:space-y-0 xl:px-20">
            <div className="visi rounded-lg border border-tertiary bg-primary dark:border-neutral-700 dark:bg-neutral-900">
              <div className="visi-title border-b border-tertiary px-4 py-3 text-center dark:border-neutral-700">
                <h2 className="text-xl font-bold text-light dark:text-primary">
                  Visi Pondok Pesantren
                  <br className="hidden lg:max-2xl:block" /> At-Tanwir
                </h2>
              </div>
              <div className="visi-content px-5 py-6">
                <p className="text-justify text-sm text-light dark:text-neutral-400 lg:text-base">
                  Menjadi lembaga pendidikan islam dalam pemantapan ilmu,
                  akhlak, dan dakwah
                </p>
              </div>
            </div>
            <div className="misi rounded-lg border border-tertiary bg-primary dark:border-neutral-700 dark:bg-neutral-900">
              <div className="misi-title border-b border-tertiary px-4 py-3 text-center dark:border-neutral-700">
                <h2 className="text-xl font-bold text-light dark:text-primary">
                  Misi Pondok Pesantren
                  <br className="hidden lg:max-2xl:block" /> At-Tanwir
                </h2>
              </div>
              <div className="misi-content px-5 py-6">
                <ol className="list-decimal space-y-3 pl-5 text-justify text-sm leading-relaxed text-light dark:text-neutral-400 lg:text-base">
                  <li>
                    Membekali santri dengan berbagai disiplin ilmu pengetahuan
                    agama islam.
                  </li>
                  <li>
                    Membentuk karakter santri berakhlak mulia berwawasan luas
                    dan menjadi teladan bagi masyarakat luas.
                  </li>
                  <li>
                    Mempersiapkan para pewaris Nabi dan Rasul dalam melanjutkan
                    syiar dan dakwah.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageLayout>
  );
}

export default About;
