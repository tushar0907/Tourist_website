import React from "react";
import Banner from "../components/banner";
import "../components/destination.css";
import ReactDOM from "react-dom";

const sources = [
  { maxWidth: 100, src: "http://placehold.it/100x100" },
  { maxWidth: 200, src: "http://placehold.it/200x100" },
  { maxWidth: 400, src: "http://placehold.it/400x100" },
  { maxWidth: 800, src: "http://placehold.it/800x100" },
  { maxWidth: 1200, src: "http://placehold.it/1200x100" },
];

ReactDOM.render(
  <div className="App">
    <figure>
      <figcaption>
        This image has a fixed width of 100px, you should see a 100px image
      </figcaption>
    </figure>
    <figure>
      
      <figcaption>
        This image has a fixed width of 105px, you should see a 200px image
      </figcaption>
    </figure>

    <figure>
      <figcaption>
        This image has a fixed width of 400px, you should see a 400px image
      </figcaption>
    </figure>
    <figure>
      <figcaption>
        This image has a 20% width, resize your browser to see the src adjusting
      </figcaption>
    </figure>
    <figure>
      <figcaption>
        This image has a 50% width, resize your browser to see the src adjusting
      </figcaption>
    </figure>
  </div>,
  document.getElementById("root")
);

const Destin = () => {
  return (
    <>
      <Banner />
      <div className="inspire">
        <div className="block">
          <p>
            <strong>Lorem Ipsum</strong>
          </p>
        </div>
        <div className="blex">
          <div className="hori">
            <div className="parx">
              <p>
                <strong>Lorem Ipsum</strong>
              </p>
            </div>
            <div className="perr">
              <p>
                <strong>Lorem Ipsum</strong>
              </p>
            </div>
          </div>
          <div className="ro">
            <div className="handle">
              <p>
                <strong>Lorem Ipsum</strong>
              </p>
            </div>
            <div className="holder">
              <p>
                <strong>Lorem Ipsum</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="title">
        <div className="spell">
          <p>
            <strong>UNIQUE DESTINATIONS THAT YOU MIGHT LIKE</strong>
          </p>
        </div>
        <div className="area">
          <div className="inke">
            <img
              src="https://images.adsttc.com/media/images/5a8c/3430/f197/cc42/b800/004b/medium_jpg/HIPWF_ShanghaiTower_ZhonghaiShen_141101_040.jpg?1519137830"
              width="100%"
            />
          </div>
          <div className="inke">
            <img
              src="https://mlaiqf2ppwx1.i.optimole.com/11qPaAw--AwXyanc/w:563/h:699/q:auto/https://triplou.com/wp-content/uploads/2021/07/Norway.jpg"
              width="100%"
            />
          </div>
          <div className="inke">
            <img
              src="https://www.imagesfromtexas.com/images/xl/Cinque-Terre-Italy---Riomaggiore-Evening-1.jpg"
              width="100%"
            />
          </div>
          <div className="inke">
            <img
              src="https://i.pinimg.com/originals/15/fc/89/15fc896f20dfea8093bfd1f0986e739f.jpg"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div className="port">
        <div className="value">
          <p>
            <strong>Lorem ipsum dolor sit amet, consectetur </strong>
          </p>
        </div>
        <div className="longen">
          <div className="dirwes">
            <img
              src="https://www.touropia.com/gfx/b/2020/09/meteora-1.jpg"
              width="100%"
            />
            <div className="">
              <h2>Hello World</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </div>
          <div className="dirwes">
            <img
              src="https://globalgrasshopper.com/wp-content/uploads/2011/10/beautiful-places-to-visit-in-Egypt.jpg"
              width="100%"
            />
            <div className="">
              <h2>Hello World</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </div>
          <div className="dirwes">
            <img
              src="https://globalgrasshopper.com/wp-content/uploads/2011/10/Dahab-Egypt.jpg"
              width="100%"
            />
            <div className="">
              <h2>Hello World</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </div>
          <div className="dirwes">
            <img
              src="https://experitour.com/wp-content/uploads/2018/02/Cinque-Terre-Italy.jpg"
              width="100%"
            />
            <div className="">
              <h2>Hello World</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </div>
        </div>
      </div>
      <div className="port">
        <div className="value">
          <p>
            <strong>Lorem ipsum dolor sit amet, consectetur </strong>
          </p>
        </div>
        <div className="longen">
          <div className="dirwes">
            <img
              src="https://static.boredpanda.com/blog/wp-content/uuuploads/unbelievable-places/unbelievable-places-8.jpg"
              width="100%"
            />
            <div className="">
              <h2>Hello World</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </div>
          <div className="dirwes">
            <img
              src="https://orogoldstores.com/wp-content/uploads/2016/09/OROGOLD-The-Most-Beautiful-Places-Around-the-World-Kyoto-Japan.jpg"
              width="100%"
            />
            <div className="">
              <h2>Hello World</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </div>
          <div className="dirwes">
            <img
              src="https://globalgrasshopper.com/wp-content/uploads/2020/03/beautiful-Kyoto.jpg"
              width="100%"
            />
            <div className="">
              <h2>Hello World</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </div>
          <div className="dirwes">
            <img
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2015/10/desert-camp-cover-image.jpg"
              width="100%"
            />
            <div className="">
              <h2>Hello World</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wider"></div>
      <p id="pager">
        <strong>About This Page</strong>
      </p>
      <div className="preven">
        <p>
        This is an example page for travel blogs and other travel-related topics. This is a partially developed front-end example produced by developer Tushar Kumar.
        Apart from that all the Ui/Ux design is also created by Tushar kumar using Figma.
        </p>
      </div>
    </>
  );
};

export default Destin;
