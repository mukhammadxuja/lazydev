import { LazyLoadImage } from 'react-lazy-load-image-component';

const CircleCard = ({ src, alt, isHidden }) => {
  return (
    <>
      <div className={`${isHidden} square__card`}>
        <LazyLoadImage
          src={src}
          effect="blur"
          width={60}
          height={60}
          property
          alt={alt}
        />
      </div>
    </>
  );
};

export default CircleCard;
