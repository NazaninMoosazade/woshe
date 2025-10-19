interface DescriptionProductProps {
  description: string;
}

const DescriptionProduct: React.FC<DescriptionProductProps> = ({ description }) => {
  return <p className="font-shabnam leading-7 text-gray-700 mt-2">{description}</p>;
};

export default DescriptionProduct;
