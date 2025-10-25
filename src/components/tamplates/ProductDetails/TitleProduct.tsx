interface TitleProductProps {
  name: string;
}

const TitleProduct: React.FC<TitleProductProps> = ({ name }) => {
  return <h1 className="text-3xl mb-11 font-shabnam font-bold">{name}</h1>;
};

export default TitleProduct;