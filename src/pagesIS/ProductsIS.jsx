import React, { useEffect } from "react";

function ProductsIS() {
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
        <h1>ICELANDIC PRODUCTS</h1>
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block" />
        {/*////////////////////////////////////////////////////////////////   HAIR   ///////////////////////////////////////////////////////*/}
        <h1 className="text-center mt-5 pt-5 w-25 mx-auto">Hair</h1>
        <div
          id="topBorder"
          className="col-12 d-flex justify-content-center align-items-center"
        >
          <img src="./Assets/ImagesAndIcons/border.svg" alt="topBorder" />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap">
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/philipb/peppermintAvocadoShampoo.jpg"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/philipb/antiflakeReliefShampooExtraStrength.jpg"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/philipb/peppermintAvocadoScalpScrub.jpg"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/philipb/scalpBoosterSystemOne.jpg"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/philipb/lightweightDeepConditioner.jpg"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">LHI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
        </div>
        {/*////////////////////////////////////////////////////////////////   BEARD   ///////////////////////////////////////////////////////*/}
        <h1 className="text-center mt-5 pt-5 w-25 mx-auto">Beard</h1>
        <div
          id="topBorder"
          className="col-12 d-flex justify-content-center align-items-center"
        >
          <img src="./Assets/ImagesAndIcons/border.svg" alt="topBorder" />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap">
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/philipb/peppermintAvocadoShampoo.jpg"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
        </div>
        {/*////////////////////////////////////////////////////////////////   STYLING   ///////////////////////////////////////////////////////*/}
        <h1 className="text-center mt-5 pt-5 w-25 mx-auto">Styling</h1>
        <div
          id="topBorder"
          className="col-12 d-flex justify-content-center align-items-center"
        >
          <img src="./Assets/ImagesAndIcons/border.svg" alt="topBorder" />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap">
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/philipb/stylingGel.jpg"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
        </div>
        {/*////////////////////////////////////////////////////////////////   COLOGNE   ///////////////////////////////////////////////////////*/}
        <h1 className="text-center mt-5 pt-5 w-25 mx-auto">Colognes</h1>
        <div
          id="topBorder"
          className="col-12 d-flex justify-content-center align-items-center"
        >
          <img src="./Assets/ImagesAndIcons/border.svg" alt="topBorder" />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap">
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/maack/andreaMaackCeramic.png"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/maack/andreaMaackDual.png"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/maack/andreaMaackMagma.png"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/maack/andreaMaackCoven.png"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/maack/andreaMaackSupernova.png"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
        </div>
        {/*////////////////////////////////////////////////////////////////   TOOLS   ///////////////////////////////////////////////////////*/}
        <h1 className="text-center mt-5 pt-5 w-25 mx-auto">Tools</h1>
        <div
          id="topBorder"
          className="col-12 d-flex justify-content-center align-items-center"
        >
          <img src="./Assets/ImagesAndIcons/border.svg" alt="topBorder" />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap">
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/tools/shavingBrush.jpg"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/tools/comb.jpg"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/tools/beardComb-removebg-preview.jpg"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
          <div
            className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2"
            style={{ width: "24rem" }}
          >
            <img
              className="card-img-top"
              src="./Assets/Products/tools/beardBrush.jpg"
              alt="Card cap"
            />
            <div className="card-body text-light">
              <h5 className="card-title">HI</h5>
              <p className="card-text">HI</p>
              <h5 className="card-text cardPrice">
                <b>6,900 isk</b>
              </h5>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductsIS;
