import Menubar from "../components/layouts/Menubar"
import GlobeBackground from "../assets/backGround/GlobeBackground"
import "./globals.css"

export const metadata = {
  title: "Trade App",
  description: "A platform for trading assets",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
      // className="bg-cover bg-center min-h-screen"
      // style={{
      //   backgroundImage: "url('/backgrounds/00000000.jpg')",
      //   backgroundRepeat: "no-repeat",
      // }}
      >
        <GlobeBackground />
        <main className="relative z-10 w-full">
          {children}
        </main>
        <Menubar />
      </body>
    </html>
  )
}
