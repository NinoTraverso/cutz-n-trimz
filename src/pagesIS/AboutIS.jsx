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
        <h1>ICELANDIC ABOUT</h1>
        {/*/////////////////////////////////////////////////////////////// MAIN /////////////////////////////////////////////*/}
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block" />
        <br className="d-block" />
        {/*/////////////////////////////////////////////////////////////// VALUES /////////////////////////////////////////////*/}
        <h1
          className="mx-auto text-center w-25 mt-5"
          style={{
            borderBottom: "solid 2px #383233",
            fontFamily: '"Philosopher", sans-serif',
            fontWeight: 400,
            color: "#572e14",
          }}
        >
          IDEALS
        </h1>
        <div className="d-flex flex-column flex-lg-row justify-content-center text-center mt-4 mb-5">
          <h4
            id="valuesContent"
            className="px-5 mx-1"
            style={{
              fontFamily: '"Jost", sans-serif',
              fontWeight: 400,
              color: "#562e16",
            }}
          >
            Professionalism
          </h4>
          <h4
            id="valuesContent"
            className="px-5 mx-1"
            style={{
              fontFamily: '"Jost", sans-serif',
              fontWeight: 400,
              color: "#562e16",
            }}
          >
            Honesty
          </h4>
          <h4
            id="valuesContent"
            className="px-5 mx-1"
            style={{
              fontFamily: '"Jost", sans-serif',
              fontWeight: 400,
              color: "#562e16",
            }}
          >
            Satisfaction
          </h4>
          <h4
            id="valuesContent"
            className="px-5 mx-1"
            style={{
              fontFamily: '"Jost", sans-serif',
              fontWeight: 400,
              color: "#562e16",
            }}
          >
            Integrity
          </h4>
          <h4
            id="valuesContent"
            className="px-5 mx-1"
            style={{
              fontFamily: '"Jost", sans-serif',
              fontWeight: 400,
              color: "#562e16",
            }}
          >
            Empathy
          </h4>
        </div>
        {/*/////////////////////////////////////////////////////////////// EXPERTISE SMALL  /////////////////////////////////////////////*/}
        <div className="d-block d-xl-none text-center mt-5 pt-5 mx-auto w-75">
          <h1
            style={{
              borderBottom: "solid 2px #383233",
              fontFamily: '"Philosopher", sans-serif',
              fontWeight: 400,
              color: "#572e14",
            }}
          >
            EXPERTISE
          </h1>
          <h4
            style={{
              fontFamily: '"Jost", sans-serif',
              fontWeight: 400,
              color: "#562e16",
            }}
            className="profileContent"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam
            minus pariatur earum neque eligendi iusto rem, tenetur cupiditate
            corporis nesciunt, commodi nostrum praesentium veniam velit amet
            perspiciatis incidunt quam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Autem nobis, doloremque illum blanditiis nemo illo
            atque veniam ullam quis voluptatum, modi delectus laudantium minima
            nisi pariatur quas iure quam nihil.
          </h4>
        </div>
        {/*/////////////////////////////////////////////////////////////// EXPERTISE & ABOUT LARGE /////////////////////////////////////////////*/}
        <div className="d-flex flex-row justify-content-center align-items-center mt-5 pt-5">
          <div className="d-none d-xl-block col-xl-3 text-center mx-auto w-25 px-4">
            <h1
              style={{
                borderBottom: "solid 2px #383233",
                fontFamily: '"Philosopher", sans-serif',
                fontWeight: 400,
                color: "#572e14",
              }}
            >
              EXPERTISE
            </h1>
            <h4
              style={{
                fontFamily: '"Jost", sans-serif',
                fontWeight: 400,
                color: "#562e16",
              }}
              className="profileContent"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              magni, consectetur explicabo fugit deleniti excepturi blanditiis
              harum sint omnis quae? Excepturi sequi beatae, quaerat ullam ut
              nobis error? Praesentium, accusamus. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Iusto saepe vitae asperiores rerum
              id neque impedit obcaecati distinctio pariatur cum voluptatibus
              repellendus, corporis error! Molestiae eligendi nostrum eos fugiat
              asperiores!
            </h4>
          </div>
          <div className="jjContainer col-12 col-lg-6 d-flex justify-content-center align-items-center rounded">
            <img
              src="./Assets/Shop/JandJ2.jpg"
              alt="Owners"
              className="rounded"
              style={{ border: "solid 6px #383233" }}
            />
          </div>
          {/* THIS IS THE OLD IMAGE CONTAINER
  <div class="col-12 col-lg-6">
    <div class="d-flex flex-row justify-content-center mt-5 pt-3">
      <div class="razorBlades mx-4"></div>
      <div class="razorBlades mx-4"></div>
      <div class="razorBlades mx-4"></div>
      <div class="razorBlades mx-4"></div>
    </div>
    <div class="razorShape mx-auto mb-5"></div>
  </div>
*/}
          <div className="d-none d-xl-block col-xl-3 text-center mx-auto w-25 px-4">
            <h1
              style={{
                borderBottom: "solid 2px #383233",
                fontFamily: '"Philosopher", sans-serif',
                fontWeight: 400,
                color: "#572e14",
              }}
            >
              ABOUT US
            </h1>
            <h4
              style={{
                fontFamily: '"Jost", sans-serif',
                fontWeight: 400,
                color: "#562e16",
              }}
              className="profileContent"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              amet qui placeat culpa quam magnam delectus id aut, dolorum
              dolorem perferendis nesciunt repellat porro cumque est, natus nemo
              aliquid deserunt? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolorem minima voluptate ipsum. Iusto, explicabo
              quos quis quaerat earum, facilis debitis, vel mollitia sit
              incidunt tempore amet voluptatibus sunt non saepe!
            </h4>
          </div>
        </div>
        {/*/////////////////////////////////////////////////////////////// ABOUT US SMALL  /////////////////////////////////////////////*/}
        <div className="d-block d-xl-none text-center mx-auto w-75 mt-5 pt-5">
          <h1
            style={{
              borderBottom: "solid 2px #383233",
              fontFamily: '"Philosopher", sans-serif',
              fontWeight: 400,
              color: "#572e14",
            }}
          >
            ABOUT
          </h1>
          <h4
            style={{
              fontFamily: '"Jost", sans-serif',
              fontWeight: 400,
              color: "#562e16",
            }}
            className="profileContent"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et
            dicta tempora accusantium facilis quo quos recusandae inventore
            debitis rem neque voluptates exercitationem saepe itaque consectetur
            aliquid ea, molestias eius! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsum enim qui sit ab quisquam error, dignissimos,
            debitis distinctio blanditiis laborum cum pariatur laboriosam veniam
            a alias autem fugiat doloremque neque?
          </h4>
        </div>
      </main>
    </div>
  );
}

export default AboutIS;
