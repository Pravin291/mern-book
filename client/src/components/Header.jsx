import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import ".././App.css";
import { useSelector } from "react-redux";
import { Avatar, Button, Dropdown } from "flowbite-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to={"/"}
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered />
              )}
            </button>
          </div>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={"/dashboard?=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item >Sign Out</Dropdown.Item>
            </Dropdown>
          ) : (
            <div className="flex items-center">
              <Link to={"/signin"}>
                <Button gradientDuoTone={"purpleToBlue"} className="" outline>
                  Login
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } `}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base  text-white uppercase cursor-pointer "
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
