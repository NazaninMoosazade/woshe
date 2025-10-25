interface GalleryProductProps {
  img: string;
}

const GalleryProduct: React.FC<GalleryProductProps> = ({ img }) => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={img}
        alt="Product image"
        className="w-full sm:max-w-[320px] md:max-w-[380px] lg:max-w-[438px] h-auto object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default GalleryProduct;