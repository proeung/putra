import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import { Fade } from 'react-awesome-reveal';
import PageTitle from './page-title';

type Props = {
  title: string
  coverImage: string
  date: string
}

const ArticleHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-16 mb-10 md:mt-28 lg:mt-40 md:mb-16">
        <Fade cascade delay={1} damping={1e-1}>
          <PageTitle>{title}</PageTitle>
          <div className="font-bold mt-4 text-sm text-zinc-600 md:text-base dark:text-zinc-400">
            <DateFormatter dateString={date} />
          </div>
        </Fade>
      </div>

      <div className="bg-neutral-100 mb-8 -mx-5 overflow-hidden shadow-lg dark:bg-slate-800 sm:mx-0 md:rounded-3xl md:mb-16">
        <Fade delay={1e2} damping={1e-1}>
          <CoverImage
            src={coverImage}
            alt={`Cover Image for ${title}`}
          />
        </Fade>
      </div>
    </>
  );
}

export default ArticleHeader;
