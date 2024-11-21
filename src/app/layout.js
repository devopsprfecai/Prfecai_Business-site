import '@styles/globals.css';
import Script from 'next/script';
import { Navbar } from '@components/navbar/Navbar';
import { Footer } from '@components/footer/Footer';
import { AuthContextProvider } from '@context/AuthContext';

export const metadata = {
  title: "Prfec AI",
  description: "Prfec AI is your go-to platform for AI-powered business solutions.",
    openGraph: {
      type: "website",
      url: "https://business.prfec.ai",
      title: "Prfec AI",
      description: "Prfec AI is your go-to platform for AI-powered business solutions.",
      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/prfecai-data.firebasestorage.app/o/opengraph-image.png?alt=media&token=a26b8e43-5b48-448b-a25a-2468bfe77041",
          width: 1200,
          height: 630,
          alt: "Prfec AI - Business Solutions"
        }
      ],
    },
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

// import '@styles/globals.css';
// import Script from 'next/script';
// import { Navbar } from '@components/navbar/Navbar';
// import { Footer } from '@components/footer/Footer';
// import { AuthContextProvider } from '@context/AuthContext';
// import open from '@public/assets/Images/opengraph-image.png'
// import '../'

// export const metadata = {
//   title: "Prfec AI",
//   description: "Prfec AI is your go-to platform for AI-powered business solutions.",
//   openGraph: {
//     type: "website",
//     url: "https://business.prfec.ai",
//     title: "Prfec AI",
//     description: "Prfec AI is your go-to platform for AI-powered business solutions.",
//     images: [
//       {
//         url: `https://business.prfec.ai/${open}`, // Replace with your actual hosted image URL
//         width: 1200,
//         height: 630,
//         alt: "Prfec AI - Business Solutions"
//       }
//     ],
//   },
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