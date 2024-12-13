import "./auth.scss";
import logo from '../../../public/images/bookbuzz logo.jpeg'
import Image from "next/image";

export const metadata = {
  title: "Login Book Buzz Account",
  description: "Simple book e-commerce site",
};

const AuthLayout = ({ children }) => {
  return (
    <main className="auth">
      <div className="auth__imgContainer">
        <div className="auth__imgContainer--img">
          <Image
            src={logo}
            alt="BookBuzz"
          />
        </div>
      </div>
      <div className="auth__content">
        {children}
      </div>
    </main>
  );
}

export default AuthLayout





