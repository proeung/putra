import LazyVideo from "./lazy-video";

type Props = {
  src: string
  poster: string
}

const CoverVideo = ({ src, poster }: Props) => {
  return (
    <>
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 top-0">
          <LazyVideo
            src={src}
            poster={poster}
          />
        </div>
      </div>
    </>
  );
}

export default CoverVideo;
