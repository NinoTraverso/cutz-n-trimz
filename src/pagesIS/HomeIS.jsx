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
        <h1>ICELANDIC HOME</h1>
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            consectetur, laudantium saepe fuga cupiditate iusto! Iure eveniet
            dolor autem error magnam doloremque facere vel a soluta iste!
            Doloremque, repudiandae sint. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid tempore laboriosam voluptatem sequi fugit
            dolorum deleniti iste, totam blanditiis mollitia similique impedit,
            corporis accusantium itaque. Modi, id. Asperiores, eaque? At!
          </h1>
          <div className="w-50 w-md-25 h-25 h-md-75 ms-3 me-0 mt-md-0 d-flex justify-content-center align-items-center justify-content-md-center">
            <img
              src="./Assets/ImagesAndIcons/man-3263509_1920.png"
              alt="manBeard"
            />
          </div>

          <h1
            className="d-block d-xl-none text-center mt-4 mb-4"
            style={{ color: "#000000" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            enim molestiae, sit mollitia aut non? Culpa, nesciunt vel. Excepturi
            praesentium iusto fugit ipsam voluptas esse modi ipsa sapiente quia
            magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            soluta explicabo animi dolore quam est, minus sint sunt. Excepturi
            ipsum modi voluptate sint mollitia non eligendi blanditiis sequi
            doloribus iure?
          </h1>
        </div>
        <div
          style={{ width: "100%", height: 100 }}
          className="d-none d-xl-block"
        />
        {/*/////////////////////////////////////////////////////////////// BARBER /////////////////////////////////////////////*/}
        <div className="d-flex flex-column flex-xl-row mx-5 mb-5 pb-5 justify-content-around align-items-center mt-4">
          <div className="w-50 h-100 mx-3 rounded-pill d-flex justify-content-center">
            <img
              src="./Assets/Shop/eugene-chystiakov-taZSJ6xmt48-unsplash.jpg"
              rel="barbers"
              className="barberPhoto rounded-circle px-4"
              alt="barberJeffrey"
            />
          </div>
          <h1 className="text-center my-4" style={{ color: "#000000" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non
            dolore minus? Minus libero odio dolor excepturi dicta ratione
            eligendi facilis obcaecati reiciendis! Ex consectetur autem
            dignissimos illum blanditiis labore. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Molestias ipsam asperiores officia
            nobis labore odio, modi laboriosam suscipit! Soluta ea consequatur
            praesentium aliquid tempore iste cum perferendis, modi adipisci
            repellendus.
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
                  src="./Assets/Haircuts/haircut.png"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut2.png"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut3.png"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut4.png"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut5.png"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut6.png"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut8.png"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut10.png"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut9.png"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut11.png"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut12.png"
                  className="d-block w-25 mx-auto rounded"
                  alt="haircut1"
                />
                <img
                  src="./Assets/Haircuts/haircut13.png"
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
                  src="./Assets/Haircuts/haircut.png"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut2.png"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut3.png"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut4.png"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut5.png"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut6.png"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut8.png"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut9.png"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut10.png"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut11.png"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut12.png"
                  className="d-block w-75 mx-auto rounded"
                  alt="haircut1"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-row">
                <img
                  src="./Assets/Haircuts/haircut13.png"
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            assumenda voluptates perferendis? Optio iste commodi doloribus
            provident et fuga odit reiciendis a quidem velit! Unde voluptate
            provident commodi expedita magnam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rem architecto accusantium esse totam
            deserunt, quis, perspiciatis nemo impedit porro repellendus in
            commodi molestias libero soluta, itaque beatae harum sint natus.
          </h2>
          <div className="w-50 h-75 mx-3 rounded d-flex justify-content-center px-3">
            <img
              src="./Assets/Shop/sofa-186633_1920.jpg"
              rel="haircut"
              className="loungePhoto rounded"
              alt="lounge"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomeIS;
