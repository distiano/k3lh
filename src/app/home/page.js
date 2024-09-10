'use client';

import { EB_Garamond, Montserrat } from 'next/font/google';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { IoMdArrowForward, IoIosArrowDown } from 'react-icons/io';
import { FaStar, FaThumbsUp, FaMedal, FaUserTie, FaWhatsapp } from 'react-icons/fa'; // Example icons from react-icons
import Footer from '@/components/Footer';
import Carousel from '@/components/Swiper';

const ebgaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const services = [
  {
    backgroundImage: '/images/Layanan 11.png',
    title: 'Pelatihan K3LH (SHE Training)',
    description: 'Menyelenggarakan Pelatihan K3LH – Kesehatan, Keselamatan Kerja dan Lingkungan Hidup (Safety, Health and Environment Training) secara professional.',
  },
  {
    backgroundImage: '/images/Layanan 22.png',
    title: 'Bimbingan K3LH (SHE Coaching)',
    description: 'Menyelenggarakan Bimbingan K3LH – Kesehatan, Keselamatan Kerja dan Lingkungan Hidup (Safety, Health and Environment Coaching) secara professional.',
  },
  {
    backgroundImage: '/images/Layanan 33.png',
    title: 'Konsultansi K3LH (SHE Consultancy)',
    description: 'Menyelenggarakan Konsultasi K3LH – Kesehatan, Keselamatan Kerja dan Lingkungan Hidup (Safety, Health and Environment Consultancy) secara professional.',
  },
  {
    backgroundImage: '/images/Layanan 44.png',
    title: 'Pelatihan K3 Online (Online S&H Training)',
    description: 'Menyelenggarakan Pelatihan Online K3LH – Kesehatan, Keselamatan Kerja dan Lingkungan Hidup (Safety, Health and Environment Coaching) secara professional.',
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <section
        className="py-16"
        style={{
          backgroundImage: "url('/images/Rectangle 20.png')",
          backgroundSize: '',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
        }}
      >
        <div className="text-center">
          <h1 className={`${ebgaramond.className} text-2xl md:text-3xl lg:text-5xl font-bold`}>
            <span className="text-[#A8D045]">Tentang</span> Kami
          </h1>
        </div>
        <div className="md:flex items-center gap-16 p-8 lg:p-12">
          <div className="">
            <Image src="/images/Rectangle 3.png" alt="Tentang Kami" width={1800} height={1800} />
          </div>
          <div className="mt-6">
            <h2 className={`${ebgaramond.className} text-[#007A35] text-3xl lg:text-6xl font-bold`}>PT Sukses K3LH Indonesia</h2>
            <p className={`${montserrat.className} mt-6 font-medium text-base lg:text-lg`}>
              PT Sukses K3LH Indonesia lembaga/organisasi yang bergerak dalam bidang Pelatihan (Training), Bimbingan (Coaching), Konsultansi (Consultancy) dan jasa K3LH Lainnya serta sangat peduli dengan permasalahan/tantangan K3LH
              (Keselamatan dan Kesehatan Kerja serta Lingkungan Hidup) di Indonesia.
            </p>
            <div className="flex lg:flex-1 lg:justify-end mt-6">
              <Link
                href="/profil"
                className={`${montserrat.className} flex items-center gap-2 bg-white px-5 py-3 rounded-full text-base font-medium leading-6  text-center hover:bg-[#007A35] hover:text-white transition duration-300 ease-in-out`}
              >
                Baca Selengkapnya{' '}
                <span>
                  <IoMdArrowForward className="text-[#007A35] " />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className=""
        style={{
          backgroundImage: "url('/images/Group 12.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            {/* Left Side */}
            <div className="text-[#007A35] lg:text-white p-6 mt-10 lg:mt-0 lg:mb-10 md:mb-0 md:w-1/3">
              <h2 className={`${ebgaramond.className} text-2xl md:text-5xl font-bold`}>Kenapa Kami Pilihan Terbaik?</h2>
            </div>
            {/* Right Side */}
            <div className={`${montserrat.className} md:w-2/3 grid grid-cols-1 md:grid-cols-2 text-[#007A35] `}>
              {/* Professional Card */}
              <div className=" p-6 lg:px-24 flex flex-col items-center text-center">
                <FaUserTie className=" text-4xl mb-4" />
                <h3 className="text-xl font-bold">Profesional</h3>
                <p className="text-sm mt-2">Tim kami terdiri dari para profesional berkualifikasi tinggi dengan pengalaman luas di bidang kesehatan dan keselamatan kerja.</p>
              </div>
              {/* Experienced Card */}
              <div className=" p-6 lg:pe-36 flex flex-col items-center text-center">
                <FaMedal className=" text-4xl mb-4" />
                <h3 className="text-xl font-bold">Berpengalaman</h3>
                <p className="text-sm mt-2">Kami menawarkan solusi khusus yang disesuaikan dengan kebutuhan spesifik setiap klien.</p>
              </div>
              {/* Commitment Card */}
              <div className="p-6 lg:p-0 lg:py-6 lg:pe-36 flex flex-col items-center text-center">
                <FaStar className=" text-4xl mb-4" />
                <h3 className="text-xl font-bold">Komitmen</h3>
                <p className="text-sm mt-2">Kami berkomitmen terhadap keunggulan dalam segala hal yang kami lakukan.</p>
              </div>
              {/* Client Satisfaction Card */}
              <div className="p-6 lg:p-0 lg:py-6 lg:pe-52 flex flex-col items-center text-center">
                <FaThumbsUp className=" text-4xl mb-4" />
                <h3 className="text-xl font-bold">Kepuasan Klien</h3>
                <p className="text-sm mt-2">Kami menghargai komunikasi transparansi, dan kami selalu memprioritaskan kepentingan terbaik klien kami.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="text-center px-6 lg:px-48">
          <h1 className={`${ebgaramond.className} text-2xl lg:text-5xl font-bold`}>
            <span className="text-[#A8D045]">Layanan</span> Kami
          </h1>
          <p className={`${montserrat.className} text-xs lg:text-base mt-5 text-black`}>
            Kami memberikan solusi K3LH komprehensif yang disesuaikan dengan kebutuhan spesifik setiap klien, menumbuhkan budaya keselamatan, dan meningkatkan produktivitas tempat kerja.
          </p>
        </div>
        <div className="bg-[#f5f5f5] mt-10 py-10 ">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 px-10 gap-4">
            <div
              className={`relative rounded-xl flex items-end p-3 lg:p-4 h-[250px] lg:h-[450px] transition-all duration-300 ease-in-out`}
              style={{ backgroundImage: "url('/images/Layanan 11.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-xl"></div>

              <div className={`${montserrat.className} relative z-10`}>
                <h1 className={`text-xl lg:text-lg font-bold text-white`}>Pelatihan K3LH (SHE Training</h1>
                <p className="mt-2 text-xs font-semibold text-white">Menyelenggarakan Pelatihan K3LH – Kesehatan, Keselamatan Kerja dan Lingkungan Hidup (Safety, Health and Environment Training) secara professional</p>
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
              className={`relative rounded-xl flex items-end p-3 lg:p-4 h-[250px] lg:h-[450px] transition-all duration-300 ease-in-out`}
              style={{ backgroundImage: "url('/images/Layanan 22.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
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
              className={`relative rounded-xl flex items-end p-3 lg:p-4 h-[250px] lg:h-[450px] transition-all duration-300 ease-in-out`}
              style={{ backgroundImage: "url('/images/Layanan 33.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
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
              className={`relative rounded-xl flex items-end p-3 lg:p-4 h-[250px] lg:h-[450px] transition-all duration-300 ease-in-out`}
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
      </section>
      <section className="">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 items-center">
          <div className={`${montserrat.className} bg-[#007A35] p-8`}>
            <div className="flex justify-center">
              <Image src="/images/bgweb.png" alt="Tentang Kami" width={500} height={500} />
            </div>
            <h2 className="text-center text-white text-2xl lg:text-4xl font-extrabold py-4">DAFTAR SEKARANG!</h2>
            <p className="text-white text-sm lg:text-base">
              Kesempatan ini terbatas! Hanya untuk <b>36 orang! </b>Mari Bersama Berjaya di Dunia K3 Bersama <b>HSLC WARRIORS CAMP!</b> <i>Everything, Everywhere, All Matters!</i>
            </p>
            <div className=" flex justify-center  lg:flex-1 lg:justify-end mt-6">
              <Link
                href="https://wa.me/6285641064464"
                className={`${montserrat.className} flex items-center gap-2 bg-[#A8D045] px-3 py-1 rounded-lg text-sm font-medium leading-6  text-center hover:bg-[#007A35] hover:text-white transition duration-300 ease-in-out`}
              >
                Info lebih lengkap{' '}
                <span>
                  <IoMdArrowForward className="text-[#007A35] " />
                </span>
              </Link>
            </div>
          </div>
          <div className="pb-6 lg:pb-0">
            <div style={{ aspectRatio: '16/9' }} className="flex justify-center ">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/LuY3f978a-A?si=UvICxyH2ltDo8tgH"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full px-6 h-full"
              ></iframe>
            </div>{' '}
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: "url('/images/Group 13.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="py-10 lg:py-16"
      >
        <div className="flex justify-center items-center">
          <div className={`${montserrat.className} px-6 md:px-20 lg:px-48 xl:px-72 text-center lg:text-start`}>
            <h2 className="text-[#007A35] text-2xl lg:text-5xl font-bold">Konsultasi Bersama Kami</h2>
            <p>Siap untuk meningkatkan keselamatan di tempat kerja Anda? Hubungi kami hari ini untuk mempelajari lebih lanjut tentang layanan kami</p>
            <div className="flex justify-center lg:justify-normal lg:flex-1  mt-6 ">
              <Link
                href="https://wa.me/6285641064464"
                className={`${montserrat.className} flex items-center gap-2 text-white bg-[#1AAB50] px-4 py-2 rounded-lg text-sm font-medium leading-6  text-center hover:bg-[#007A35] hover:text-white transition duration-300 ease-in-out`}
              >
                Hubungi Kami{' '}
                <span>
                  <FaWhatsapp className="size-6" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <img src="/images/subheader-k3lh.png" className="object-cover" />
      </section>
      <section
        className="py-10"
        style={{
          backgroundImage: "url('/images/Rectangle 43.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <h1 className={`${ebgaramond.className} text-2xl lg:text-5xl font-bold`}>
            <span className="text-[#A8D045]">Informasi</span> dari Kami
          </h1>
        </div>
        <div className={`${montserrat.className} grid md:grid-cols-3 px-6 lg:px-16 gap-6 pt-10 lg:pt-28`}>
          <div className=" text-center">
            <img src="/images/Ellipse 3.png" className="mx-auto" />
            <div className="py-2 lg:py-4 px-16 ">
              <hr className="" />
            </div>
            <div className="text-lg lg:text-xl font-semibold md:text-white">Peran Pelatihan dan Konsultasi K3LH</div>
          </div>
          <div className=" text-center">
            <img src="/images/Ellipse 3 (1).png" className="mx-auto" />
            <div className="py-2 lg:py-4 px-16">
              <hr />
            </div>
            <div className="text-lg lg:text-xl font-semibold text-white">Peran Jasa Konsultasi K3LH</div>
          </div>
          <div className=" text-center">
            <img src="/images/Ellipse 3 (2).png" className="mx-auto" />
            <div className="py-2 lg:py-4 px-16">
              <hr />
            </div>
            <div className="text-lg lg:text-xl font-semibold text-white">Dampak Pelatihan dan Pembinaan K3LH</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
