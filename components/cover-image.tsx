import LazyImage from './lazy-image';

type Props = {
  src: string
  alt: string
}

const CoverImage = ({ src, alt }: Props) => {
  return (
    <>
      <LazyImage
        src={src}
        alt={alt}
        width={1300}
        height={630}
      />
    </>
  );
}

export default CoverImage;
