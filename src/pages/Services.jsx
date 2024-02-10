import React, { useEffect } from "react";
import $ from "jquery";

function Services() {
  useEffect(() => {
    const preloadElement = document.getElementById("preload");

    const timeoutId = setTimeout(() => {
      if (preloadElement) {
        preloadElement.style.display = "none";
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const preloadElement = document.getElementById("preload");

    const timeoutId = setTimeout(() => {
      if (preloadElement) {
        preloadElement.style.display = "none";

        $(function ($) {
          $("#servicesList").slideDown(4000, function () {
            console.log("Animation complete");
          });
        });
      }
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <div id="preload">
        <div>
          <img
            src="./Assets/ImagesAndIcons/scissor-1.2s-232px.svg"
            alt="Loading Scissors"
          />
        </div>
      </div>
      <main className="mt-2" style={{ zIndex: 0 }}>
        {/*/////////////////////////////////////////////////////////////// MAIN /////////////////////////////////////////////*/}
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block d-md-none" />
        <br className="d-block d-md-none" />
        <br className="d-block d-md-none" />
        <div className="d-flex flex-column text-center open-mypage mx-auto">
          <h1 className="highlightedTextLarge mt-5">Services</h1>
          <h3 className="col-8 col-md-6 text-center mx-auto">
            At <span className="highlightedTextPink">cutzNtrimz</span>, we offer
            a range of expert grooming services to keep you looking sharp and
            feeling confident. Our skilled barbers specialize in{" "}
            <span className="highlightedTextBlue">
              precision haircuts, beard trims, and hot towel shaves
            </span>
            . Whether you're looking for a classic style or a modern twist,
            we've got you covered. Your satisfaction is our priority.
          </h3>
        </div>
        <div
          id="topBorder"
          className="col-12 d-flex justify-content-center align-items-center"
        >
          <img src="./Assets/ImagesAndIcons/border.svg" alt="topBorder" />
        </div>
        <div className="d-flex justify-content-around">
          <div
            id="servicesList"
            className="d-flex flex-column flex-md-row justify-content-around align-items-center flex-wrap "
          >
            <div
              id="hairServices"
              className="d-flex flex-column justify-content-center align-self-center rounded mt-5 mx-3 pb-4"
            >
              <img
                src="/Assets/ImagesAndIcons/hair.png"
                alt="hairIcon"
                className="d-flex justify-content-center align-self-center m-5 p-2 rounded-circle"
              />
              <div className="my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center ms-2">
                    <h2>
                      <span className="highlightedText">Classic Cut</span>
                    </h2>
                    <h5 className="ms-3 text-dark">&#40;30 mins&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;20
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Our Classic Cut combines traditional techniques with
                  personalized attention to create a versatile and refined
                  haircut that suits your preferences.
                </h5>
              </div>
              <div className="d-flex justify-content-center mx-3">
                <hr className="w-75" />
              </div>
              <div className="my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center ms-2">
                    <h2>
                      <span className="highlightedText">Premium Cut</span>
                    </h2>
                    <h5 className="ms-3 text-dark">&#40;40 mins&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;24
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Featuring precision styling and personalized touches for a
                  sophisticated and modern look that sets you apart
                </h5>
              </div>
              <div className="d-flex justify-content-center mx-3">
                <hr className="w-75" />
              </div>
              <div className="my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center ms-2">
                    <h2>
                      <span className="highlightedText">Deluxe Cut</span>
                    </h2>
                    <h5 className="ms-3 text-dark">&#40;55 mins&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;32
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Enjoy a customized consultation and meticulous attention to
                  detail, resulting in a polished and upscale haircut that
                  leaves you feeling confident and refreshed.
                </h5>
              </div>
            </div>
            <div
              id="beardServices"
              className="d-flex flex-column justify-content-center align-self-center rounded mt-5 mx-3 pb-4"
            >
              <img
                src="/Assets/ImagesAndIcons/beard.png"
                alt="hairIcon"
                className="d-flex justify-content-center align-self-center m-5 p-2 rounded-circle"
              />
              <div className="my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center ms-2">
                    <h2>
                      <span className="highlightedText">Beard Trim</span>
                    </h2>
                    <h5 className="ms-3 text-dark">&#40;20 mins&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;14
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Our expert barbers will shape and sculpt your beard to
                  perfection, ensuring a clean and polished appearance that
                  complements your overall look.
                </h5>
              </div>
              <div className="d-flex justify-content-center mx-3">
                <hr className="w-75" />
              </div>
              <div className="my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center ms-2">
                    <h2>
                      <span className="highlightedText">Hot Towel Shave</span>
                    </h2>
                    <h5 className="ms-3 text-dark">&#40;25 mins&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;18
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Relax as we use hot towels and premium products to provide you
                  with a close and comfortable shave, leaving your skin smooth
                  and rejuvenated.
                </h5>
              </div>
              <div className="d-flex justify-content-center mx-3">
                <hr className="w-75" />
              </div>
              <div className="my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center ms-2">
                    <h2>
                      <span className="highlightedText">Deluxe Trim</span>
                    </h2>
                    <h5 className="ms-3 text-dark">&#40;35 mins&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;22
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Precision trimming and conditioning, resulting in a
                  well-maintained and distinguished beard that enhances your
                  appearance.
                </h5>
              </div>
            </div>
            <div
              id="hairBeardServices"
              className="d-flex flex-column justify-content-center align-self-center rounded mt-5 mx-3 pt-2 pb-5"
            >
              <img
                src="/Assets/ImagesAndIcons/beardHair.png"
                alt="hairIcon"
                className="d-flex justify-content-center align-self-center m-5 p-2 rounded-circle"
              />
              <div className="my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center ms-2">
                    <h2>
                      <span className="highlightedText">Classic Groom</span>
                    </h2>
                    <h5 className="ms-3 text-dark">&#40;50 mins&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;28
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Enjoy a personalized haircut and beard grooming session that
                  accentuates your features and leaves you looking sharp and
                  well-groomed.
                </h5>
              </div>
              <div className="d-flex justify-content-center mx-3">
                <hr className="w-75" />
              </div>
              <div className="my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center ms-2">
                    <h2>
                      <span className="highlightedText">Luxury Groom</span>
                    </h2>
                    <h5 className="ms-3 text-dark">&#40;65 mins&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;36
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Experience expert styling techniques and premium products for
                  a sophisticated and refined look that reflects your unique
                  style.
                </h5>
              </div>
              <div className="d-flex justify-content-center mx-3">
                <hr className="w-75" />
              </div>
              <div className="my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center ms-2">
                    <h2>
                      <span className="highlightedText">Deluxe Groom</span>
                    </h2>
                    <h5 className="ms-3 text-dark">&#40;80 mins&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;44
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Comprehensive haircut and beard grooming session with
                  pampering extras and personalized attention for a confident
                  appearance.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div
          id="bottomBorder"
          className="col-12 d-flex justify-content-center align-items-center"
        >
          <img src="./Assets/ImagesAndIcons/border.svg" alt="bottomBorder" />
        </div>
      </main>
    </div>
  );
}

export default Services;
