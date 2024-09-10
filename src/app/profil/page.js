'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { EB_Garamond, Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';

const ebgaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const Profil = () => {
  return (
    <>
      <Navbar />
      <section className="mt-12 lg:mt-16 drop-shadow-lg">
        <img src="/images/subheader-k3lh.png" className="object-cover" />
      </section>

      <section className="py-10 lg:py-16">
        <div className="lg:flex px-6 lg:px-12 gap-6">
          <div className="hidden lg:block">
            <Image src="/images/Rectangle 22.png" alt="Tentang Kami" width={1500} height={1500} />
          </div>
          <div className={`${montserrat.className} bg-[#007A35] p-8`}>
            <h2 className="text-2xl lg:text-5xl text-[#A8D045] font-bold">PT Sukses K3LH Indonesia</h2>
            <p className="mt-4 text-sm text-white">
              PT Sukses K3LH Indonesia lembaga/organisasi yang bergerak dalam bidang Pelatihan (Training), Bimbingan (Coaching), Konsultansi (Consultancy) dan jasa K3LH Lainnya serta sangat peduli dengan permasalahan/tantangan K3LH
              (Keselamatan dan Kesehatan Kerja serta Lingkungan Hidup) di Indonesia.
              <br />
              <br /> Kami bertujuan untuk memberdayakan dunia usaha dan industri untuk memprioritaskan kesejahteraan karyawannya dan memastikan kepatuhan terhadap peraturan keselamatan. <br />
              <br /> Siap untuk meningkatkan keselamatan di tempat kerja Anda? Hubungi kami hari ini untuk mempelajari lebih lanjut tentang layanan kami dan bagaimana kami dapat membantu Anda mencapai tujuan K3LH Anda. Mari bekerja sama
              untuk menciptakan lingkungan kerja yang lebih aman, sehat, dan produktif bagi organisasi Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="lg:flex px-6 lg:px-12 gap-6">
          <div className={`${montserrat.className} bg-[#A8D045] p-8`}>
            <div>
              <h4 className="text-center text-2xl lg:text-5xl text-[#007A35] font-bold">Visi</h4>
              <p className="mt-5 text-base lg:text-lg font-medium">Menjadi Sumber Daya K3LH (SHE) yang professional dan terpercaya di Indonesia</p>
            </div>
            <div className="mt-4">
              <h4 className="text-center text-2xl lg:text-5xl text-[#007A35] font-bold">Misi</h4>
              <ul className="list-disc mt-5 text-base lg:text-lg font-medium ps-4">
                <li>Menyelenggarakan Pelatihan K3LH (SHE Training) secara professional</li>
                <li>Menyelenggarakan Bimbingan K3LH (SHE Coaching) secara professional</li>
                <li>Menyelenggarakan Konsultansi K3LH (SHE Consultancy) secara professional </li>
                <li>Menyelenggarakan Jasa K3LH lainnya secara Professioal dan terpercaya </li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image src="/images/Rectangle 22.png" alt="Tentang Kami" width={600} height={600} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profil;
