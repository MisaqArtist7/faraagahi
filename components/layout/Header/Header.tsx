'use client'
import Link from "next/link"
import { useState } from "react"
export default function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    return (
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
                <Link href="/register" className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 transition-all font-semibold">
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
    )
}
