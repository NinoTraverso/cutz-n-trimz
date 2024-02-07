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
        <br className="d-none d-md-block" />
        <br className="d-none d-md-block" />
        <br className="d-none d-md-block" />
        <br className="d-block d-xl-none" />
        <br className="d-block d-lg-none" />
        <br className="d-block d-md-none" />
        <br className="d-block d-md-none" />
        <br className="d-block d-md-none" />

        <div className="d-flex flex-column flex-xl-row mx-5 justify-content-around align-items-center">
          <h1
            className="d-none d-xl-block mt-5 text-center pt-3"
            style={{ color: "#000000" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            praesentium rerum suscipit! Unde magnam, sint eos similique hic
            iusto. Unde, a? Voluptatem laboriosam quibusdam eos id dolorum
            dolore explicabo. Necessitatibus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti distinctio, eligendi est ab
            voluptatibus dolor natus optio, esse neque autem quidem
            necessitatibus aliquam possimus tempore consequuntur sit animi
            voluptatum reiciendis.
          </h1>
          <div
            id="manBeardContainer"
            className="w-50 w-md-25 h-25 h-md-75 ms-3 me-0 mt-md-0 d-flex justify-content-center align-items-center justify-content-md-center"
          >
            <img
              src="./Assets/ImagesAndIcons/man-3263509_1920.png"
              alt="manBeard"
            />
          </div>
          <h1
            className="d-block d-xl-none text-center mt-4 mb-4"
            style={{ color: "#000000" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            praesentium rerum suscipit! Unde magnam, sint eos similique hic
            iusto. Unde, a? Voluptatem laboriosam quibusdam eos id dolorum
            dolore explicabo. Necessitatibus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti distinctio, eligendi est ab
            voluptatibus dolor natus optio, esse neque autem quidem
            necessitatibus aliquam possimus tempore consequuntur sit animi
            voluptatum reiciendis.
          </h1>
        </div>
        <div
          style={{ width: "100%", height: 100 }}
          className="d-none d-xl-block"
        />
        {/*/////////////////////////////////////////////////////////////// BARBER /////////////////////////////////////////////*/}
        <div className="d-flex flex-column flex-xl-row mx-5 mb-5 pb-5 justify-content-around align-items-center mt-4">
          <div className="w-50 h-100 mx-3 rounded d-flex justify-content-center">
            <img
              src="./Assets/Shop/eugene-chystiakov-taZSJ6xmt48-unsplash.jpg"
              rel="barbers"
              className="barberPhoto rounded px-4"
              alt="pictureOfBarber"
            />
          </div>
          <h1 className="text-center my-4" style={{ color: "#000000" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            praesentium rerum suscipit! Unde magnam, sint eos similique hic
            iusto. Unde, a? Voluptatem laboriosam quibusdam eos id dolorum
            dolore explicabo. Necessitatibus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti distinctio, eligendi est ab
            voluptatibus dolor natus optio, esse neque autem quidem
            necessitatibus aliquam possimus tempore consequuntur sit animi
            voluptatum reiciendis.
          </h1>
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
          style={{ width: "100%", height: 200 }}
          className="d-none d-xxl-block"
        />
        <div
          style={{ width: "100%", height: 100 }}
          className="d-none d-xl-block"
        />
        <div className="d-flex flex-column flex-xl-row mx-5 mt-3 justify-content-around align-items-center">
          <h2 className="text-center mb-4" style={{ color: "#000000" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            praesentium rerum suscipit! Unde magnam, sint eos similique hic
            iusto. Unde, a? Voluptatem laboriosam quibusdam eos id dolorum
            dolore explicabo. Necessitatibus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti distinctio, eligendi est ab
            voluptatibus dolor natus optio, esse neque autem quidem
            necessitatibus aliquam possimus tempore consequuntur sit animi
            voluptatum reiciendis.
          </h2>
          <div className="w-50 h-75 mx-3 rounded d-flex justify-content-center px-3">
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
