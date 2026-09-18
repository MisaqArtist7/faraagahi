    "use client"

    import { useState } from "react"
    import Link from "next/link"
    import { useForm } from "react-hook-form"
    import { zodResolver } from "@hookform/resolvers/zod"
    import * as z from "zod"

    export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true)

    // تعریف قوانین ولیدیشن با Zod بر اساس حالت ورود یا ثبت‌نام
    const schema = z.object({
        fullName: isLogin 
        ? z.string().optional() 
        : z.string().min(3, "نام و نام خانوادگی باید حداقل ۳ حرف باشد"),
        phone: z.string().regex(/^09\d{9}$/, "شماره تلفن باید ۱۱ رقم و با 09 شروع شود (مثل 09123456789)"),
    })

    // راه‌اندازی React Hook Form با اسکیما Zod
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    })

    const onSubmit = (data) => {
        if (isLogin) {
        alert(`ورود موفق با شماره: ${data.phone}`)
        } else {
        alert(`ثبت‌نام موفق با نام: ${data.fullName} و شماره: ${data.phone}`)
        }
    }

    // تابع تغییر تب برای ریست کردن فرم و خطاها
    const handleTabChange = (loginState) => {
        setIsLogin(loginState)
        reset() // پاک کردن مقادیر و خطاهای قبلی هنگام جابجایی بین ورود و ثبت‌نام
    }

    return (
        <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] flex items-center justify-center p-4 relative">
        
        {/* دکمه بازگشت به صفحه اصلی */}
        <Link href="/" className="absolute top-6 right-6 flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors">
            <span>&larr; بازگشت به صفحه اصلی</span>
        </Link>

        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[var(--bg-card)]/90 p-8 shadow-2xl backdrop-blur-md">
            
            {/* برند و عنوان */}
            <div className="text-center mb-8">
            <Link href="/" className="text-2xl font-black tracking-widest text-white hover:opacity-80">
                FARAAGAHI
            </Link>
            <p className="text-sm text-[var(--text-muted)] mt-2">
                {isLogin ? "ورود به حساب کاربری" : "ایجاد حساب کاربری جدید"}
            </p>
            </div>

            {/* تب‌های جابجایی بین ورود و ثبت‌نام */}
            <div className="flex rounded-xl bg-white/5 p-1 mb-6 border border-white/5">
            <button
                type="button"
                onClick={() => handleTabChange(true)}
                className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all ${
                isLogin 
                    ? "bg-[var(--primary-blue)] text-white shadow-lg shadow-[var(--primary-blue)]/30" 
                    : "text-[var(--text-muted)] hover:text-white"
                }`}
            >
                ورود
            </button>
            <button
                type="button"
                onClick={() => handleTabChange(false)}
                className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all ${
                !isLogin 
                    ? "bg-[var(--primary-blue)] text-white shadow-lg shadow-[var(--primary-blue)]/30" 
                    : "text-[var(--text-muted)] hover:text-white"
                }`}
            >
                ثبت‌نام
            </button>
            </div>

            {/* فرم */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
            
            {/* فیلد نام و نام خانوادگی (فقط در حالت ثبت‌نام) */}
            {!isLogin && (
                <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-muted)]">نام و نام خانوادگی</label>
                <input
                    type="text"
                    {...register("fullName")}
                    placeholder="مثلاً: علی رضایی"
                    className={`rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-[var(--text-dark)] focus:outline-none transition-all ${
                    errors.fullName ? "border-red-500" : "border-white/10 focus:border-[var(--primary-blue)]"
                    }`}
                />
                {errors.fullName && (
                    <span className="text-xs text-red-400 mt-1">{errors.fullName.message}</span>
                )}
                </div>
            )}

            {/* فیلد شماره تلفن */}
            <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-muted)]">شماره تلفن همراه</label>
                <input
                type="tel"
                {...register("phone")}
                placeholder="09123456789"
                dir="ltr"
                className={`rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-[var(--text-dark)] text-right focus:outline-none transition-all ${
                    errors.phone ? "border-red-500" : "border-white/10 focus:border-[var(--primary-blue)]"
                }`}
                />
                {errors.phone && (
                <span className="text-xs text-red-400 mt-1">{errors.phone.message}</span>
                )}
            </div>

            <button
                type="submit"
                className="mt-4 rounded-xl bg-[var(--primary-blue)] py-3.5 text-sm font-bold text-white transition-all hover:bg-[var(--primary-blue-hover)] active:scale-95 shadow-lg shadow-[var(--primary-blue)]/30"
            >
                ارسال کد تایید
            </button>
            </form>

            <div className="mt-6 text-center">
            <p className="text-xs text-[var(--text-dark)]">
                با ورود یا ثبت‌نام، قوانین و مقررات پلتفرم را می‌پذیرید.
            </p>
            </div>

        </div>
        </div>
    )
    }