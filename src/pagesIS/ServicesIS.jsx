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
          <h1 className="highlightedTextLarge mt-5">Services</h1>
          <h3 className="col-8 col-md-6 text-center mx-auto">
            Á <span className="highlightedTextPink">cutzNtrimz</span>, bjóðum
            við upp á fjölda sérfræðinga í hreinsun til að halda þér vel útliti
            og öruggum á tilfinningum. Hæfir rakkararnir okkar sérhæfa sig í{" "}
            <span className="highlightedTextBlue">
              nákvæmum klippingum, skeggsnippingum og heitum handklæðahöggunum
            </span>
            . Hvort sem þú ert að leita að hefðbundnum stíl eða nútímalegri
            snúning, við höfum þig hér. Þín ánægja er okkar forgangur.
          </h3>
        </div>
        <div
          id="topBorder"
          className="col-12 d-flex justify-content-center align-items-center"
        >
          <img src="./Assets/ImagesAndIcons/border.svg" alt="topBorder" />
        </div>

        <div
          id="servicesList"
          className="d-flex flex-column flex-md-row justify-content-around align-items-center flex-wrap"
        >
          <div
            id="hairServices"
            className="d-flex flex-column justify-content-center align-self-center rounded mt-5 mx-3"
          >
            <img
              src="/Assets/ImagesAndIcons/hair.png"
              alt="hairIcon"
              className="d-flex justify-content-center align-self-center m-5 px-3 rounded-circle"
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
                Klassíski klippingurinn okkar sameinar hefðbundnar aðferðir með
                persónulegri athygli til að búa til fjölnota og fínn klipping
                sem passar villur þínar.
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
                Með nákvæmum stílun og persónulegum nálgunum fyrir snjallsýnað
                og nútímalegt útlit sem skilur þig frá öðrum.
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
                Njóttu sérsniðins ráðgjafar og hinni nákvæmu athugun að
                smáatriðum, sem leiðir til ljómandi og hátíðarlega klippingar
                sem lætur þig finna þig öruggan og endurnýjaðan.
              </h5>
            </div>
          </div>
          <div
            id="beardServices"
            className="d-flex flex-column justify-content-center align-self-center rounded mt-5 mx-3"
          >
            <img
              src="/Assets/ImagesAndIcons/beard.png"
              alt="hairIcon"
              className="d-flex justify-content-center align-self-center m-5 px-3 rounded-circle"
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
                Hæfir rakkararnir okkar munu forma og höggva skegg þitt til
                fullkomnunar, tryggjandi hreint og gljáandi útlit sem bætir
                saman með almennt útlit þitt.
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
                Slakaðu á meðan við notum heita handklæði og fyrst flokkaðar
                vörur til að veita þér þéttan og þægilegan rakstur, lætur húðina
                þína samanstrikna og endurnýjaða.
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
                Nákvæm skeggsníp og húðrak, sem leiðir til vel viðhaldinnar og
                frábærar skeggs sem lyftir fram útlitið þitt.
              </h5>
            </div>
          </div>
          <div
            id="hairBeardServices"
            className="d-flex flex-column justify-content-center align-self-center rounded mt-5 mx-3"
          >
            <img
              src="/Assets/ImagesAndIcons/beardHair.png"
              alt="hairIcon"
              className="d-flex justify-content-center align-self-center m-5 px-3 rounded-circle"
            />
            <div className="my-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center ms-2">
                  <h2>
                    <span className="highlightedText">Classic Cut & Trim</span>
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
                Njóttu sérsniðinna klippingar og skeggsraksturs sem leggur
                áherslu á einkenni þín og lætur þig líta skarpt og velskipað út.
              </h5>
            </div>
            <div className="d-flex justify-content-center mx-3">
              <hr className="w-75" />
            </div>
            <div className="my-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center ms-2">
                  <h2>
                    <span className="highlightedText">Luxury Cut & Trim</span>
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
                Upplifið sérfræðingarstílun og háþróaða vörur fyrir stílhreint
                og fínt útlit sem speglar þinn eigin stíl.
              </h5>
            </div>
            <div className="d-flex justify-content-center mx-3">
              <hr className="w-75" />
            </div>
            <div className="my-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center ms-2">
                  <h2>
                    <span className="highlightedText">Deluxe Package</span>
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
                Fáðu gründarlega klippingu og skeggsrakstur, fullbúin með
                hressandi aukahlutum og persónulegri athygli, fyrir gljáandi og
                örugga framkomu.
              </h5>
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
