import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiFacebook, FiMail } from 'react-icons/fi';
import { FaXTwitter, FaYoutube, FaPhone } from 'react-icons/fa6';
import { GrMap } from 'react-icons/gr';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
const Footer = () => {
  return (
    <footer className="bg-[#292525]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className={`${montserrat.className} grid lg:grid-cols-3 gap-6`}>
          <div className="border-b lg:border-b-0 lg:border-r pb-6 lg:pb-0 border-white">
            <div className="flex gap-4">
              <img src="/images/Logo.png" alt="Logo" className="object-cover" />
              <h5 className="text-white text-2xl lg:text-3xl font-bold">PT Sukses K3LH Indonesia</h5>
            </div>
            <div className="flex gap-3 py-4">
              <Link href="/" className="p-2 bg-[#007A35] text-white rounded-full">
                <FaInstagram className="size-5" />
              </Link>
              <Link href="/" className="p-2 bg-[#007A35] text-white rounded-full">
                <FiFacebook className="size-5" />
              </Link>
              <Link href="/" className="p-2 bg-[#007A35] text-white rounded-full">
                <FaXTwitter className="size-5" />
              </Link>
              <Link href="/" className="p-2 bg-[#007A35] text-white rounded-full">
                <FaYoutube className="size-5" />
              </Link>
            </div>
            <div>
              <p className="text-white text-sm ">PT Sukses K3LH Indonesia merupakan lembaga/organisasi yang bergerak dalam bidang Pelatihan (Training), Bimbingan (Coaching), Konsultansi (Consultancy) dan jasa K3LH lainnya.</p>
            </div>
          </div>
          <div className="text-white space-y-4 border-b lg:border-b-0 lg:border-r pb-6 lg:pb-0 border-white">
            <div className="flex items-center gap-3">
              <FaWhatsapp className="size-6" />
              <div className="text-sm">0811-548-491</div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="size-6" />
              <div className="text-sm">0811-548-491</div>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="size-6" />
              <div className="text-sm">Eddy.suprianto2709@gmail.com</div>
            </div>
            <div className="flex items-center gap-3">
              <GrMap className="size-14 sm:size-7 lg:size-14" />
              <div className="text-sm">Jl. Dahlina Raya No 85, Intansari, Kel. Sei Besar, Kec. Banjarbaru Selatan, Kota Banjarbaru, Kalimantan Selatan</div>
            </div>
          </div>
          <div>
            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <div className="border border-gray-100 focus-within:ring flex rounded-lg ">
                  <input type="text" tid="Text" placeholder="Ketik pesan.." className="w-full rounded-s-lg px-4 bg-white text-white bg-opacity-10 border-none focus:border-transparent focus:ring-transparent sm:text-sm" />

                  <button className="  bg-white px-6 py-3 text-sm font-bold rounded-e-lg transition-none  mt-0 w-auto shrink-0">Kirim</button>
                </div>
              </form>
            </div>
            <div className="mt-4 text-xs text-white">Kirimkan masukan, kritikan dan saran anda secara sukarela kepada PT Sukses K3LH Indonesia. Saran dan masukan dari anda sangat berarti bagi kami.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
