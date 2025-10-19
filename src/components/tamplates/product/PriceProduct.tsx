interface PriceProductProps {
  price: number;
}

const PriceProduct: React.FC<PriceProductProps> = ({ price }) => {
  return (

    <div className="font-shabnam mt-11 flex flex-col space-y-1">
      <p className="text-gray-500 font-light">قیمت</p>
    <p className="text-3xl">{price.toLocaleString()} تومان</p>
    </div>

  
  );
};

export default PriceProduct;
