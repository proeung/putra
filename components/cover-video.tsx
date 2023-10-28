import LazyVideo from "./lazy-video";

type Props = {
  src: string
  poster: string
  label: string
}

const CoverVideo = ({ label, src, poster }: Props) => {
  return (
    <>
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 top-0">
          <LazyVideo
            src={src}
            poster={poster}
            label={label}
          />
        </div>
      </div>
    </>
  );
}

export default CoverVideo;
