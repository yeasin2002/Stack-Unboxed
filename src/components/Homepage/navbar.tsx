// import { DarkModeToggle } from '@/components/ui';
import { courseList } from '@/data';
import { rubik } from '@/fonts';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '../shared/logo';
import { NavbarMobile } from './navbar-mobile';

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-2 z-50 mx-auto w-9/12 rounded-xl border-b border-gray-800 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2" aria-label="home">
            <Logo />
          </Link>

          <nav className="hidden gap-6 md:flex">
            {courseList.map((item, index) => (
              <Link
                key={index}
                href={{ pathname: item.link }}
                className={`text-sm text-gray-400 transition-colors hover:text-white ${rubik.className}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* <SearchContent /> */}
          {/* <DarkModeToggle /> */}

          <Link
            href={'https://github.com/yeasin2002/Stack-Unboxed'}
            target="_blank"
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
            aria-label="Github link"
          >
            <Github className="h-5 w-5" />
          </Link>
          <NavbarMobile />
        </div>
      </div>
    </nav>
  );
}
