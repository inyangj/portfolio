import { Oswald, Inconsolata } from "next/font/google";
import "./globals.css";
import Nav from "./components/sections/Nav.jsx";

const oswald = Oswald({ subsets: ["latin"], weights: ["400", "500", "600", "700"] });
const inconsolata = Inconsolata({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Inyang Johnson | Frontend Developer",
  description: "Frontend developer with a passion for building beautiful and performant websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.className} ${oswald.className} max-h-screen text-white bg-primary-blue`}
      >
        <header className="px-4 lg:px-24 py-2 ">
          <Nav />
        </header>
        <main className=" mt-8 xl:mt-[80px] xl:mx-[160px]">{children}</main>
      </body>
    </html>
  );
}
