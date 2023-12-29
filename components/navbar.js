import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/Navbar.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);
    
    // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 빈 배열은 마운트 및 언마운트 시에만 실행
  
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className="flex items-center">
        {/* sidebar menu-button */}
        <div className="block lg:hidden mr-6">
          <button className="flex items-center text-gray-500 hover:text-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* navbar logo */}
        <Image className="mr-4" src="/tailwindcss-icon-svgrepo-com.svg" alt="logo" width={30} height={30} />

        {/* navbar title */}
        <Link className="hover:text-white transition duration-200 ease-in-out" href="/">
          <div className="flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">My Website</span>
          </div>
        </Link>
      </div>

      <div className="font-bold">
        {/* navbar links */}
        <Link
          className={`${
            router.pathname === "/" ? "text-white" : ""
          } px-4 hover:text-white transition duration-200 ease-in-out`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${
            router.pathname === "/about" ? "text-white" : ""
          } px-4 hover:text-white transition duration-200 ease-in-out`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`${
            router.pathname === "/contact" ? "text-white" : ""
          } px-4 hover:text-white transition duration-200 ease-in-out`}
          href="/contact"
        >
          Contact
        </Link>
      </div>

      {/* navbar sign-in button */}
      <Link
        className="px-3 font-bold text-white hover:text-gray-400 underline transition duration-200 ease-in-out w-32 text-center"
        href="/login"
      >
        Sign In
      </Link>
    </nav>
  );
}
