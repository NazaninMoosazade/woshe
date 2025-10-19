// import React from "react";

// function TitleProduct() {
//   return (
//     <>
//     <p>کد محصول : 1000721</p>
//     <h2 className="text-2xl font-bold mb-4"> Signiture Round Grande (Baby Pink) </h2>
//     </>
//   );
// }

// export default TitleProduct;

interface TitleProductProps {
  name: string;
}

const TitleProduct: React.FC<TitleProductProps> = ({ name }) => {
  return <h1 className="text-3xl font-bold">{name}</h1>;
};

export default TitleProduct;

