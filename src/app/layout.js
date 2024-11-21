// import '@styles/globals.css';
// import Script from 'next/script';
// import { Navbar } from '@components/navbar/Navbar';
// import { Footer } from '@components/footer/Footer';
// import { AuthContextProvider } from '@context/AuthContext';

// export const metadata = {
//   title: "Prfec AI",

// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <Script
//           id="google-analytics"
//           strategy="afterInteractive"
//           src={`https://www.googletagmanager.com/gtag/js?id=G-SSGKD6K471`}
//         />
//         <Script
//           id="google-analytics-setup"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-SSGKD6K471', {
//                 page_path: window.location.pathname,
//               });
//             `,
//           }}
//         />
//       </head>
//       <body>
//         <AuthContextProvider>
//           <Navbar />
//           {children}
//           <Footer />
//         </AuthContextProvider>
//       </body>
//     </html>
//   );
// }

import '@styles/globals.css';
import Script from 'next/script';
import { Navbar } from '@components/navbar/Navbar';
import { Footer } from '@components/footer/Footer';
import { AuthContextProvider } from '@context/AuthContext';
import open from './opengraph-image.png';
export const metadata = {
  title: "Prfec AI",
  description: "Prfec AI is your go-to platform for AI-powered business solutions.",
  openGraph: {
    type: "website", // Example type: "website" or "article"
    url: "https://business.prfec.ai", // Your site URL
    title: "Prfec AI",
    description: "Prfec AI is your go-to platform for AI-powered business solutions.",
    images: `https://business.prfec.ai/${open}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content={open} />
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
