import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Inria_Serif, Inria_Sans, Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { IoMdSearch } from 'react-icons/io';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const inriasans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'Profil', href: '/profil' },
  { name: 'Layanan', href: '/layanan' },
  { name: 'Blog', href: '/blog' },
  { name: 'HSLC', href: '/hslc' },
  { name: 'Sosial Media', href: '/sosialmedia' },
  { name: 'Admin', href: '/login' },
];

export default function Example() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white`}>
      <nav className="flex items-center justify-between p-3 lg:p-3 lg:px-8 shadow-lg " aria-label="Global">
        <div className="flex items-center lg:flex-1 lg:justify-start">
          <div className="lg:static lg:transform-none">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Your Company</span>
              {/* <img src="/images/EnterManagementKudus-logo.png" className="h-12 w-auto" alt="Enter Management Kudus Logo" /> */}
              <div className="ml-4 font-bold lg:text-2xl text-black">
                <span className={montserrat.className}>PT Sukses K3LH Indonesia</span>
              </div>
            </Link>
          </div>
          <button type="button" className="-m-2.5 absolute right-3 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className={`h-6 w-6 ${isScrolled ? 'text-black' : 'text-gray-700'}`} aria-hidden="true" />
          </button>
        </div>
        <div className={`hidden lg:flex gap-2 ${montserrat.className}`}>
          <div className="hidden lg:flex lg:gap-x-2 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-black px-2 py-2 text-sm font-semibold transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A8D045] after:transition-all after:duration-300 hover:after:w-full  ${
                  pathname === item.href ? ' font-bold after:w-full' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <Link href="/order" className="p-2 border border-[#A8D045] text-[#A8D045]  rounded-full text-center hover:bg-[#A8D045] hover:text-white transition duration-300 ease-in-out">
              <div>
                <IoMdSearch className="size-6" />
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <Transition show={mobileMenuOpen} as="div">
        <Dialog as="div" onClose={() => setMobileMenuOpen(false)} className="relative z-50">
          <Transition.Child
            as="div"
            enter="transition-opacity duration-300 ease-in-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300 ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="fixed inset-0 bg-black/30"
          />
          <Transition.Child
            as="div"
            enter="transition-transform duration-300 ease-in-out"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-300 ease-in-out"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white overflow-y-auto"
          >
            <Dialog.Panel className="px-4 py-6 h-screen bg-[#A8D045]">
              <div className="flex items-center justify-between">
                <Link href="#" className="-m-1.5 p-1.5 flex items-center">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="/images/EnterManagementKudus-logo.png" alt="" />
                  <div className="ml-2 font-bold text-black">
                    <span className={montserrat.className}>ENTER MANAGEMENT KUDUS</span>
                  </div>
                </Link>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6 hover:font-bold" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block px-3 py-2 font-medium leading-5 text-sm transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#574315ce] after:transition-all after:duration-300 hover:after:w-full hover:font-bold ${
                          pathname === item.href ? 'text-[#574315] font-bold after:w-full' : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="lg:flex lg:flex-1 lg:justify-end pt-4">
                      <Link href="/order" className="bg-black px-8 py-3 rounded-lg text-sm font-semibold leading-6 text-white text-center hover:bg-gray-800 transition duration-300 ease-in-out">
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
