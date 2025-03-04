import React, { useState } from "react";
import "./carousel.css";

// Car Data Interface
type Car = {
  id: number;
  name: string;
  price: string;
  description: string;
  images: string[];
};

// Sample Car Data
const cars: Car[] = [
  {
    id: 1,
    name: "Tesla Model S",
    price: "$80,000",
    description: "A high-performance electric sedan with autopilot capabilities.",
    images: [
      "./tesla-main.avif",
      "./tesla-interior.avif",
      "./tesla-backview.jpg",
    ],
  },
  {
    id: 2,
    name: "BMW i8",
    price: "$150,000",
    description: "A stylish hybrid sports car with futuristic design.",
    images: [
      "./BMWi8-main.avif",
      "./BMWi8-interior.jpeg",
      "./BMWi8-backview.jpeg",
    ],
  },
  {
    id: 3,
    name: "Porsche Taycan",
    price: "$120,000",
    description: "An all-electric sports car with incredible speed and luxury.",
    images: [
      "./PorscheTaycan-main.avif",
      "./PorscheTaycan-interior.jpeg",
      "./PorscheTaycan-backview.jpg",
    ],
  },
  {
    id: 4,
    name: " Chevrolet Camaro ZL1",
    price: "$65,000",
    description: "A high-performance American muscle car with aggressive styling and a supercharged V8 engine.",
    images: [
      "./ChevroletCamaroZL1-main.jpg",
      "./ChevroletCamaroZL1-interior.avif",
      "./ChevroletCamaroZL1-backview.jpg",
    ],
  },
];

const CarCarousel: React.FC = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [mainImage, setMainImage] = useState(cars[0].images[0]);

  const nextCar = () => {
    const newIndex = (currentCarIndex + 1) % cars.length;
    setCurrentCarIndex(newIndex);
    setMainImage(cars[newIndex].images[0]);
  };

  const prevCar = () => {
    const newIndex = (currentCarIndex - 1 + cars.length) % cars.length;
    setCurrentCarIndex(newIndex);
    setMainImage(cars[newIndex].images[0]);
  };

  return (
    <div className="carousel-container">
      <button onClick={prevCar} className="nav-button">&lt;</button>
      <div className="car-slide">
        <h2>{cars[currentCarIndex].name}</h2>
        <p>{cars[currentCarIndex].price}</p>
        <img src={mainImage} alt="Car" className="main-image" />
        <div className="thumbnail-container">
          {cars[currentCarIndex].images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className="thumbnail"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
        <p>{cars[currentCarIndex].description}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
      <button onClick={nextCar} className="nav-button">&gt;</button>
    </div>
  );
};

export default CarCarousel;
