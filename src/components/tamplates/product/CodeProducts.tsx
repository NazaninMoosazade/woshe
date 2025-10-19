interface CodeProductProps {
  productCode: string;
}

const CodeProducts: React.FC<CodeProductProps> = ({ productCode }) => {
  return (
    <>
      <div className="mb-4 flex items-center gap-x-2 font-shabnam font-light text-green">
        <p>کد محصول</p>
        <p>{productCode}</p>
      </div>
    </>
  );
};

export default CodeProducts;
