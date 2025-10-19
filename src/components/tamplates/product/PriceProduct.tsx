interface PriceProductProps {
  price: number;
}

const PriceProduct: React.FC<PriceProductProps> = ({ price }) => {
  return <p className="text-xl font-semibold text-red-600">{price.toLocaleString()} تومان</p>;
};

export default PriceProduct;
