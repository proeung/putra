import React, { useState } from 'react';
import Container from "./container";
import CoverVideo from './cover-video';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import Image from 'next/image';
import type WorkType from '../interfaces/work';

type Props = {
  works: WorkType[];
};

const MoreWork: React.FC<Props> = ({ works }) => {
  const [filter, setFilter] = useState<string>('featured');

  const getFilteredWorks = () => {
    switch (filter) {
      case 'featured':
        return works.filter((work) => work.featured === 1);
      case 'recent':
        return works.filter((work) => work.recent === 1);
      default:
        return works;
    }
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <section id="work" className="pt-12 pb-16 md:pb-40 md:pt-12">
      <Container>
        <div aria-hidden="true" className="pointer-events-none block blob absolute opacity-30 -right-40 -top-56 z-[-1] w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem]"></div>

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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {getFilteredWorks().map((work) => (
              <Link
                as={`/work/${work.slug}`}
                href="/work/[slug]"
                key={work.slug}
                className={`${work.thumbnail.type === 'video' ? 'col-span-2 xl:max-h-[582px]' : 'col-span-2 md:col-span-1'
                  } row-span-1 rounded-2xl md:rounded-3xl bg-slate-100 dark:bg-slate-800 card`}
                title={work.title}
              >
                <Fade delay={.5} triggerOnce className="h-full will-change-transform rounded-2xl md:rounded-3xl overflow-hidden">
                  {
                    work.thumbnail.type === 'video' ? (
                      <CoverVideo
                        src={work.thumbnail.url}
                        poster={work.thumbnail.poster}
                        label={`Video screenshot of ${work.title}`}
                      />
                    ) : work.thumbnail.type === 'browser' ? (
                      <div className="w-full h-full p-10 md:p-4 lg:p-10">
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
                </Fade>
              </Link>
            ))}
          </div>
        </Fade>

        <div aria-hidden="true" className="pointer-events-none blob absolute opacity-30 -left-40 -bottom-1/4 z-[-1] w-[40rem] h-[40rem]"></div>
      </Container>
    </section>
  );
};

export default MoreWork;
