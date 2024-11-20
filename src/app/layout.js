import '@styles/globals.css';
import Script from 'next/script';
import { Navbar } from '@components/navbar/Navbar';
import { Footer } from '@components/footer/Footer';
import { AuthContextProvider } from '@context/AuthContext';

export const metadata = {
  title: "Prfec AI",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-SSGKD6K471`}
        />
        <Script
          id="google-analytics-setup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SSGKD6K471', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <AuthContextProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
