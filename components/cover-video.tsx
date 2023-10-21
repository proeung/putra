type Props = {
  src: string
}

const CoverVideo = ({ src }: Props) => {
  return (
    <>
      <div className="w-full h-full shadow-lg rounded-lg overflow-hidden">
        <div className="w-full h-6 md:h-9 rounded-t-lg bg-gray-200 dark:bg-slate-800 flex justify-start items-center space-x-1.5 px-4">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0">
            <video autoPlay loop muted playsInline className="lazy object-cover w-full h-full">
              <source src={src} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoverVideo;
