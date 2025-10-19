interface GalleryProductProps {
  img: string;
}

const GalleryProduct: React.FC<GalleryProductProps> = ({ img }) => {
  return (
    <div>
      <img src={img} alt="Product image" className="rounded-lg" />
    </div>
  );
};

export default GalleryProduct;
