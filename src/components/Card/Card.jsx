import { useState } from "react";
import image1 from "../../imgs/shoes3.png";
import image2 from "../../imgs/shoes4.png";
import image3 from "../../imgs/shoes5.png";

export default function Card() {

  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("myData");
    return savedData ? JSON.parse(savedData) : [
      { image: image1, name: "nike", price: 300, description: "very very good", count: 1 },
      { image: image2, name: "adidas", price: 400, description: "very good", count: 1 },
      { image: image3, name: "puma", price: 500, description: "good", count: 1 },
    ];
  });


  const [theme, setTheme] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode ? JSON.parse(savedMode) : "light";
  });

  const handleTheme = () => {
    setTheme((myMode) => {
      const newMode = myMode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", JSON.stringify(newMode));
      return newMode;
    });
  };







  const deleteCard = (index) => {
    const newData = [...data];
    newData.splice(index, 1); 

   
    localStorage.setItem("myData", JSON.stringify(newData));

    
    setData(newData);
  };

  const increaseCount = (index) => {
    const newData = [...data];
    newData[index].count += 1;
    localStorage.setItem("myData", JSON.stringify(newData));
    setData(newData);
  };

  const decreaseCount = (index) => {
    const newData = [...data];
    if (newData[index].count > 1) {
      newData[index].count -= 1;
    }
    localStorage.setItem("myData", JSON.stringify(newData));
    setData(newData);
  };

  return (
    <div className={`h-full ${theme === "dark"? "bg-black text-white":"bg-white text-black"}`}>
      <div className="dark:text-white">
        <i className={` p-10 cursor-pointer fa-solid ${theme === "dark" ? "fa-moon " : "fa-sun "}`}onClick={handleTheme}></i>
        <div className="h-screen flex justify-center gap-10 items-center p-10">
          {data.map((product, index) => (
            <div className="text-center p-10 border-8 border-yellow-400" key={index}>
              <img className=" hover:-rotate-360 transition duration-3000  w-[100px]" src={product.image} alt={product.name} />
              <div className="mt-5">
                <h1 >{product.name}</h1>
                <h2>{product.price}</h2>
                <p>{product.description}</p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <i className="fa-solid fa-minus" onClick={() => decreaseCount(index)}></i>
                <span>{product.count}</span>
                <i className="fa-solid fa-plus" onClick={() => increaseCount(index)}></i>
              </div>
              <button
                className="text-white p-3 bg-red-600 mt-5 rounded-md"
                onClick={() => deleteCard(index)}
              >
                {theme ==="dark" ? "Delete":"امسح"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
