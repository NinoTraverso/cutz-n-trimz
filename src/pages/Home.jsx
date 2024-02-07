import React, { useEffect } from "react";

function Home() {
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
          <h2 id="introOne" className="text-center mb-4 ">
            Welcome to <span className="highlightedTextPink">cutNtrimz</span>,
            where{" "}
            <span className="highlightedTextBlue">
              tradition meets modernity
            </span>{" "}
            . Step into our welcoming space and experience the artistry of
            classic barbering fused with contemporary techniques. Our skilled
            barbers are dedicated to crafting tailored cuts, precise beard
            trims, and meticulous grooming services to elevate your look and{" "}
            <span className="highlightedTextBlue">enhance your confidence</span>
            . Whether you seek a traditional gentleman's haircut or a trendy new
            style, our commitment to{" "}
            <span className="highlightedTextBlue">
              quality and attention to detail
            </span>{" "}
            ensures a memorable and satisfying experience.
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
          <h2 id="introOne" className="text-center mb-4 text-wrap w-75">
            Our commitment to{" "}
            <span className="highlightedTextBlue">excellence</span> ensures
            every visit leaves you feeling confident and satisfied. With a track
            record of{" "}
            <span className="highlightedTextBlue">satisfied customers</span> and
            a dedication to providing{" "}
            <span className="highlightedTextBlue">exceptional</span> service,
            your grooming experience is our top priority. Book your appointment
            today and discover the difference at{" "}
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
          className="carousel slide w-100 mx-auto mt-5 d-block d-md-none mb-3"
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
          <h2 id="introThree" className="text-center mb-4 w-75">
            Designed for your comfort,{" "}
            <span className="highlightedTextBlue">relax in our lounge</span>{" "}
            which offers a cozy retreat where you can enjoy a{" "}
            <span className="highlightedTextBlue">complimentary beverage</span>{" "}
            while you wait or after your grooming session. With comfortable
            seating and a welcoming ambiance, it's the perfect place to{" "}
            <span className="highlightedTextBlue">recharge</span> before or
            after your appointment.
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

export default Home;
