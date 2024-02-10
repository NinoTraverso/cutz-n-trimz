import React, { useEffect } from "react";
import $ from "jquery";

function ServicesPL() {
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
          <h1 className="highlightedTextLarge mt-5">Usługi</h1>
          <h3 className="col-8 col-md-6 text-center mx-auto">
            W <span className="highlightedTextPink">cutzNtrimz</span> oferujemy
            szeroki zakres profesjonalnych usług fryzjerskich, abyś zawsze
            wyglądał zadbany i czuł się pewnie. Nasi wykwalifikowani fryzjerzy
            specjalizują się w{" "}
            <span className="highlightedTextBlue">
              precyzyjnych strzyżeniach, przycinaniu brody oraz goleniu gorącym
              ręcznikiem
            </span>
            . Bez względu na to, czy preferujesz klasyczny styl czy nowoczesne
            rozwiązania, jesteśmy dla Ciebie. Twoje zadowolenie jest naszym
            priorytetem.
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
                    <h5 className="ms-3 text-dark">&#40;30 min&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;20
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Tradycyjne techniki łączone z indywidualnym podejściem, tworzą
                  wszechstronne i dopracowane cięcie, które odpowiada Twoim
                  preferencjom.
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
                    <h5 className="ms-3 text-dark">&#40;40 min&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;24
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Precyzyjne stylizacje i spersonalizowane dotknięcia dla
                  wyrafinowanego i nowoczesnego wyglądu, który wyróżnia Cię
                  spośród innych.
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
                    <h5 className="ms-3 text-dark">&#40;55 min&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;32
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Spersonalizowana konsultacja i uwaga na szczegóły skutkują
                  dopracowanym i ekskluzywnym strzyżeniem, dając pewność i
                  odświeżenie.
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
                    <h5 className="ms-3 text-dark">&#40;20 min&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;14
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Nasi doświadczeni fryzjerzy dopasują i wyciężą Twoją brodę do
                  perfekcji, zapewniając czysty i schludny wygląd, który
                  podkreśla całą Twoją prezencję.
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
                    <h5 className="ms-3 text-dark">&#40;25 min&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;18
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Zrelaksuj się, gdy używamy gorących ręczników i produktów
                  premium, aby zapewnić Ci dokładne i komfortowe golenie,
                  pozostawiając Twoją skórę gładką i odnowioną.
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
                    <h5 className="ms-3 text-dark">&#40;35 min&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;22
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Precyzyjne przycinanie i pielęgnacja, co skutkuje zadbana i
                  wyrazistą brodą, która podkreśla Twój wygląd.
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
                    <h5 className="ms-3 text-dark">&#40;50 min&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;28
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Ciesz się spersonalizowanym strzyżeniem i stylizacją brody,
                  która podkreśla Twoje cechy i sprawia, że wyglądasz zadbany i
                  elegancko.
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
                    <h5 className="ms-3 text-dark">&#40;65 min&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;36
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Doświadcz eksperckich technik stylizacji i wysokiej jakości
                  produktów, aby uzyskać wyrafinowany i elegancki wygląd,
                  odzwierciedlający Twój unikalny styl.
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
                    <h5 className="ms-3 text-dark">&#40;80 min&#41;</h5>
                  </div>
                  <h4
                    className="me-3 highlightedText"
                    style={{ color: "#d69a85" }}
                  >
                    &#36;44
                  </h4>
                </div>
                <h5 className="ms-2 me-3 text-white-50">
                  Kompleksowa stylizacja włosów i brody z luksusowymi dodatkami
                  i spersonalizowaną uwagą, dla pewnego siebie wyglądu.
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

export default ServicesPL;
