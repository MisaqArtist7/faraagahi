import Link from "next/link"
export default function homePage() {
  return (
    <header className="container bg-amber-50 rounded">
      <nav>
        <ul>
          <li><Link href='/'>صفحه اصلی</Link></li>
          <li><Link href='/'>صفحه اصلی</Link></li>
          <li><Link href='/'>صفحه اصلی</Link></li>
        </ul>
      </nav>
    </header>
  )
}
