import React from "react";
import { Link } from "react-router-dom";
// import MenuButton from './MenuButton'
import CartButton from "./CartButton";
import styles from "./styles.module.css";
import { useProduct } from "../../Context/ProductContext";
import { useAuth } from "../../Context/AuthContext";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, LogoutIcon } from "@heroicons/react/outline";
import NAVIGATION from "../../Config/navbarItemList";
import logo from "../../Assets/logo.png";
import HeroImage from "../Hero";
const Navbar = () => {
  const { categories, setCategory } = useProduct();
  const { loggedIn, currentUser, setIsSubmitting, logout } = useAuth();

  const handleLogout = async () => {
    setIsSubmitting(true);
    try {
      await logout();
    } catch {
      alert("Error");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto pt-4 pb-6 px-4">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-9 w-9" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-9 w-9" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className={styles.logo}>
                    <img
                      alt="logo"
                      src={logo}
                      to="/"
                      width="150px"
                      height="75px"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6"></div>
                </div>
                <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <div className="ml-3 relative hidden sm:block">
                    <MenuButton />
                  </div> */}
                  <div className="ml-3 relative">
                    <CartButton />
                  </div>
                  {/* Profile dropdown */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className={styles.disclosurePanel}>
              <div>
       
                {categories &&
                  categories.map((item, index) => {
                    return (
                      <div key={`${item}-${index}`}>
                        <Link
                          className={styles.categoryLink}
                          to={`/${item.toLowerCase()}`}
                          onClick={() => {
                            setCategory(item.toLowerCase());
                          }}
                        >
                          <Disclosure.Button className={`${styles.disclosureButton}`}>
                          <h1 className="truncate">{item}</h1>
                  </Disclosure.Button>
                         
                        </Link>
                      </div>
                    );
                  })}

                <Link
                  className={styles.categoryLink}
                  to="/"
                  onClick={() => setCategory("")}
                >
                  <Disclosure.Button className={`${styles.disclosureButton}`}>
                    الجميع
                  </Disclosure.Button>
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="bg-zinc-900/10 mx-auto h-[1.1px] shadow-sm shadow-zinc-900/10 px-12"></div>
      <div>
        {/* <HeroImage /> */}
      </div>
      <nav className={styles.categoryNav}>
        <div>
          <Link
            className={styles.categoryLink}
            to="/"
            onClick={() => setCategory("")}
          >
            <h1 className="truncate">الجميع</h1>
          </Link>
        </div>
        {categories &&
          categories.map((item, index) => {
            return (
              <div key={`${item}-${index}`}>
                <Link
                  className={styles.categoryLink}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => {
                    setCategory(item.toLowerCase());
                  }}
                >
                  <h1 className="truncate">{item}</h1>
                </Link>
              </div>
            );
          })}
      </nav>
      <div className="bg-zinc-900/10 mx-auto h-[1px] shadow-sm shadow-zinc-900/10 px-12"></div>
    </>
  );
};

export default Navbar;
