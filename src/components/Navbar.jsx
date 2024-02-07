import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/*-------------------------------------------- ENGLISH PAGES (default) ------------------------------------------------ */
import Main from "../pages/Main";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Products from "../pages/Products";
import About from "../pages/About";

/*-------------------------------------------- ICELANDIC PAGES ------------------------------------------------------- */

import HomeIS from "../pagesIS/HomeIS";
import ServicesIS from "../pagesIS/ServicesIS";
import ProductsIS from "../pagesIS/ProductsIS";
import AboutIS from "../pagesIS/AboutIS";

/*-------------------------------------------- POLISH PAGES ------------------------------------------------------- */

import HomePL from "../pagesPL/HomePL";
import ServicesPL from "../pagesPL/ServicesPL";
import ProductsPL from "../pagesPL/ProductsPL";
import AboutPL from "../pagesPL/AboutPL";

function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const getHomeLink = () => {
    switch (selectedLanguage) {
      case "EN":
        return "/home";
      case "IS":
        return "/HomeIS";
      case "PL":
        return "/HomePL";
      default:
        return "/home";
    }
  };

  const getServiceLink = () => {
    switch (selectedLanguage) {
      case "EN":
        return "/Services";
      case "IS":
        return "/ServicesIS";
      case "PL":
        return "/ServicesPL";
      default:
        return "/Services";
    }
  };

  const getProductLink = () => {
    switch (selectedLanguage) {
      case "EN":
        return "/Products";
      case "IS":
        return "/ProductsIS";
      case "PL":
        return "/ProductsPL";
      default:
        return "/Products";
    }
  };

  const getAboutLink = () => {
    switch (selectedLanguage) {
      case "EN":
        return "/About";
      case "IS":
        return "/AboutIS";
      case "PL":
        return "/AboutPL";
      default:
        return "/About";
    }
  };

  const getPageName = (pageName) => {
    switch (selectedLanguage) {
      case "EN":
        return pageName;
      case "IS":
        return getIcelandicTranslation(pageName);
      case "PL":
        return getPolishTranslation(pageName);
      default:
        return pageName;
    }
  };

  const getIcelandicTranslation = (pageName) => {
    switch (pageName) {
      case "Home":
        return "Heim";
      case "Services":
        return "Þjónustur";
      case "Products":
        return "Vara";
      case "About":
        return "Um okkur";
      default:
        return pageName;
    }
  };

  const getPolishTranslation = (pageName) => {
    switch (pageName) {
      case "Home":
        return "Dom";
      case "Services":
        return "Usługi";
      case "Products":
        return "Produkty";
      case "About":
        return "O nas";
      default:
        return pageName;
    }
  };

  return (
    <div>
      <BrowserRouter>
        <nav className="d-flex flex-row justify-content-start align-items-center mb-0 mb-md-5 d-none d-md-flex">
          <div className="logoContainer">
            <img
              src="./Assets/Logo/cutzNtrimzLogo.png"
              className="logoContainer ms-5 rounded"
              style={{ border: "solid 2px #383233" }}
              alt="logo"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center me-5">
            <Link
              to={getHomeLink()}
              className="text-decoration-none mt-5 mx-3"
              style={{ color: "#383233" }}
            >
              <h4>{getPageName("Home")}</h4>
            </Link>

            <Link
              to={getServiceLink()}
              className="text-decoration-none mt-5 mx-3"
              style={{ color: "#383233" }}
            >
              <h4>{getPageName("Services")}</h4>
            </Link>

            <Link
              to={getProductLink()}
              className="text-decoration-none mt-5 mx-3"
              style={{ color: "#383233" }}
            >
              <h4>{getPageName("Products")}</h4>
            </Link>

            <Link
              to={getAboutLink()}
              className="text-decoration-none mt-5 mx-3"
              style={{ color: "#383233" }}
            >
              <h4>{getPageName("About")}</h4>
            </Link>

            <div className="dropdown mt-4 pt-3">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedLanguage}
              </button>
              <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                {selectedLanguage !== "EN" && (
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/home"
                      onClick={() => handleLanguageChange("EN")}
                    >
                      EN
                    </Link>
                  </li>
                )}
                {selectedLanguage !== "IS" && (
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/homeIS"
                      onClick={() => handleLanguageChange("IS")}
                    >
                      IS
                    </Link>
                  </li>
                )}
                {selectedLanguage !== "PL" && (
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/homePL"
                      onClick={() => handleLanguageChange("PL")}
                    >
                      PL
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="d-none d-xl-block d-flex align-items-center mt-5 pt-1 ms-4 ps-5">
              <h5
                className="ms-xxl-5 ps-xxl-5 mx-2"
                style={{ whiteSpace: "nowrap" }}
              >
                +1 234 567 8910
              </h5>
            </div>
            <div className="d-none d-xl-block d-flex align-items-center mt-5 pt-1">
              <h5 style={{ whiteSpace: "nowrap" }}>|</h5>
            </div>
            <div className="d-none d-xl-block d-flex align-items-center mt-5 pt-1">
              <h5 className="mx-2" style={{ whiteSpace: "nowrap" }}>
                info@cutzntrimz.com
              </h5>
            </div>
          </div>
        </nav>
        <nav className="d-flex flex-row justify-content-center align-items-center py-5 mt-5 mb-5 mb-md-5 d-block d-md-none">
          <div className="d-flex flex-column ms-5">
            <div className="logoContainer col-12 mx-auto mb-5">
              <img
                src="./Assets/Logo/cutzNtrimzLogo.png"
                className="logoContainerSmallNav rounded"
                style={{ border: "solid 2px #383233" }}
                alt="logo"
              />
            </div>
            <br />
            <div className="d-flex mt-5 pt-3 pe-5 align-items-center">
              <Link
                to={getHomeLink()}
                className="text-decoration-none mt-5 mx-3"
                style={{ color: "#383233" }}
              >
                <h4>{getPageName("Home")}</h4>
              </Link>

              <Link
                to={getServiceLink()}
                className="text-decoration-none mt-5 mx-3"
                style={{ color: "#383233" }}
              >
                <h4>{getPageName("Services")}</h4>
              </Link>

              <Link
                to={getProductLink()}
                className="text-decoration-none mt-5 mx-3"
                style={{ color: "#383233" }}
              >
                <h4>{getPageName("Products")}</h4>
              </Link>

              <Link
                to={getAboutLink()}
                className="text-decoration-none mt-5 mx-3"
                style={{ color: "#383233" }}
              >
                <h4>{getPageName("About")}</h4>
              </Link>
              <div className="dropdown mt-4 pt-3">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {selectedLanguage}
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="languageDropdown"
                >
                  {selectedLanguage !== "EN" && (
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Home"
                        onClick={() => handleLanguageChange("EN")}
                      >
                        EN
                      </Link>
                    </li>
                  )}
                  {selectedLanguage !== "IS" && (
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/HomeIS"
                        onClick={() => handleLanguageChange("IS")}
                      >
                        IS
                      </Link>
                    </li>
                  )}
                  {selectedLanguage !== "PL" && (
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/HomePL"
                        onClick={() => handleLanguageChange("PL")}
                      >
                        PL
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/HomeIS" element={<HomeIS />} />
          <Route path="/ServicesIS" element={<ServicesIS />} />
          <Route path="/ProductsIS" element={<ProductsIS />} />
          <Route path="/AboutIS" element={<AboutIS />} />
          <Route path="/HomePL" element={<HomePL />} />
          <Route path="/ServicesPL" element={<ServicesPL />} />
          <Route path="/ProductsPL" element={<ProductsPL />} />
          <Route path="/AboutPL" element={<AboutPL />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
