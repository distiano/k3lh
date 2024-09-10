'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { EB_Garamond, Montserrat } from 'next/font/google';
import { IoMdArrowForward, IoIosArrowDown } from 'react-icons/io';

const ebgaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const Layanan = () => {
  return (
    <>
      <Navbar />
      <section className="mt-12 lg:mt-16 drop-shadow-lg">
        <img src="/images/subheader-k3lh.png" className="object-cover" />
      </section>

      <section className="py-10 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-4">
          <div className="p-6 lg:p-16 bg-[#A8D045] rounded-b-lg lg:rounded-e-lg">
            <h1 className={`${ebgaramond.className} text-3xl lg:text-6xl text-center lg:text-start font-extrabold`}>
              <span className="text-[#007A35]">Layanan</span> Kami
            </h1>
            <p className={`${montserrat.className}  py-8`}>Kami memberikan solusi K3LH komprehensif yang disesuaikan dengan kebutuhan spesifik setiap klien, menumbuhkan budaya keselamatan, dan meningkatkan produktivitas tempat kerja.</p>
            <h4 className={`${montserrat.className} text-[#007A35] text-xl lg:text-2xl font-semibold`}>PT Sukses K3LH Indonesia</h4>
          </div>
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-4 px-6 lg:px-0">
              <div
                className={`relative rounded-xl flex items-end p-3 lg:p-4 h-[250px] lg:h-[400px] transition-all duration-300 ease-in-out`}
                style={{ backgroundImage: "url('/images/Layanan 11.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-xl"></div>

                <div className={`${montserrat.className} relative z-10`}>
                  <h1 className={`text-xl lg:text-lg font-bold text-white`}>Bimbingan K3LH (SHE Coaching)</h1>
                  <p className="mt-2 text-xs font-semibold text-white">Menyelenggarakan Bimbingan K3LH – Kesehatan, Keselamatan Kerja dan Lingkungan Hidup (Safety, Health and Environment Coaching) secara professional.</p>
                  <div className="px-10 mt-4">
                    <hr />
                  </div>
                  <div className="text-center text-white">
                    <p className=" text-xs mt-2">Baca Selanjutnya</p>
                    <button>
                      <IoIosArrowDown className="mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`relative rounded-xl flex items-end p-3 lg:p-4 h-[250px] lg:h-[400px] transition-all duration-300 ease-in-out`}
                style={{ backgroundImage: "url('/images/Layanan 22.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-xl"></div>

                <div className={`${montserrat.className} relative z-10`}>
                  <h1 className={`text-xl lg:text-lg font-bold text-white`}>Konsultansi K3LH (SHE Consultancy)</h1>
                  <p className="mt-2 text-xs font-semibold text-white">Menyelenggarakan Konsultasi K3LH – Kesehatan, Keselamatan Kerja dan Lingkungan Hidup (Safety, Health and Environment Consultancy) secara professional.</p>
                  <div className="px-10 mt-4">
                    <hr />
                  </div>
                  <div className="text-center text-white">
                    <p className=" text-xs mt-2">Baca Selanjutnya</p>
                    <button>
                      <IoIosArrowDown className="mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`relative rounded-xl flex items-end p-3 lg:p-4 h-[250px] lg:h-[400px] transition-all duration-300 ease-in-out`}
                style={{ backgroundImage: "url('/images/Layanan 33.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-xl"></div>

                <div className={`${montserrat.className} relative z-10`}>
                  <h1 className={`text-xl lg:text-lg font-bold text-white`}>Pelatihan K3 Online (Online S&H Training)</h1>
                  <p className="mt-2 text-xs font-semibold text-white">Menyelenggarakan Pelatihan Online K3LH – Kesehatan, Keselamatan Kerja dan Lingkungan Hidup (Safety, Health and Environment Coaching) secara professional.</p>
                  <div className="px-10 mt-4">
                    <hr />
                  </div>
                  <div className="text-center text-white">
                    <p className=" text-xs mt-2">Baca Selanjutnya</p>
                    <button>
                      <IoIosArrowDown className="mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`relative rounded-xl flex items-end p-3 lg:p-4 h-[250px] lg:h-[400px] transition-all duration-300 ease-in-out`}
                style={{ backgroundImage: "url('/images/Layanan 44.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-xl"></div>

                <div className={`${montserrat.className} relative z-10`}>
                  <h1 className={`text-xl lg:text-lg font-bold text-white`}>Pelatihan K3 Online (Online S&H Training)</h1>
                  <p className="mt-2 text-xs font-semibold text-white">Menyelenggarakan Pelatihan Online K3LH – Kesehatan, Keselamatan Kerja dan Lingkungan Hidup (Safety, Health and Environment Coaching) secara professional.</p>
                  <div className="px-10 mt-4">
                    <hr />
                  </div>
                  <div className="text-center text-white">
                    <p className=" text-xs mt-2">Baca Selanjutnya</p>
                    <button>
                      <IoIosArrowDown className="mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Layanan;
