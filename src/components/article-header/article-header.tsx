import CoverImage from '@/components/cover-image';
import CoverVideo from '@/components/cover-video';
import DateFormatter from '@/components/date-formatter';
import { Fade } from 'react-awesome-reveal';
import PageTitle from '@/components/page-title';

type Props = {
  title: string
  coverImage?: string
  coverVideo?: string
  poster?: string
  date: string
}

const ArticleHeader = ({ title, coverImage, coverVideo, poster, date }: Props) => {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-16 mb-10 md:mt-28 lg:mt-40 md:mb-16">
        <Fade cascade delay={1} damping={1e-1}>
          <PageTitle>{title}</PageTitle>
          <div className="font-sans font-bold mt-4 text-sm text-zinc-600 md:text-base dark:text-zinc-400">
            <DateFormatter dateString={date} />
          </div>
        </Fade>
      </div>

      <div className="bg-slate-200 dark:bg-slate-950 -mx-5 overflow-hidden shadow-lg sm:mx-0 sm:rounded-lg">
        {coverVideo && (
          <div className="w-full h-6 md:h-8 md:rounded-t-lg bg-gray-200 dark:bg-slate-800 flex justify-start items-center space-x-1.5 px-5 md:px-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
        )}

        {coverVideo ? (
          <CoverVideo
            src={coverVideo}
            poster={poster}
            label={`Video screenshot of ${title}`}
          />
        ) : coverImage ? (
          <CoverImage
            src={coverImage}
            alt={`Cover Image for ${title}`}
          />
        ) : null}
      </div>
    </>
  );
}

export default ArticleHeader;
