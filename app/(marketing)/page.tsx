'trnasparent' // اگر از Next.js App Router استفاده می‌کنید و نیاز است
"use client"

import { useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <header className="mx-auto mt-6 w-full max-w-5xl px-4">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-[var(--secoundaryColor)] px-6 py-4 text-white shadow-xl backdrop-blur-md transition-all">
          
          {/* بخش لوگو یا نام سایت */}
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-90 transition-opacity">
            برند شما
          </Link>

          {/* منوی دسکتاپ */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li>
              <Link href="/" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <svg className="h-5 w-5 transition-transform group-hover:-translate-y-0.5">
                  <use href="#homeIcon"></use>
                </svg>
                <span>صفحه اصلی</span>
              </Link>
            </li>

            <li>
              <Link href="/faq" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <svg className="h-5 w-5 transition-transform group-hover:-translate-y-0.5">
                  <use href="#questionIcon"></use>
                </svg>
                <span>سوالات متداول</span>
              </Link>
            </li>

            <li>
              <Link href="/auth" className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white transition-all hover:bg-white/20 active:scale-95">
                <svg className="h-5 w-5">
                  <use href="#doorIcon"></use>
                </svg>
                <span>ورود / ثبت‌نام</span>
              </Link>
            </li>
          </ul>

          {/* دکمه منوی همبرگری برای موبایل */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

        </nav>

        {/* منوی کشویی موبایل */}
        {isOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-[var(--secoundaryColor)] p-4 text-white shadow-xl backdrop-blur-md transition-all">
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li>
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-xl p-2 hover:bg-white/10 transition-colors"
                >
                  <svg className="h-5 w-5">
                    <use href="#homeIcon"></use>
                  </svg>
                  <span>صفحه اصلی</span>
                </Link>
              </li>

              <li>
                <Link 
                  href="/faq" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-xl p-2 hover:bg-white/10 transition-colors"
                >
                  <svg className="h-5 w-5">
                    <use href="#questionIcon"></use>
                  </svg>
                  <span>سوالات متداول</span>
                </Link>
              </li>

              <li>
                <Link 
                  href="/auth" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-2 hover:bg-white/20 transition-colors"
                >
                  <svg className="h-5 w-5">
                    <use href="#doorIcon"></use>
                  </svg>
                  <span>ورود / ثبت‌نام</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main></main>

      <footer></footer>
    </>
  )
}