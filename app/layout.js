import { Poppins } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { GoogleTagManager } from "@next/third-parties/google";

// Configuración de la fuente Poppins
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Orbfit Motion | Automation for Your Business",
  description: "We handle the boring stuff. You handle the growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <GoogleTagManager gtmId="GTM-W28JQMJK" />
      <body className="antialiased">
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            {children}
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
