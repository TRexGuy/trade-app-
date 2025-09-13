import Menubar from "../components/layouts/Menubar"
import GlobeBackground from "../assets/backGround/GlobeBackground" // مسیر درست فایل رو بذار
import "./globals.css"

export const metadata = {
  title: "Trade App",
  description: "A platform for trading assets",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
        {/* Globe Background */}
        <GlobeBackground />

        {/* محتوای اصلی بالای بک‌گراند */}
        <main className="relative z-10 w-full">
          {children}
        </main>

        {/* منو */}
        <Menubar />
      </body>
    </html>
  )
}
