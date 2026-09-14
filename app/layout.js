import "./globals.css";
import { Header, Footer } from "../components/SiteChrome";

export const metadata = {
  title: {
    default: "NL'ers in de lavendelvelden",
    template: "%s | NL'ers in de lavendelvelden"
  },
  description: "Demonstratiewebsite van een fictieve Nederlandse vereniging in de Luberon.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
