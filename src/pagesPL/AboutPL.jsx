import React, { useEffect } from "react";

function AboutPL() {
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
      <main className="mt-2 mt-5" style={{ zIndex: 0 }}>
        {/*/////////////////////////////////////////////////////////////// MAIN /////////////////////////////////////////////*/}
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block" />
        <h1 className="highlightedTextLarge text-center my-5">O</h1>
        <div className="d-flex justify-content-center">
          <h3 className="w-75 text-center text-wrap mx-5">
            Witaj w <span className="highlightedTextPink">cutzNtrimz</span>,
            osobistym projekcie starannie opracowanym, aby stworzyć{" "}
            <span className="highlightedTextBlue">nowoczesne i eleganckie</span>
            doświadczenie z zakresu fryzjerskiego w internecie. Jako jedyny
            deweloper tego przedsięwzięcia, moim celem było zaprojektowanie
            strony internetowej z{" "}
            <span className="highlightedTextBlue">czystym i intuicyjnym</span>
            interfejsem użytkownika, oferując współczesną wersję tradycyjnej
            salonu fryzjerskiego.
            <br />
            <br />
            Wejdź do naszego wirtualnego salonu fryzjerskiego, gdzie każda
            usługa, produkt i szczegół personalny zostały starannie
            wyselekcjonowane dla tej{" "}
            <span className="highlightedTextBlue">hipotetycznej sytuacji</span>
            . Należy pamiętać, że chociaż nasza oferta jest szczegółowa i
            kompleksowa, to całkowicie fikcyjna i nie występuje w
            rzeczywistości.
            <br />
            <br />
            Od klasycznych cięć po luksusowe zabiegi, nasza platforma
            internetowa zaspokaja Twoje potrzeby pielęgnacyjne w sposób{" "}
            <span className="highlightedTextBlue">prosty i stylowy</span>.
            Dodatkowo, dołączyłem strony w dwóch dodatkowych językach,
            zapewniając dostępność i inkluzję dla różnorodnej publiczności.
            <br />
            <br />
            Odkryj nasz cyfrowy sklep, doświadcz wygody{" "}
            <span className="highlightedTextBlue">nowoczesnej technologii</span>
            , i rozpocznij podróż dbania o siebie i stylu w{" "}
            <span className="highlightedTextPink">cutzNtrimz</span>, gdzie
            wyobraźnia spotyka się z innowacją w świecie usług fryzjerskich
            online.
          </h3>
        </div>

        <div id="mainHomeImageIntro" className="my-5">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/Assets/Shop/beardShave.mp4" type="video/mp4" />
            Twój przeglądarka nie obsługuje znacznika wideo.
          </video>
        </div>
        {/*/////////////////////////////////////////////////////////////// OUR TEAM /////////////////////////////////////////////*/}
        <h1 className="highlightedTextLarge text-center">Nasz Zespół</h1>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap mt-5">
          <div id="barberImageContainer" className="rounded mx-auto">
            <img
              src="/Assets/Shop/acton-crawford-1jH3iZOhqYU-unsplash.jpg"
              alt="Free Unsplash profile of Barber 1"
              className="rounded px-3"
            />
          </div>
          <div id="barberImageContainer" className="rounded mx-auto">
            <img
              src="/Assets/Shop/eugene-chystiakov-taZSJ6xmt48-unsplash.jpg"
              alt="Free Unsplash profile of Barber 2"
              className="rounded px-3"
            />
          </div>
          <div id="barberImageContainer" className="rounded mx-auto">
            <img
              src="/Assets/Shop/vahid-kanani-9spmkkJ8aeE-unsplash.jpg"
              alt="Free Unsplash profile of Barber 3"
              className="rounded px-3"
            />
          </div>
        </div>
        <div id="mainHomeImageIntro" className="my-5">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/Assets/Shop/hairCut.mp4" type="video/mp4" />
            Twój przeglądarka nie obsługuje znacznika wideo.
          </video>
        </div>

        <h1 className="highlightedTextLarge text-center my-5">Referencje</h1>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-evenly flex-wrap">
          <div
            id="referenceIcon"
            className="d-flex flex-column align-items-center p-2 py-4 rounded bg-secondary-subtle border border-dark my-3"
          >
            <img
              src="/Assets/ImagesAndIcons/hair.png"
              alt="hairIcon"
              className="d-flex justify-content-center align-self-center m-5 px-3 rounded-circle"
            />
            <a
              href="https://www.flaticon.com/free-icons/hair"
              title="hair icons"
              className="text-decoration-none highlightedText text-light bg-dark rounded text-center border border-dark"
            >
              Hair icons created by DinosoftLabs - Flaticon
            </a>
          </div>
          <div
            id="referenceIcon"
            className="d-flex flex-column align-items-center p-2 py-2 rounded bg-secondary-subtle border border-dark my-3"
          >
            <img
              src="/Assets/ImagesAndIcons/beard.png"
              alt="beardIcon"
              className="d-flex justify-content-center align-self-center m-5 px-3 rounded-circle"
            />
            <a
              href="https://www.flaticon.com/free-icons/mustaches"
              title="mustaches icons"
              className="text-decoration-none highlightedText text-light bg-dark rounded text-center border border-dark"
            >
              Mustaches icons created by Good Ware - Flaticon
            </a>
          </div>
          <div
            id="referenceIcon"
            className="d-flex flex-column align-items-center p-2 py-3 rounded bg-secondary-subtle border border-dark my-3"
          >
            <img
              src="/Assets/ImagesAndIcons/beardHair.png"
              alt="hairBeardIcon"
              className="d-flex justify-content-center align-self-center m-5 px-3 rounded-circle"
            />
            <a
              href="https://www.flaticon.com/free-icons/beard"
              title="beard icons"
              className="text-decoration-none highlightedText text-light bg-dark rounded text-center border border-dark"
            >
              Beard icons created by PIXARTIST - Flaticon
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPL;
