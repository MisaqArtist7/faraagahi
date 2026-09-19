'use client'

import { useState } from "react"

export default function FaqPage() {

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      title: "کد ورود (پیامک) برایم ارسال نمی‌شود چرا؟",
      answer:
        "گاهی کد در مسیر مخابرات با تأخیر مواجه می‌شود؛ لطفاً چند بار و با فاصله‌ی زمانی امتحان کنید و پوشه‌ی پیامک‌های اسپم (هرزنامه) را نیز بررسی کنید. در صورت ادامه‌ی مشکل، احتمالاً شماره‌ی ما را پیش‌تر مسدود کرده‌اید (به دلیل پیام‌های تبلیغاتی سایر شرکت‌ها)؛ در این حالت از شماره‌ی دیگری استفاده کنید.",
      isOpen: false,
    }
  ])

  const handleToggle = (id : number) => {
    setFaqs(
      faqs.map(item => item.id === id ? {...item, isOpen : !item.isOpen} : item)
    )
  }

  return (
    <div className="container mx-auto flex flex-col items-center gap-5 py-10">
      {faqs.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-3xl overflow-hidden rounded-2xl border shadow-md my-11"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          {/* Question */}
          <div onClick={() => handleToggle(item.id)}
            className="flex cursor-pointer items-center justify-between gap-4 p-5 transition hover:bg-(--bg-subtle)"
          >
            <h2
              className="text-right text-lg font-bold leading-8"
              style={{ color: "var(--text-main)" }}
            >
              {item.title}
            </h2>

            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition"
              style={{
                backgroundColor: "var(--bg-subtle)",
                color: "var(--text-muted)",
              }}
            >
              <svg className={`w-5 h-5 ${item.isOpen && 'rotate-180'} transition-all ease-in`}>
                <use href="#chevron-down"></use>
              </svg>
            </span>
          </div>

          {/* Answer */}
          {item.isOpen && (
            <div
              className="border-t px-5 py-5"
              style={{ borderColor: "var(--border-color)" }}
            >
              <p
                className="text-justify leading-8"
                style={{ color: "var(--text-muted)" }}
              >
                {item.answer}
              </p>
            </div>
          )}

        </div>
      ))}
    </div>
  )
}