import React, { useEffect } from "react";

function HomeIS() {
  useEffect(() => {
    const preloadElement = document.getElementById("preload");

    const timeoutId = setTimeout(() => {
      if (preloadElement) {
        preloadElement.style.display = "none";
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
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

        <br className="d-none d-md-block" />
        <br className="d-none d-md-block" />
        <br className="d-none d-md-block" />
        <br className="d-none d-md-block" />
        <br className="d-block d-xl-none" />
        <br className="d-block d-lg-none" />
        <br className="d-block d-md-none" />
        <br className="d-block d-md-none" />
        <br className="d-block d-md-none" />
        <br className="d-block d-md-none" />
        <br className="d-block d-md-none" />
        <br className="d-block d-md-none" />

        <div id="mainHomeImageIntro" className="mb-5">
          <img src="/Assets/Shop/homeMainIntroImage.jpg" alt="barberTools" />
        </div>

        <div
          id="introOneContainer"
          className="d-flex flex-column flex-xl-row mt-3 justify-content-around align-items-center"
        >
          <h2 id="introOne" className="text-center text-wrap mb-4 mx-5">
            Velkomin/n á <span className="highlightedTextPink">cutNtrimz</span>,
            þar sem
            <span className="highlightedTextBlue"> hefð mætir nútíma</span>.
            Komdu inn í gestrisna rými okkar og upplifið listskap klasískrar
            rakvélstílunar sem blandast saman við samtímalega aðferðir. Hæfir
            rakkararnir okkar hafa ákveðið sér að smíða sérsníðna klippingu,
            nákvæmar skeggsnippingar og fíngerða gæðingaþjónustu til að lyfta
            útliti þínu og{" "}
            <span className="highlightedTextBlue">auka sjálfsöryggið þitt</span>
            . Hvort sem þú leitar að hefðbundinni herraríklippingu eða
            trendsettandi nýjum stíl, trygging okkar um
            <span className="highlightedTextBlue">
              {" "}
              gæði og athygli á smáatriðum{" "}
            </span>
            tryggir minningaríka og ánægjulega upplifun.
          </h2>

          <div
            id="manBeardContainer"
            className="w-50 h-75 mx-3 rounded d-flex justify-content-center p-3"
          >
            <img
              src="./Assets/ImagesAndIcons/man-3263509_1920.png"
              rel="haircut"
              className="manBeard rounded"
              alt="waitingRoom"
            />
          </div>
        </div>
        <div
          style={{ width: "100%", height: 100 }}
          className="d-none d-xl-block"
        />
        {/*/////////////////////////////////////////////////////////////// BARBER /////////////////////////////////////////////*/}
        <div
          id="introTwoContainer"
          className="d-flex flex-column flex-xl-row mt-3 justify-content-around align-items-center"
        >
          <div className="w-50 h-75 mx-3 rounded d-flex justify-content-center p-3">
            <img
              src="./Assets/Shop/beardGrooming.jpg"
              rel="haircut"
              className="beardGrooming rounded"
              alt="waitingRoom"
            />
          </div>
          <h2 id="introOne" className="text-center mb-4 text-wrap mx-5">
            Trygging okkar um{" "}
            <span className="highlightedTextBlue">framúrskarandi gæði</span>
            tryggir að hver heimsókn lætur þig finna þig öruggan og ánægðan. Með
            frágangi af{" "}
            <span className="highlightedTextBlue">ánægðum viðskiptavinum</span>
            og helgi við að veita{" "}
            <span className="highlightedTextBlue">úrvals þjónustu</span>
            er útlit þitt fyrir hreinsun í efstu sæti. Bókaðu tíma þinn í dag og
            uppgötvaðu mismuninn hjá{" "}
            <span className="highlightedTextPink">cutzNtrimz</span>.
          </h2>
        </div>
        <div
          style={{ width: "100%", height: 120 }}
          className="d-none d-xxl-block"
        />
        <div
          style={{ width: "100%", height: 100 }}
          className="d-none d-xl-block"
        />
        {/*/////////////////////////////////////////////////////////////// CAROUSEL HAIRCUTS (>MD) /////////////////////////////////////////////*/}
        <div
          id="carouselHaircuts"
          className="carousel slide w-100 mx-auto mt-5 d-none d-md-block mb-2"
          data-bs-ride="carousel"
          style={{ height: 300 }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut.jpg"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut2.jpg"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut3.jpg"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut4.jpg"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut5.jpg"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut6.jpg"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut8.jpg"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut10.jpg"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut9.jpg"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut11.jpg"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut12.jpg"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut13.jpg"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
          </div>
        </div>
        <br className="d-none d-md-block" />
        <br className="d-none d-md-block" />
        <br className="d-none d-xl-block" />
        <br className="d-none d-xl-block" />
        <br className="d-none d-xl-block" />
        {/*/////////////////////////////////////////////////////////////// CAROUSEL HAIRCUTS (<MD) /////////////////////////////////////////////*/}
        <div
          id="carouselHaircutsmd"
          className="carousel slide w-100 mx-auto mt-5 d-block d-md-none mb-3 d-flex align-items-center"
          data-bs-ride="carousel"
          style={{ height: 500 }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut.jpg"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut2.jpg"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut3.jpg"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut4.jpg"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut5.jpg"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut6.jpg"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut8.jpg"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut9.jpg"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut10.jpg"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut11.jpg"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut12.jpg"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut13.jpg"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
          </div>
        </div>
        <br className="d-none d-sm-block d-md-none" />
        <br className="d-block d-md-none" />
        {/*/////////////////////////////////////////////////////////////// LOUNGE /////////////////////////////////////////////*/}
        <div
          style={{ width: "100%", height: 120 }}
          className="d-none d-xxl-block"
        />
        <div
          style={{ width: "100%", height: 100 }}
          className="d-none d-xl-block"
        />
        <div
          id="introThreeContainer"
          className="d-flex flex-column flex-xl-row mt-3 justify-content-around align-items-center"
        >
          <h2 id="introThree" className="text-center mb-4 mx-5">
            Hönnuður fyrir þinn þægindi,{" "}
            <span className="highlightedTextBlue">
              slakaðu af í salnum okkar
            </span>
            sem býður upp á hlýlegan flóttastað þar sem þú getur njótað{" "}
            <span className="highlightedTextBlue">ókeypis drykkjar</span>á meðan
            þú bíður eða eftir að hafa fengið þína hreinsun. Með þægilegum sætum
            og gestrisnum andrúmslofti er það fullkominn staður til að{" "}
            <span className="highlightedTextBlue">endurnýja orkuna</span> áður
            en eða eftir tímann þinn.
          </h2>

          <div className="w-50 h-75 mx-3 rounded d-flex justify-content-center p-3">
            <img
              src="./Assets/Shop/sofa-186633_1920.jpg"
              rel="haircut"
              className="loungePhoto rounded"
              alt="waitingRoom"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomeIS;
