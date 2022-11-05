import React from "react";
import Layout from "components/Layout";
import Card from "components/Card";

function Item({ image, title }) {
  return (
    <Card className="overflow-hidden w-[40%] py-[20%] inline-flex flex-col justify-center items-center from-gray-100">
      {/* <img src={image} alt={title} /> */}
      <h2 className="font-semibold xs:text-lg sm:text-xs md:text-base lg:text-2xl m-0 p-0">
        {title}
      </h2>
    </Card>
  );
}

function Home() {
  const data = [
    {
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "Số thay chữ",
    },
    {
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      title: "Chữ thay chữ",
    },
    {
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      title: "Chữ thay số",
    },
    {
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      title: "Tọa độ",
    },
    {
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      title: "Morse",
    },
    {
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      title: "Morse",
    },
    {
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      title: "Morse",
    },
  ];
  return (
    <Layout>
      <div className="h-[calc(100%_-_50px)] px-9 py-6  overflow-y-auto flex flex-wrap gap-x-5 gap-y-6 justify-center">
        {data.map((d) => (
          <Item image={d.image} title={d.title} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
