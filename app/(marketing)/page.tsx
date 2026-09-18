"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const courses = [
    { id: 1, title: "دوره فرا آگاهی", price: "۱,۹۱۴,۰۰۰", oldPrice: "۴,۲۰۰,۰۰۰", discount: "7%" },
  ]

  // شبکه شبکه‌های اجتماعی برای دک لینوکس
  const socialLinks = [
    {
      id: "telegram",
      name: "تلگرام",
      url: "https://t.me/your_channel",
      hoverBg: "hover:bg-[#229ED9]",
      hoverShadow: "hover:shadow-[#229ED9]/40",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.03 9.56c-.15.68-.56.84-1.13.52l-3.1-2.29-1.5 1.44c-.17.17-.31.31-.63.31l.22-3.16 5.76-5.2c.25-.22-.05-.34-.39-.12l-7.12 4.48-3.07-.96c-.67-.21-.68-.67.14-.99l12.01-4.63c.56-.2 1.05.14.84.84z"/>
        </svg>
      )
    },
    {
      id: "instagram",
      name: "اینستاگرام",
      url: "https://instagram.com/your_page",
      hoverBg: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]",
      hoverShadow: "hover:shadow-[#dc2743]/40",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      id: "whatsapp",
      name: "واتس‌اپ",
      url: "https://wa.me/your_number",
      hoverBg: "hover:bg-[#25D366]",
      hoverShadow: "hover:shadow-[#25D366]/40",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] pb-24 relative">

      {/* 🐧 منوی شناور راست (Linux Dock Style) */}
      <aside className="fixed right-4 top-1/2 z-50 -translate-y-1/2 hidden sm:flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-[var(--bg-card)]/80 p-2 shadow-2xl backdrop-blur-xl">

        <div className="h-1.5 w-1.5 rounded-full bg-white/20 mb-1"></div>

        {socialLinks.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition-all duration-300 hover:scale-110 hover:text-white hover:shadow-lg ${item.hoverBg} ${item.hoverShadow}`}
          >
            {item.icon}

            {/* فونت تولتیپ بزرگ‌تر شد (text-sm) */}
            <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg border border-white/10 bg-[var(--bg-card)] px-3.5 py-2 text-sm font-bold text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1">
              {item.name}
            </span>

            <span className="absolute -left-1 h-1 w-1 rounded-full bg-white/0 transition-all group-hover:bg-white group-hover:h-3"></span>
          </Link>
        ))}

        <div className="h-px w-6 bg-white/10 my-1"></div>

        <button 
          onClick={() => alert("ارتباط با پشتیبانی")}
          className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition-all duration-300 hover:scale-110 hover:bg-[var(--primary-blue)] hover:text-white hover:shadow-lg hover:shadow-[var(--primary-blue)]/40"
        >
          <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>

          <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg border border-white/10 bg-[var(--bg-card)] px-3.5 py-2 text-sm font-bold text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1">
            پشتیبانی
          </span>
        </button>

      </aside>

      {/* هدر */}
      <header className="sticky top-4 z-40 mx-auto w-full max-w-5xl px-4">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-[var(--bg-card)]/90 px-6 py-4 shadow-2xl backdrop-blur-md">

          {/* لوگو بزرگ‌تر */}
          <Link href="/" className="text-xl font-black tracking-widest text-white hover:opacity-80">
            FARAAGAHI
          </Link>

          {/* منوی دسکتاپ با فونت بزرگ‌تر (text-base) */}
          <ul className="hidden md:flex items-center gap-6 text-base font-medium text-[var(--text-muted)]">
            <li>
              <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors">
                <span>صفحه اصلی</span>
              </Link>
            </li>
            <li>
              <Link href="/faq" className="flex items-center gap-2 hover:text-white transition-colors">
                <span>سوالات متداول</span>
              </Link>
            </li>
            <li>
              <Link href="/auth" className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 transition-all font-semibold">
                <span>ورود / ثبت‌نام</span>
              </Link>
            </li>
          </ul>

          <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        {/* منوی موبایل بزرگ‌تر */}
        {isOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 shadow-2xl absolute w-[calc(100%-2rem)]">
            <ul className="flex flex-col gap-3 text-base font-medium">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)} className="block rounded-lg p-2.5 hover:bg-white/5">صفحه اصلی</Link>
              </li>
              <li>
                <Link href="/faq" onClick={() => setIsOpen(false)} className="block rounded-lg p-2.5 hover:bg-white/5">سوالات متداول</Link>
              </li>
              <li>
                <Link href="/auth" onClick={() => setIsOpen(false)} className="block rounded-lg bg-white/10 p-2.5 text-center font-bold">ورود / ثبت‌نام</Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* محتوای اصلی */}
      <main className="container mx-auto mt-12 px-4">
        {/* تیتر بزرگ‌تر */}
        <h2 className="my-11 text-2xl font-black text-center text-white">دوره‌های آموزشی</h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {courses.map((item) => (
            <div 
              key={item.id} 
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 shadow-xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
            >
              {/* بج تخفیف بزرگ‌تر */}
              <span className="absolute top-3 left-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-(--bg-main) text-xs font-black text-white shadow-md">
                {item.discount}
              </span>

              <div className="aspect-square w-full overflow-hidden rounded-2xl border border-white/5 bg-[var(--bg-subtle)]">
                <div className="flex h-full w-full items-center justify-center text-xs text-[var(--text-dark)]">
                  <Image src='/images/home/cart.jpg' width={100} height={100} alt="picture" className="object-cover w-full h-full" />
                </div>
              </div>

              <div className="mt-4 flex flex-1 flex-col justify-between text-center">
                {/* عنوان کارت با فونت بزرگ‌تر */}
                <h3 className="line-clamp-2 min-h-[3rem] text-base font-bold text-white leading-relaxed">
                  {item.title}
                </h3>

                <div className="my-4 flex flex-col items-center gap-1">
                  <span className="text-sm text-[var(--text-dark)] line-through">
                    {item.oldPrice} تومان 
                  </span>
                  <span className="text-base font-black text-white">
                    {item.price} تومان
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[var(--border-color)]">
                  <button className="rounded-xl bg-[var(--primary-blue)] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[var(--primary-blue-hover)] active:scale-95">
                    خرید دوره
                  </button>

                  <Link href="#" className="text-sm font-bold text-[var(--accent-green)] transition-opacity hover:opacity-80">
                    مشخصات دوره &rsaquo;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* فوتر با فونت‌های درشت‌تر و خواناتر */}
      <footer className="mt-24 fixed bottom-0 left-0 right-0 border-t border-[var(--border-color)] bg-[var(--bg-card)]/40 py-6 text-base backdrop-blur-md">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">

          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="text-lg font-black tracking-widest text-white">
              FARAAGAHI
            </span>
            <p className="text-sm text-[var(--text-muted)]">
              پلتفرم تخصصی دوره‌های خودشناسي و توسعه فردی.
            </p>
          </div>

          <p className="text-sm font-semibold text-white/90">ارزش یک اسم نیست یک فرهنگ است.</p>

          <p className="text-sm text-[var(--text-dark)]">
            © {new Date().getFullYear()} تمامی حقوق محفوظ است.
          </p>

        </div>
      </footer>

    </div>
  )
}