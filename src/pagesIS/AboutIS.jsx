import React, { useEffect } from "react";

function AboutIS() {
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
        <h1 className="highlightedTextLarge text-center my-5">Um</h1>
        <div className="d-flex justify-content-center">
          <h3 className="w-75 text-center text-wrap mx-5">
            Velkomin/n á <span className="highlightedTextPink">cutzNtrimz</span>
            , einkalíffræðilegt verkefni sem er skipulagt til að skapa{" "}
            <span className="highlightedTextBlue">
              nútímalega og glæsilega{" "}
            </span>
            upplifun í netverslun rakara. Sem eini þróunaraðili þessa stefna,
            ætlaði ég að hönnun vefsíðu með{" "}
            <span className="highlightedTextBlue">hreinni og skilvirkri </span>
            notendaviðmóti, sem býður upp á samtímalega túlkun á hefðbundnum
            rakarabúð.
            <br />
            <br />
            Komdu í hina vönduðu netrakabúð okkar, þar sem hver þjónusta, vöru
            og starfsfólksupplýsing hefur verið vandlega valin fyrir þessa{" "}
            <span className="highlightedTextBlue">hugmyndarlega aðstæður</span>
            . Vinsamlegast athugaðu að þrátt fyrir að úrval okkar sé nákvæmt og
            fjölbreytt, er það alveg ímyndunarveru og ekki til staðar í
            raunveruleikanum.
            <br />
            <br />
            Frá klassískum klippingum til lúxusmeðferða, bíður netstöðin okkar
            upp á þína hreinsunarþarfir með{" "}
            <span className="highlightedTextBlue">einfaldleika og stíl</span>.
            Þar að auki hef ég bætt við síðum á tveimur auka tungumálum, sem
            tryggir aðgengi og innifaldurleika fyrir fjölbreytta áhorfendahópa.
            <br />
            <br />
            Kannaðu þessar nýjungar í okkar stafræna verslun, upplifi þægindi{" "}
            <span className="highlightedTextBlue">nútíma tækni</span>, og kynnst
            ferð í eigin umönnun og stíl hjá{" "}
            <span className="highlightedTextPink">cutzNtrimz</span>, þar sem
            ímyndunarflug mætir nýsköpun í heimi vefþjónustu rakara.
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
            Vafrinn þinn styður ekki myndbandatag.
          </video>
        </div>
        {/*/////////////////////////////////////////////////////////////// OUR TEAM /////////////////////////////////////////////*/}
        <h1 className="highlightedTextLarge text-center">Liðið okkar</h1>
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
            Vafrinn þinn styður ekki myndbandatag.
          </video>
        </div>

        <h1 className="highlightedTextLarge text-center my-5">Tilvísanir</h1>
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

export default AboutIS;
