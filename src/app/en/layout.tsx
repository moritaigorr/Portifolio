import { MotionProvider } from "@/components/motion-provider";
import { getPortfolioMetadata, locales } from "@/data/locales";
import "lenis/dist/lenis.css";
import "../globals.css";

export const metadata = getPortfolioMetadata("en");

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={locales.en.lang}>
      <body>
        <MotionProvider />
        {children}
      </body>
    </html>
  );
}
