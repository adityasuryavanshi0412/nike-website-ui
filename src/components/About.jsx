import React from "react";

const About = () => {
  return (
    <div className="p-3 d-flex gap-4 justify-content-around flex-wrap align-items-center">
      <div style={{ maxWidth: "600px" }}>
        <h1 className="fw-bold">ABOUT NIKE</h1>
        <h1 className="fw-bold text-danger">JUST DO IT.</h1>

        <p className="mt-3">
          Nike, Inc. is one of the world's leading sportswear and athletic
          footwear brands. The company's mission is to
          {" "}
          <strong>
            bring inspiration and innovation to every athlete in the world.
          </strong>
        </p>

        <p>
          (If you have a body, you are an athlete.) Nike combines performance,
          style, and innovation to create products that support athletes and
          everyday individuals alike.
        </p>

        <h2 className="mt-4 fw-bold">OUR PRODUCTS</h2>

        <p>Nike offers a wide range of premium-quality products, including:</p>

        <ul>
          <li>Athletic and casual footwear</li>
          <li>Sportswear and performance apparel</li>
          <li>Training, running, and lifestyle gear</li>
          <li>Accessories designed for comfort and durability</li>
        </ul>

        <p>
          Every product is crafted to deliver superior comfort, performance, and
          modern design.
        </p>
      </div>

      <div>
        <img
          src="images/shoesad.jpg"
          alt="Nike Shoes Advertisement"
          style={{ height: "400px"}}
          className="rounded-3"
        />
      </div>
    </div>
  );
};

export default About;
