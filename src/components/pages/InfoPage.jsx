import React, { useEffect } from "react";
import Footer from "../layouts/Footer";
import PageLayout from "../layouts/PageLayout";
import Navbar from "../layouts/Navbar";
import { Info } from "../icons/infoIcons";

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <Navbar />
      <div className="pb-16 pt-32">
        <div className="information-title mb-20 text-center">
          <h2 className="small-title text-base font-bold text-primary md:text-lg lg:text-xl">
            Informasi Pondok
          </h2>
          <h1 className="big-title header-underline text-2xl font-semibold !leading-snug tracking-tight text-dark dark:text-light md:text-3xl xl:text-4xl">
            Informasi Pendaftaran <br className="md:hidden" />
            Santri Baru
          </h1>
        </div>
        <div className="information-content space-y-10 px-4 md:px-20 lg:px-40">
          <div className="common-requirement">
            <div className="requirement-title mb-3 flex items-center gap-5">
              <div className="inline-flex size-7 items-center justify-center">
                <Info className="fill-primary" />
              </div>
              <h2 className="text-lg font-extrabold text-primary">
                Syarat - Syarat Umum
              </h2>
            </div>
            <div className="requirement-content space-y-4 text-neutral-700 dark:text-neutral-400">
              <div className="registration-completeness">
                <div className="content-title">
                  <h3 className="text-lg font-semibold">
                    Kelengkapan Pendaftaran :
                  </h3>
                </div>
                <div className="content-text">
                  <ol className="list-decimal pl-8 leading-relaxed">
                    <li>Mengisi formulir pendaftaran</li>
                    <li>Membayar biaya masuk pesantren</li>
                    <li>
                      Menyerahkan berkas kelengkapan data :
                      <ul className="list-disc pl-5">
                        <li>Foto copy kartu keluarga (2 lembar)</li>
                        <li>Foto copy KTP orang tua (2 lembar)</li>
                        <li>Foto copy ijazah terakhir (2 lembar)</li>
                        <li>Pas photo santri 3x4 (4 lembar)</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="registration-cost">
                <div className="content-title">
                  <h3 className="text-lg font-semibold">Biaya Pendaftaran :</h3>
                </div>
                <div className="content-text">
                  <ol className="list-decimal pl-8 leading-relaxed">
                    <li>
                      Biaya pendaftaran Rp. 6.500.000 sudah termasuk :
                      <ul className="list-disc pl-5">
                        <li>
                          Uang gedung, lemari, kasur, bantal, baju seragam, dan
                          kitab-kitab semester awal
                        </li>
                      </ul>
                    </li>
                    <li>
                      Uang bulanan Rp. 650.000 sudah termasuk :
                      <ul className="list-disc pl-5">
                        <li>Uang SPP dan uang makan</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="entering-requirement">
            <div className="requirement-title mb-3 flex items-center gap-5">
              <div className="inline-flex size-7 items-center justify-center">
                <Info className="fill-primary" />
              </div>
              <h2 className="text-lg font-extrabold text-primary">
                Perlengkapan
              </h2>
            </div>
            <div className="requirement-content space-y-4 text-neutral-700 dark:text-neutral-400">
              <div className="personal-completeness">
                <div className="content-title">
                  <h3 className="text-lg font-semibold">
                    Setiap Santri Harus Membawa :
                  </h3>
                </div>
                <div className="content-text">
                  <ol className="list-decimal pl-8 leading-relaxed">
                    <li>Baju taqwa</li>
                    <li>Baju gamis</li>
                    <li>Kopyah putih</li>
                    <li>Sarung</li>
                    <li>Baju kaos</li>
                    <li>Celana training</li>
                    <li>Perlengkapan belajar / ATK</li>
                    <li>Perlengkapan mandi (Handuk, sabun, dsb.)</li>
                  </ol>
                </div>
              </div>
              <div>
                <div className="content-title">
                  <h3 className="text-lg font-semibold uppercase">Catatan</h3>
                </div>
                <ul className="list-disc text-balance pl-5">
                  <li>
                    Lemari, kasur, dan bantal sudah disediakan oleh pesantren
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="schedule-activity">
            <div className="schedule-title mb-5 flex items-center gap-5">
              <div className="inline-flex size-7 items-center justify-center">
                <Info className="fill-primary" />
              </div>
              <h2 className="text-lg font-extrabold text-primary">
                Jadwal Kegiatan Pondok
              </h2>
            </div>
            <div className="schedule-content space-y-4 text-neutral-400 md:px-10">
              <div className="flex w-full table-auto justify-center rounded-lg border border-neutral-700 bg-dark py-1 text-center dark:bg-neutral-900">
                <table className="md:w-full">
                  <thead>
                    <tr>
                      <th className="table-head">No.</th>
                      <th className="table-head">Waktu</th>
                      <th className="table-head">Kegiatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="table-body">1.</td>
                      <td className="table-body">04:30 - 05:30</td>
                      <td className="table-body">
                        Sholat Subuh Berjamaah Dan Wirid
                      </td>
                    </tr>
                    <tr>
                      <td className="table-body">2.</td>
                      <td className="table-body">05:30 - 8:30</td>
                      <td className="table-body">Ta&apos;lim</td>
                    </tr>
                    <tr>
                      <td className="table-body">3.</td>
                      <td className="table-body">08:30 - 12:00</td>
                      <td className="table-body">Sarapan Dan Istirahat</td>
                    </tr>
                    <tr>
                      <td className="table-body">4.</td>
                      <td className="table-body">12:00 - 12:30</td>
                      <td className="table-body">
                        Sholat Dzuhur Berjamaah Dan Wirid
                      </td>
                    </tr>
                    <tr>
                      <td className="table-body">5.</td>
                      <td className="table-body">12:30 - 13:15</td>
                      <td className="table-body">Hizb Al-Quran</td>
                    </tr>
                    <tr>
                      <td className="table-body">6.</td>
                      <td className="table-body">13:15 - 15:15</td>
                      <td className="table-body">Istirahat</td>
                    </tr>
                    <tr>
                      <td className="table-body">7.</td>
                      <td className="table-body">15:15 - 15:45</td>
                      <td className="table-body">
                        Sholat Ashar Berjamaah Dan Wirid
                      </td>
                    </tr>
                    <tr>
                      <td className="table-body">8.</td>
                      <td className="table-body">15:45 - 16:30</td>
                      <td className="table-body">Rouhah</td>
                    </tr>
                    <tr>
                      <td className="table-body">9.</td>
                      <td className="table-body">16:30 - 18:00</td>
                      <td className="table-body">Istirahat</td>
                    </tr>
                    <tr>
                      <td className="table-body">10.</td>
                      <td className="table-body">18:00 - 18:30</td>
                      <td className="table-body">Sholat Maghrib Berjamaah</td>
                    </tr>
                    <tr>
                      <td className="table-body">11.</td>
                      <td className="table-body">18:30 - 19:15</td>
                      <td className="table-body">Ta&apos;lim</td>
                    </tr>
                    <tr>
                      <td className="table-body">12.</td>
                      <td className="table-body">19:15 - 20:00</td>
                      <td className="table-body">
                        Sholat Isya Berjamaah Dan Wirid
                      </td>
                    </tr>
                    <tr>
                      <td className="table-body">13.</td>
                      <td className="table-body">20:00 - 21:00</td>
                      <td className="table-body">Makan Malam</td>
                    </tr>
                    <tr>
                      <td className="table-body">14.</td>
                      <td className="table-body">21:00 - 22:00</td>
                      <td className="table-body">Muthola&apos;ah</td>
                    </tr>
                    <tr>
                      <td className="table-body">15.</td>
                      <td className="table-body">22:00</td>
                      <td className="table-body">Tidur Malam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageLayout>
  );
}

export default Gallery;
