'use client';
import React, { useState, useEffect, useRef } from 'react';
import '@styles/navbar/Navbar.css';
import Link from 'next/link';
import Image from 'next/image';
// import Logo from '@public/assets/Images/navbar/prfec-logo.png';
import Logo from '@public/assets/Images/navbar/Prfec Logo White.png'
import Hamburger from '@public/assets/Images/navbar/hamburger.svg';
import Close from '@public/assets/Images/navbar/close.svg';
import DefaultProfile from '@public/assets/Images/navbar/default.svg'
import { UserAuth } from '@context/AuthContext';
import { useRouter } from "next/navigation";
import prfec from '@public/assets/Images/navbar/prfec.svg'


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const router = useRouter();

  const menuRef = useRef(null);
  const {user, logOut, loading} = UserAuth();


  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setDropOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleDropDown = () => {
    setHover(!hover);
  };
  const handleServiceDropDown = () => {
    setDropOpen(!dropOpen);
  };

  const handleLogOut = async () => {
    try {
      console.log("Logut Working")
      await logOut();
      setHover(false);
      router.push("/");
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };
  function handleNavigation(targetPath) {
    if (targetPath.startsWith("#")) {
      setMenuOpen(false);
      setHover(false);
      document.body.classList.remove("overflow");
      const element = document.querySelector(targetPath);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (targetPath.startsWith("http")) {
      window.location.href = targetPath;
    } else if (router.pathname !== targetPath) {
      setMenuOpen(false);
      setHover(false);
      document.body.classList.remove("overflow");
      router.push(targetPath);
      onClose();
    }
  }
  if (loading) {
    return null; // Or a loading spinner, if preferred
  }

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <Link href="/" onClick={handleLinkClick}>
            <Image className='prfec-logo' src={prfec} alt="Logo" />
          </Link>
        </div>

        {!loading && !user ? (
        <div className='navbar-contents'>
          <div className='navbar-contents-category' onClick={handleServiceDropDown}>Services</div>
         {dropOpen && <div className='navbar-service-dropdown'>
            <Link href='/seo'>SEO</Link>
            <Link href='/content'>Content</Link>
            <Link href='/email'>Email</Link>
            <Link href='/sma'>Social Media Advertising</Link>
          </div>}
 
          <div className='navbar-contents-category'>Resources</div>
          <div className='navbar-contents-category'>Contact us</div>
          <Link href="https://prfec.ai/login" className='navbar-login' onClick={handleLinkClick} style={{marginLeft:"10px"}}>Get Started</Link>
        </div>
        ):
        (
          <div className='navbar-contents'>
            <div className="navbar-profile-container" onClick={handleDropDown}>
                <Image className="navbar-profile-image" src={user?.profilePicURL || DefaultProfile} alt="Profile" width={28} height={28} layout="fixed" objectFit="cover" quality={100} />
            </div>

            {hover && (
                  <div className="navbar-profile-dropdown">
                    <div className='navbar-contents-category'>Services</div>
                    <div className='navbar-contents-category'>Resources</div>
                    <div className='navbar-contents-category'>Contact us</div>
                    <Link
                      href="/account-settings"
                      onClick={() => handleNavigation("/account-settings")}
                    >
                      <p>Profile</p>
                    </Link>
                    <Link
                      href="/account-security"
                      onClick={() => handleNavigation("/account-security")}
                    >
                      <p>Security</p>
                    </Link>
                    <p onClick={handleLogOut}>Logout</p>
                  </div>
                )}


          </div>
        )}

        <div className='navbar-menu-icons'>
          {!menuOpen && <Image src={Hamburger} alt="Menu" onClick={handleMenuClick} />}
          {menuOpen && <Image src={Close} alt="Close" onClick={handleMenuClick} />}
        </div>

        {menuOpen && (
          <div ref={menuRef} className="navbar-menu">
            {!loading && !user ? (
              <>
          <div className='navbar-contents-category'>Services</div>
          <div className='navbar-contents-category'>Resources</div>
          <div className='navbar-contents-category'>Contact us</div>
              <Link href="https://prfec.ai/login" className='navbar-login' onClick={handleLinkClick}>Get Started</Link>
              </>
            ) : (
              <>
          <div className='navbar-contents-category'>Services</div>
          <div className='navbar-contents-category'>Resources</div>
          <div className='navbar-contents-category'>Contact us</div>
                <Link href="/account-settings" onClick={() => handleNavigation("/account-settings")}  >
                  <p>Profile</p>
                </Link>
                <Link href="/account-security" onClick={() => handleNavigation("/account-security")} >
                  <p>Security</p>
                </Link>
                <p onClick={handleLogOut}>Logout</p>
            </>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
