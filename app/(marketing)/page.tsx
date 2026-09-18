import Image from "next/image"

import Link from "next/link"

export default function HomePage() {

  const courses = [
    { id: 1, title: "دوره فرا آگاهی", price: "۱,۹۱۴,۰۰۰", oldPrice: "۴,۲۰۰,۰۰۰", discount: "7%" },
  ]

  return (
    <div className="min-h-screen bg-(--bg-main) text-(--text-main) pb-24 relative">


      {/* محتوای اصلی */}
      <main className="container mx-auto mt-12 px-4">
        {/* تیتر بزرگ‌تر */}
        <h2 className="my-11 text-2xl font-black text-center text-white">دوره‌های آموزشی</h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {courses.map((item) => (
            <div 
              key={item.id} 
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-(--border-color) bg-(--bg-card) p-5 shadow-xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
            >
              {/* بج تخفیف بزرگ‌تر */}
              <span className="absolute top-3 left-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-(--bg-main) text-xs font-black text-white shadow-md">
                {item.discount}
              </span>

              <div className="aspect-square w-full overflow-hidden rounded-2xl border border-white/5 bg-(--bg-subtle)">
                <div className="flex h-full w-full items-center justify-center text-xs text-(--text-dark)">
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

    </div>
  )
}