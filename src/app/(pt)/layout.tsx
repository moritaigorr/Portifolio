import { MotionProvider } from "@/components/motion-provider";
import { getPortfolioMetadata, locales } from "@/data/locales";
import "lenis/dist/lenis.css";
import "../globals.css";

export const metadata = getPortfolioMetadata("pt");

export default function PortugueseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={locales.pt.lang}>
      <body>
        <MotionProvider />
        {children}
      </body>
    </html>
  );
}
