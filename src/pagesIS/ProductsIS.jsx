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
        <br className="d-block d-md-none" />
        <br className="d-block d-md-none" />
        <br className="d-block d-md-none" />
        <br className="d-block" />
        {/*////////////////////////////////////////////////////////////////   HAIR   ///////////////////////////////////////////////////////*/}
        <h1 className="text-center mt-2 pt-5 highlightedTextLargeBlue">Hár</h1>
        <div
          id="topBorder"
          className="col-12 d-flex justify-content-center align-items-center"
        >
          <img src="./Assets/ImagesAndIcons/border.svg" alt="topBorder" />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap">
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="/Assets/Products/Hair/hair.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Shampoo One</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="/Assets/Products/Hair/hair2.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Shampoo Two</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="/Assets/Products/Hair/hair3.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Shampoo Three</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="/Assets/Products/Hair/hair4.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Shampoo Four</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="/Assets/Products/Hair/hair5.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Shampoo Five</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="/Assets/Products/Hair/hair6.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Shampoo Six</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
        </div>
        {/*////////////////////////////////////////////////////////////////   BEARD   ///////////////////////////////////////////////////////*/}
        <h1 className="text-center mt-5 pt-5 highlightedTextLargeBlue">
          Skegg
        </h1>
        <div
          id="topBorder"
          className="col-12 d-flex justify-content-center align-items-center"
        >
          <img src="./Assets/ImagesAndIcons/border.svg" alt="topBorder" />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap">
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="Assets/Products/Beard/beard.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Beard One</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="Assets/Products/Beard/beard2.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Beard Two</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="Assets/Products/Beard/beard3.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Beard Three</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="Assets/Products/Beard/beard4.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Beard Four</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="Assets/Products/Beard/beard5.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Beard Five</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="Assets/Products/Beard/beard6.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Beard Six</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
        </div>
        {/*////////////////////////////////////////////////////////////////   STYLING   ///////////////////////////////////////////////////////*/}
        <h1 className="text-center mt-5 pt-5 highlightedTextLargeBlue">
          Kólóga
        </h1>
        <div
          id="topBorder"
          className="col-12 d-flex justify-content-center align-items-center"
        >
          <img src="./Assets/ImagesAndIcons/border.svg" alt="topBorder" />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap">
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="/Assets/Products/Cologne/cologne.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Cologne One</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="/Assets/Products/Cologne/cologne2.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Cologne Two</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="/Assets/Products/Cologne/cologne3.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Cologne Three</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="/Assets/Products/Cologne/cologne4.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Cologne Four</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="/Assets/Products/Cologne/cologne5.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Cologne Five</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
          <div className="productCard card col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center text-center m-2">
            <img
              className="card-img-top"
              src="/Assets/Products/Cologne/cologne6.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="highlightedText">Cologne Six</h2>
              <h5 className="card-text text-white-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <h3 className="card-text cardPrice">
                <b className="highlightedText text-light">&#36;24</b>
              </h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductsIS;
