'use client';

import Navbar from '@/components/Navbar';
import { EB_Garamond, Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';
import Link from 'next/link';

const ebgaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const HSLC = () => {
  return (
    <>
      <Navbar />
      <section className="mt-12 lg:mt-16 drop-shadow-lg">
        <img src="/images/subheader-k3lh.png" className="object-cover" />
      </section>
      <section
        style={{
          backgroundImage: "url('/images/Group 14(2).png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="py-10"
      >
        <div className="px-6 lg:px-24">
          <div className="text-center">
            <h1 className={`${ebgaramond.className} text-3xl md:text-5xl font-semibold`}>Holistic Safety Leadership Coaching Warrior Camp</h1>
          </div>
          <div className=" mt-8">
            <p className={`${montserrat.className} text-sm md:text-base font-medium`}>
              Holistic Safety Leadership Coaching (HSLC) Warrior Camp adalah sebuah acara Holistic Safety Leadership Coaching berwujud Safety Warrior Camp (Kamp Perjuang Keselamatan) yang super aktif dan super inovatif yang menyajikan
              pengalaman 3B (Baru, Beda, dan Bermakna) untuk para peserta yang terbagi dalam 3 Strata yaitu Top Rank Safety Warriors, Middle Rank Safety Warriors dan Low Rank Safety Warriors dengan tujuan untuk membentuk para Safety
              Warriors yang Berpengetahuan, Berketerampilan dan Bersikap profesional serta paripurna.
              <br /> <br /> Acara diselenggarakan dalam 2 hari 1 malam, yang dibagi menjadi 2 fase, yaitu fase siang hari yang akan dipenuhi dengan aktivasi Kecerdasan Fisik (PQ) , Kecerdasan Intelektual (IQ) dan Kecerdasan Emosional (EQ),
              serta fase malam hari yang akan dipenuhi dengan aktivasi Kecerdasan Spiritual (SQ) dan Kecerdasan Transcendental (TQ).
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 mt-10">
            <div className="flex justify-center">
              <img src="/images/image 1.png" className="object-cover" />
            </div>
            <div className={`${montserrat.className} grid grid-cols-2 gap-6 `}>
              <div className="  p-2 bg-white rounded-lg border flex justify-center items-center">
                <div className="text-center md:space-y-4">
                  <h5 className="text-[#515151] text-lg md:text-3xl font-bold">GOALS</h5>
                  <h6 className="text-sm md:text-base font-medium">From Safety Leaders to Holistic Warriors</h6>
                </div>
              </div>
              <div className="  p-2 bg-white rounded-lg border flex justify-center items-center">
                <div className="text-center md:space-y-4">
                  <h5 className="text-[#515151] text-lg md:text-3xl font-bold">LOKASI</h5>
                  <h6 className="text-sm md:text-base font-medium">BMKG Meteorological Station - Kab. Bogor</h6>
                </div>
              </div>
              <div className="  p-2 bg-white rounded-lg border flex justify-center items-center">
                <div className="text-center md:space-y-4">
                  <h5 className="text-[#515151] text-lg md:text-3xl font-bold">PEMATERI</h5>
                  <h6 className="text-sm md:text-base font-medium">
                    <ul className="">
                      <li>1. Coach Eddy</li>
                      <li>2. Kang Zain</li>
                    </ul>
                  </h6>
                </div>
              </div>
              <div className="  p-2 bg-white rounded-lg border flex justify-center items-center">
                <div className="text-center md:space-y-4">
                  <h5 className="text-[#515151] text-lg md:text-3xl font-bold">TANGGAL</h5>
                  <h6 className="text-sm md:text-base font-medium">9-10 November 2024</h6>
                </div>
              </div>
              <div className="col-span-2  bg-white rounded-lg border flex justify-center items-center">
                <div className="text-center p-2 lg:p-0 md:space-y-4">
                  <h5 className="text-[#515151] text-lg md:text-3xl font-bold">KELAS/RANK</h5>
                  <h6 className="text-sm md:text-base font-medium">
                    <ul className="list-disc">
                      <li>Top Rank Safety Warriors (5 Juta)</li>
                      <li>Middle Rank Safety Warriors (3 Juta)</li>
                      <li>Lower Rank Safety Warriors (1 Juta)</li>
                      <li>1 TOP, 2 MIDDLE, 6 LOWER (15 Juta)</li>
                    </ul>
                  </h6>
                </div>
              </div>
              <div className=" col-span-2 justify-center lg:justify-normal lg:flex-1 ">
                <Link
                  href="https://wa.me/6285641064464"
                  className={`${montserrat.className} flex justify-center items-center text-2xl md:text-4xl text-white bg-[#007A35] px-4 py-6 rounded-lg font-extrabold text-center hover:bg-[#1AAB50] hover:text-white transition duration-300 ease-in-out`}
                >
                  DAFTAR SEKARANG{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HSLC;
