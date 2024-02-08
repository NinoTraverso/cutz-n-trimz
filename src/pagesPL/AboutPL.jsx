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
        <h1 className="highlightedTextLarge text-center my-5">About</h1>
        <div className="d-flex justify-content-center">
          <h3 className="w-75 text-center text-wrap">
            Welcome to <span className="highlightedTextPink">cutzNtrimz</span>,
            a personal project meticulously crafted to create a
            <span className="highlightedTextBlue"> modern and sleek </span>
            online barber's shop experience. As the sole developer behind this
            endeavor, I aimed to design a website with a
            <span className="highlightedTextBlue"> clean and intuitive </span>
            user interface, offering a contemporary take on the traditional
            barber's shop.
            <br />
            <br />
            Step into our virtual barber's shop, where every service, product,
            and personnel detail has been carefully curated for this
            <span className="highlightedTextBlue"> hypothetical scenario </span>
            . Please note that while our offerings are detailed and
            comprehensive, they are entirely fictitious and not found in real
            life. <br />
            <br />
            From classic cuts to luxurious treatments, our online platform
            caters to your grooming needs with
            <span className="highlightedTextBlue"> simplicity and style </span>.
            Additionally, I've included pages in two additional languages,
            ensuring accessibility and inclusivity for a diverse audience.
            <br /> <br />
            Explore our digital storefront, experience the convenience of
            <span className="highlightedTextBlue"> modern technology </span>,
            and embark on a journey of self-care and style at
            <span className="highlightedTextPink"> cutzNtrimz</span>, where
            imagination meets innovation in the world of online barber services.
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
            {/* Add additional source elements for different video formats if needed */}
            Your browser does not support the video tag.
          </video>
        </div>
        {/*/////////////////////////////////////////////////////////////// OUR TEAM /////////////////////////////////////////////*/}
        <h1 className="highlightedTextLarge text-center">Our Team</h1>
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
            {/* Add additional source elements for different video formats if needed */}
            Your browser does not support the video tag.
          </video>
        </div>

        <h1 className="highlightedTextLarge text-center my-5">References</h1>
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
