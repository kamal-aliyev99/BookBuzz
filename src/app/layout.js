import { redirect } from "next/navigation";
import "./globals.scss";

export const metadata = {
  title: "Book Buzz",
  description: "Simple book e-commerce site",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}












// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {children} a
//       </body>
//     </html>
//   );
// }