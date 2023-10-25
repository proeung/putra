import Image from 'next/image';

type Props = {
  src: string
  alt: string
}

const CoverImage = ({ src, alt }: Props) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className="w-full object-cover"
        width={1300}
        height={630}
        loading="lazy"
      />
    </>
  );
}

export default CoverImage;
