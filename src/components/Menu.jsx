import React from "react";

const Menu = () => {
  const images1 = [
    "shoes1.jpeg",
    "shoes2.jpeg",
    "shoes3.jpeg",
    "shoes4.jpeg",
    "shoes5.jpg",
    "shoes6.png",
    "shoes8.jpeg",
    "shoes18.webp",
    "shoes19.jpg",
  ];

  const images2 = [
    "shoes9.avif",
    "shoes10.webp",
    "shoes11.avif",
    "shoes12.webp",
    "shoes13.jpg",
    "shoes14.jpg",
    "shoes15.jpg",
    "shoes16.jpg",
    "shoes17.png",
    "shoes14.jpg",
  ];

  return (
    <>
      <div className="imagesBox bg-success d-flex gap-3 flex-nowrap overflow-x-auto py-3 mt-3">
        {images1.map((img, index) => (
          <div
            key={index}
            className="imgContainer overflow-hidden rounded-3 flex-shrink-0"
          >
            <img
              src={`images/${img}`}
              alt="shoes"
              className="h-100 w-100 object-fit-fill"
            />
          </div>
        ))}
      </div>

      <div className="imagesBox bg-success d-flex gap-3 flex-nowrap overflow-x-auto py-3">
        {images2.map((img, index) => (
          <div
            key={index}
            className="imgContainer overflow-hidden rounded-3 flex-shrink-0"
          >
            <img
              src={`images/${img}`}
              alt="shoes"
              className="h-100 w-100 object-fit-fill"
            />
          </div>
        ))}
      </div>

      <div className=" p-3 w-100 d-flex flex-column flex-md-row gap-3">
        <div className="mainText d-flex flex-column justify-content-between w-100 w-md-50">
          <div>
            <h1 className="fw-bold">YOUR FEET DESERVE THE BEST</h1>
            <p className="text-uppercase">
              Your feet deserve more than just shoes - they deserve comfort,
              performance, and style. Nike shoes are designed with advanced
              cushioning, breathable materials, and innovative technology to
              support you in every step. Whether you're running, training, or
              styling your everyday look, Nike delivers unmatched quality that
              keeps you moving forward with confidence.
            </p>

            <button className="bg-danger border-0 py-1 px-3 text-white">
              Shop Now
            </button>
            <button className="border-1 px-3 py-1 ms-3 ">Category</button>
          </div>

          <div className="mt-3">
            <p>Also Available On</p>
            <img
              src="images/amazonLogo.png"
              alt="amazon logo"
              style={{ height: "30px", width: "30px" }}
            />
            <img
              className="ms-3"
              src="images/flipcartLogo.png"
              alt="flipkart logo"
              style={{ height: "25px", width: "25px" }}
            />
          </div>
        </div>

        <div className=" w-100 w-md-50">
          <img
            src="images/shoes.jpeg"
            alt="Nike Shoes"
            className="w-100 h-100 object-fit-cover rounded-4"
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
