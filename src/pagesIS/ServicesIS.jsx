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
        {/*/////////////////////////////////////////////////////////////// MAIN /////////////////////////////////////////////*/}
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block d-md-none" />
        <br className="d-block d-md-none" />
        <br className="d-block d-md-none" />
        <div className="d-flex flex-column text-center open-mypage mx-auto">
          <h1 className="highlightedTextLarge mt-5">þjónusta</h1>
          <h3 className="col-8 col-md-6 text-center mx-auto">
            Á <span className="highlightedTextPink">cutzNtrimz</span> bjóðum við
            upp á fjölda sérfræðingaþjónustu til að halda þér velklæddum og
            sjálfstraustsfullum. Hæfir hárklipparar okkar sérhæfa sig í{" "}
            <span className="highlightedTextBlue">
              nákvæmum hárskörunum, skeggklippingum og heitum handklappaklippum
            </span>
            . Hvort sem þú ert að leita að klassískum stíl eða nútímalegum
            snerti, við sjáum um það. Þín ánægja er okkar forgangur.
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
                    <h5 className="ms-3 text-dark">&#40;30 mín&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#ffffff" }}
                  >
                    &#36;20
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Með hefðbundnum tækni og persónulegri athygli býður Klassískur
                  Klippa upp á viðbrögð sem henta þínum kostum.
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
                    <h5 className="ms-3 text-dark">&#40;40 mín&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#ffffff" }}
                  >
                    &#36;24
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Með nákvæmri stílun og persónulegum fjarlægðum fyrir
                  stílhreinan og nútímalegan útlit sem aðgreinir þig.
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
                    <h5 className="ms-3 text-dark">&#40;55 mín&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#ffffff" }}
                  >
                    &#36;32
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Njóttu aðlögunar og nákvæmri athygli við smáatriði, sem leiðir
                  til snyrtilegs og uppstigaðslegan klipping sem skilar
                  sjálfstrausti og ferskni.
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
                    <h5 className="ms-3 text-dark">&#40;20 mín&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#ffffff" }}
                  >
                    &#36;14
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Hárklipparar okkar munu forma og mynda skegg þitt til
                  fullkomnunar, tryggjandi hreint og snyrtilegt útlit sem bætir
                  útlit þitt.
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
                    <h5 className="ms-3 text-dark">&#40;25 mín&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#ffffff" }}
                  >
                    &#36;18
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Slakaðu á meðan við notum heitar handklappar og fyrstekkja
                  vara til að bjóða þér nálægt og þægilegt handklapp, sem skilar
                  húðinni þinni slétt og endurnýjað.
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
                    <h5 className="ms-3 text-dark">&#40;35 mín&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#ffffff" }}
                  >
                    &#36;22
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Nákvæm skeggklipping og þvott, sem leiðir til vel viðhaldnar
                  og áberandi skeggs sem bætir útlit þitt.
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
                    <h5 className="ms-3 text-dark">&#40;50 mín&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#ffffff" }}
                  >
                    &#36;28
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Njóttu persónulegs hárklippingar og skeggstellingar sem leggja
                  áherslu á þín einkenni og skila þér velklæddum og snyrtilegum.
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
                    <h5 className="ms-3 text-dark">&#40;65 mín&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#ffffff" }}
                  >
                    &#36;36
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Upplifið sérfræðilegar stílstækni og fyrstekkja vara fyrir
                  stílhreinan og rafmagnslegan útlit sem endurspegla þinn eigin
                  stíl.
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
                    <h5 className="ms-3 text-dark">&#40;80 mín&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#ffffff" }}
                  >
                    &#36;44
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Heildstæð hárklipping og skeggstelling með nuddandi aukahlutum
                  og persónulegri athygli fyrir sjálfstraustandi útlit.
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

export default ServicesIS;
