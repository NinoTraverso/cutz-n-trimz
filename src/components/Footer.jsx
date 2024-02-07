import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="d-flex flex-column text-light align-items-center mt-5">
          <h1 className="mt-2 mb-4 w-75 d-flex justify-content-center companyName">
            cutzNtrimz
          </h1>
          <div className="col-8 d-flex flex-column flex-lg-row justify-content-around align-items-center">
            <div className="logoContainerFooter d-flex flex-row justify-content-center align-content-center me-0 me-md-2">
              <img
                src="./Assets/Logo/cutzNtrimzLogo.png"
                className="logoContainerFooter rounded"
                style={{ border: "solid 2px #383233" }}
                alt="logo"
              />
              <div className="d-flex flex-column justify-content-start align-content-center ms-4">
                <div className="d-flex flex-row justify-content-center border-bottom mb-2 pb-3">
                  <a
                    href="https://www.youtube.com/watch?v=Yysy2QMFuO8/"
                    className="mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={48}
                      width={48}
                      viewBox="0 0 448 512"
                    >
                      {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                      <defs>
                        <linearGradient
                          id="grad1"
                          x1="0%"
                          y1="0%"
                          x2="75%"
                          y2="0%"
                        >
                          <stop offset="0%" style={{ stopColor: "#f9ce34" }} />
                          <stop offset="50%" style={{ stopColor: "#ee2a7b" }} />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#6228d7" }}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        fill="url(#grad1)"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=32WXKzwdNTw"
                    className="mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={42}
                      width={46}
                      viewBox="0 0 512 512"
                    >
                      {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                      <defs>
                        <linearGradient
                          id="grad2"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" style={{ stopColor: "#1877f2" }} />
                        </linearGradient>
                      </defs>
                      <path
                        d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                        fill="url(#grad2)"
                      />
                    </svg>
                  </a>
                </div>
                <div className="d-flex flex-row align-content-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={28}
                    width={28}
                    viewBox="0 0 512 512"
                    className="ms-2"
                  >
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                  <p className="mx-2">info@cutzNtrimz.com</p>
                </div>
                <div className="d-flex flex-row align-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={28}
                    width={28}
                    viewBox="0 0 512 512"
                    className="ms-2"
                  >
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                    <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                  <p className="mx-2">Mon-Fri: 9-18</p>
                </div>
                <div className="d-flex flex-row align-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={28}
                    width={28}
                    viewBox="0 0 512 512"
                    className="ms-2"
                  >
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  <p className="mx-2">+1 234 567 8910</p>
                </div>
                <div className="d-flex flex-row align-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={28}
                    width={28}
                    viewBox="0 0 384 512"
                    className="ms-2"
                  >
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <p className="mx-2">IceWall 54, Antarctica</p>
                </div>
              </div>
            </div>
            <div id="googleMaps">
              <iframe
                title="storeMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22650034.730859995!2d0!3d-69.72697362493312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b9967b3390754b%3A0x6e52be1f740f2075!2sAntartide!5e0!3m2!1sit!2sis!4v1707326512631!5m2!1sit!2sis"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded mt-4 mt-lg-0 ms-0 ms-md-2"
              />
            </div>
          </div>
        </div>
        <p className="pb-0 mb-0 mt-5 ms-1 d-flex flex-row align-items-center justify-content-center">
          Copyright © 2022- cutzNtrimz - All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
