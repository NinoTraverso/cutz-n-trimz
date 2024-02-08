import React, { useEffect } from "react";

function HomePL() {
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
            Witaj w <span className="highlightedTextPink">cutNtrimz</span>,
            gdzie{" "}
            <span className="highlightedTextBlue">
              tradycja spotyka się z nowoczesnością
            </span>
            . Wejdź do naszej przyjaznej przestrzeni i doświadcz sztuki
            klasycznego barbering'u połączonej z nowoczesnymi technikami. Nasi
            wykwalifikowani fryzjerzy poświęcają się tworzeniu dopasowanych
            fryzur, precyzyjnych strzyżeń brody i skrupulatnej pielęgnacji, aby
            podnieść Twój wygląd i{" "}
            <span className="highlightedTextBlue">
              wzmacniać Twoją pewność siebie
            </span>
            . Czy szukasz tradycyjnego fryzjera dla dżentelmenów czy
            nowoczesnego, modnego stylu, nasze zobowiązanie do{" "}
            <span className="highlightedTextBlue">
              jakości i dbałości o detale
            </span>
            gwarantuje niezapomniane i satysfakcjonujące doświadczenie.
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
            Nasze zobowiązanie do{" "}
            <span className="highlightedTextBlue">doskonałości</span> zapewnia,
            że każda wizyta sprawia, że ​​czujesz się pewnie i zadowolony.
            Dzięki historii{" "}
            <span className="highlightedTextBlue">zadowolonych klientów</span>i
            oddaniu się świadczeniu{" "}
            <span className="highlightedTextBlue">wyjątkowej</span> obsługi,
            Twoje doświadczenie z pielęgnacją jest naszym najwyższym
            priorytetem. Umów się na wizytę jeszcze dziś i odkryj różnicę w{" "}
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
            Zaprojektowany dla Twojego komfortu,{" "}
            <span className="highlightedTextBlue">
              zrelaksuj się w naszym salonie
            </span>
            , który oferuje przytulne miejsce, gdzie możesz delektować się{" "}
            <span className="highlightedTextBlue">darmowym napojem</span>
            podczas oczekiwania lub po sesji pielęgnacji. Z wygodnymi
            siedzeniami i przyjazną atmosferą, to idealne miejsce na{" "}
            <span className="highlightedTextBlue">odnowienie sił</span> przed
            lub po Twojej wizycie.
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

export default HomePL;
