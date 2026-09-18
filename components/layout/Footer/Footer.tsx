export default function FooterComponent() {
    return (
        <footer className="mt-24 fixed bottom-0 left-0 right-0 border-t border-[var(--border-color)] bg-[var(--bg-card)]/40 py-6 text-base backdrop-blur-md">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">

            <div className="flex flex-col items-center gap-1 md:items-start">
                <span className="text-lg font-black tracking-widest text-white">
                FARAAGAHI
                </span>
                <p className="text-sm text-(--text-muted)">
                پلتفرم تخصصی دوره‌های خودشناسي و توسعه فردی.
                </p>
            </div>

            <p className="text-sm font-semibold text-white/90">ارزش یک اسم نیست یک فرهنگ است.</p>

            <p className="text-sm text-(--text-dark)">
                © {new Date().getFullYear()} تمامی حقوق محفوظ است.
            </p>

            </div>
        </footer>
    )
}
