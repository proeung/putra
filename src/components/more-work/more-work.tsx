import React, { useState } from 'react';
import Container from '@/components/container';
import CoverVideo from '@/components/cover-video';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import Image from 'next/image';
import type WorkType from '@/types/work';
import { OverflowMenuHorizontal } from '@carbon/icons-react';

type Props = {
  works: WorkType[];
};

const MoreWork: React.FC<Props> = ({ works }) => {
  const [filter, setFilter] = useState<string>('featured');
  const [showAll, setShowAll] = useState<boolean>(false);

  const getFilteredWorks = () => {
    let filtered;
    switch (filter) {
      case 'featured':
        filtered = works
          .filter((work) => work.featured === 1)
          .sort((a, b) => a.featuredOrder - b.featuredOrder);
        break;
      case 'recent':
        filtered = works
          .filter((work) => work.recent === 1)
          .sort((a, b) => a.recentOrder - b.recentOrder);
        break;
      default:
        filtered = works;
    }
    return showAll ? filtered : filtered.slice(0, 6);
  };

  const getTotalFilteredCount = () => {
    switch (filter) {
      case 'featured':
        return works.filter((work) => work.featured === 1).length;
      case 'recent':
        return works.filter((work) => work.recent === 1).length;
      default:
        return works.length;
    }
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setShowAll(false);
  };

  return (
    <section id="work" className="pt-12 pb-16 md:pb-40 md:pt-12">
      <Container>
        <div aria-hidden="true" className="pointer-events-none block blob absolute opacity-30 -right-40 -top-70 z-[-1] w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem]"></div>

        <Fade delay={.5} triggerOnce>
          <div className="pb-12 flex flex-col items-end justify-end lg:flex-row">
            <div className="flex flex-row gap-3">
              <button
                type="button"
                aria-label="Work Filter Button"
                className={`button ${filter === 'featured' ? 'active' : ''}`}
                onClick={() => handleFilterChange('featured')}
              >
                Featured
              </button>
              <button
                type="button"
                aria-label="Work Filter Button"
                className={`button ${filter === 'recent' ? 'active' : ''}`}
                onClick={() => handleFilterChange('recent')}
              >
                Recent
              </button>
            </div>
          </div>
        </Fade>

        <Fade key={filter} duration={500} triggerOnce>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
            {getFilteredWorks().map((work) => (
              <Link
                as={`/work/${work.slug}`}
                href="/work/[slug]"
                key={work.slug}
                className={`${work.thumbnail.type === 'video' ? 'col-span-2 xl:max-h-[582px]' : 'col-span-2 md:col-span-1'
                  } row-span-1 rounded-2xl md:rounded-3xl bg-slate-100 dark:bg-slate-800 hover:bg-white hover:dark:bg-slate-950 transition duration-300 ease-out hover:ease-in card group`}
                title={work.title}
              >
                <Fade delay={.5} triggerOnce className="h-full will-change-transform rounded-2xl md:rounded-3xl overflow-hidden">
                  <div className="relative w-full h-full">
                    {
                      work.thumbnail.type === 'video' ? (
                        <CoverVideo
                          src={work.thumbnail.url}
                          poster={work.thumbnail.poster}
                          label={`Video screenshot of ${work.title}`}
                          pauseOnHover={true}
                        />
                      ) : work.thumbnail.type === 'browser' ? (
                        <div className="w-full h-full p-10 md:p-4 lg:p-7 xl:p-10">
                          <div className="w-full h-full shadow-lg rounded-lg overflow-hidden">
                            <div className="w-full h-6 md:h-8 rounded-t-lg bg-gray-200 dark:bg-slate-900 flex justify-start items-center space-x-1.5 px-5 md:px-4">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                            </div>
                            <Image
                              src={work.thumbnail.url}
                              alt={`Thumbnail Image for ${work.title}`}
                              className="w-full h-full object-cover"
                              width={856}
                              height={890}
                              priority
                            />
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={work.thumbnail.url}
                          alt={`Thumbnail Image for ${work.title}`}
                          className="w-full h-full object-cover"
                          width={956}
                          height={1112}
                          priority
                        />
                      )
                    }

                    {/* Dark overlay with work info */}
                    <div className="absolute backdrop-blur-lg inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end px-8 py-10 rounded-2xl md:rounded-3xl lg:px-10 lg:py-14 pointer-events-none">
                      {work.title && (
                        <h3 className="font-sans font-bold text-white text-2xl mb-2 lg:text-4xl lg:mb-4 lg:w-2/3">
                          {work.title}
                        </h3>
                      )}
                      {work.thumbnail.workType && (
                        <span className="font-light font-serif tracking-tight text-white text-sm">
                          Tech: {work.thumbnail.workType}
                        </span>
                      )}
                    </div>
                  </div>
                </Fade>
              </Link>
            ))}
          </div>
        </Fade>

        {!showAll && getTotalFilteredCount() > 6 && (
          <Fade delay={.5} triggerOnce>
            <div className="flex justify-center mt-16 md:mt-20">
              <button
                type="button"
                aria-label="See More Work"
                className="button"
                onClick={() => setShowAll(true)}
              >
                See More Work
                <OverflowMenuHorizontal size={16} />
              </button>
            </div>
          </Fade>
        )}

        <div aria-hidden="true" className="pointer-events-none blob absolute opacity-20 -left-40 -bottom-1/4 z-[-1] w-[40rem] h-[40rem] lg:w-[60rem] lg:h-[60rem]"></div>
      </Container>
    </section>
  );
};

export default MoreWork;
