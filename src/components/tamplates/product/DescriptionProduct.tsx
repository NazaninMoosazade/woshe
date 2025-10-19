interface DescriptionProductProps {
  description: string;
}

const DescriptionProduct: React.FC<DescriptionProductProps> = ({ description }) => {
  return <p className="text-gray-700 mt-2">{description}</p>;
};

export default DescriptionProduct;
