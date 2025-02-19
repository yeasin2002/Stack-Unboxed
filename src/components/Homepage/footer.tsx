import { courseList } from '@/data';
import { maintainerYeasinInfo } from '@/data/maintainers-info';
import { anekBangla, hindSiliguri, mina } from '@/fonts/bengali.fonts';
import { publicSans, rubik } from '@/fonts/english.fonts';
import Link from 'next/link';
import { ScatteredDotsBg } from '../shared';

const footerLinks = [
  { name: 'কন্ট্রিবিউশন গাইডলাইন', url: '/contribution' },
  { name: 'পলিসি', url: '/privacy-policy' }
];

export function Footer() {
  const year = new Intl.DateTimeFormat('bn-BD', { year: 'numeric' }).format(
    new Date()
  );
  return (
    <footer className="relative border-t border-white/10 bg-black text-white">
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent" />
      <ScatteredDotsBg />

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="mb-8 grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3
              className={`bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-2xl font-bold text-transparent ${publicSans.className}`}
            >
              Stack Unboxed
            </h3>
            <p className={`max-w-sm text-gray-400 ${hindSiliguri.className}`}>
              বাংলায় প্রোগ্রামিং শেখার জন্য সহজ ও সহজবোধ্য ব্লগ, টিউটোরিয়াল, এবং
              বিস্তারিত ডকুমেন্টেশন
            </p>
          </div>

          {/* course Links */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${anekBangla.className}`}>
              কোর্সসমূহ
            </h4>
            <ul className="grid grid-cols-2 items-center space-y-2">
              {courseList.map(item => (
                <li key={item.name}>
                  <a
                    href="#"
                    className={`text-gray-400 transition-colors duration-200 hover:text-purple-400 ${rubik.className}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${anekBangla.className}`}>
              মেইন্টেনার এর সাথে যোগাযোগ
            </h4>
            <div className="flex gap-4">
              {maintainerYeasinInfo.map(social => (
                <Link
                  key={social.name}
                  href={{ pathname: social.link }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-lg border border-white/10 bg-white/5 p-2 transition-colors duration-200 hover:bg-white/10 hover:text-purple-400`}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className={`text-sm text-gray-400 ${hindSiliguri.className}`}>
              ©{year} Stack Unboxed । সমস্ত অধিকার সংরক্ষিত ।
            </p>
            <div className="flex gap-6">
              {footerLinks.map(item => (
                <Link
                  key={item.name}
                  href={{ pathname: item.url }}
                  className={`text-base text-gray-400 transition-colors duration-200 hover:text-purple-400 ${mina.className}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
