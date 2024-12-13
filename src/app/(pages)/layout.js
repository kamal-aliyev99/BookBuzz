import Header from "@/components/Header/Header";
// import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Book Buzz",
  description: "Simple book e-commerce site",
};

export default function MainLayout({ children }) {
  return (
    <>
        <Header/>
        <main>
          {children}
        </main> 
        <Footer/>
    </>
  );
}



