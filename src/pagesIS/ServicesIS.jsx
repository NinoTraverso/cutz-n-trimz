import React, { useEffect } from "react";
import $ from "jquery";

function ServicesIS() {
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
        <h1>SERVICES ICELANDIC</h1>
        {/*/////////////////////////////////////////////////////////////// MAIN /////////////////////////////////////////////*/}
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block" />
        <div
          id="topBorder"
          className="col-12 d-flex justify-content-center align-items-center"
        >
          <img src="./Assets/ImagesAndIcons/border.svg" alt="topBorder" />
        </div>
        <div className="d-flex flex-column text-center open-mypage mx-auto">
          <h2>SERVICES</h2>
          <h5
            style={{ fontFamily: '"Jost", sans-serif', fontWeight: 300 }}
            className="col-6 text-center mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus,
            cumque saepe a dolorum porro! Necessitatibus ut aliquam sunt nam.
            Omnis, explicabo. Sit, natus dolorum rerum esse sint odit
            laudantium.
          </h5>
        </div>
        <div id="servicesList">
          <div className="d-flex justify-content-center d-block d-xl-none mt-3">
            <img
              src="./Assets/Shop/beardGrooming.jpg"
              alt="beardGroomingImage"
              style={{ width: 500, height: "auto" }}
              className="rounded"
            />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5">
            <div className="gentleman col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
              <h1>Cut</h1>
              <h4>Haircut &amp; styling</h4>
              <p>
                <b>7,500 ISK</b>
              </p>
              <p>
                <i>&#40;40 minutes&#41;</i>
              </p>
            </div>
            <div className="combo col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
              <h1>Cut</h1>
              <h4>Haircut &amp; styling</h4>
              <p>
                <b>13,000 ISK</b>
              </p>
              <p>
                <i>&#40;60 minutes&#41;</i>
              </p>
            </div>
            <div className="luxuryBeard col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
              <h1>Cut</h1>
              <h4>Cut</h4>
              <p>
                <b>6,000 ISK</b>
              </p>
              <p>
                <i>&#40;30 minutes&#41;</i>
              </p>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="sharpen col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
              <h1>Cut</h1>
              <h4>Refresh</h4>
              <p>
                <b>4,000 ISK</b>
              </p>
              <p>
                <i>&#40;25 minutes&#41;</i>
              </p>
            </div>
            <div className="expressFacial col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
              <h1>Cut</h1>
              <h4>Cut</h4>
              <p>
                <b>4,000 ISK</b>
              </p>
              <p>
                <i>&#40;20 minutes&#41;</i>
              </p>
            </div>
            <div className="hotTowelShave col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
              <h1>Cut</h1>
              <h4>Cut</h4>
              <p>
                <b>6,000 ISK</b>
              </p>
              <p>
                <i>&#40;25 minutes&#41;</i>
              </p>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="basicBeardTrim col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
              <h1>Cut</h1>
              <h4>Cut</h4>
              <p>
                <b>4,500 ISK</b>
              </p>
              <p>
                <i>&#40;30 minutes&#41;</i>
              </p>
            </div>
            <div className="browShaping col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
              <h1>Cut</h1>
              <h4>Cut</h4>
              <p>
                <b>4,000 ISK</b>
              </p>
              <p>
                <i>&#40;30 minutes&#41;</i>
              </p>
            </div>
            <div className="royalStag col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
              <h1>Cut</h1>
              <h4>Cut</h4>
              <p>
                <b>18,000 ISK</b>
              </p>
              <p>
                <i>&#40;25 minutes&#41;</i>
              </p>
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

export default ServicesIS;
