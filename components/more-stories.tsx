import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  // Placeholder video path
  const placeholderVideo = '/assets/work/outrider/work--outrider.mp4';
  const placeholderVideTwo = '/assets/work/albright-knox/work--albright-knox-compressed.mp4';
  const placeholderVideThree = '/assets/work/happy-cog/work--happy-cog-homepage.mp4';

  return (
    <section id="work" className="container relative mx-auto px-5 md:mb-40 mt-28 w-full">
      <div aria-hidden="true" className="pointer-events-none hidden lg:block blob absolute opacity-30 -right-40 -top-56 z-[-1]"></div>
      <div className="grid grid-cols-3 gap-8">
        <div className="row-span-1 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden">
          <img
            src="/assets/work/whyy/work--whyy-thumb.png"
            className=""
            alt=""
          />
        </div>

        <div className="row-span-1 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden col-span-2">
          <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0">
                  <video autoPlay loop muted playsInline className="object-cover w-full h-full">
                      <source src={placeholderVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </div>
          </div>
        </div>

        <div className="row-span-1 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden col-span-2">
          <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0">
                  <video autoPlay loop muted playsInline className="object-cover w-full h-full">
                      <source src={placeholderVideTwo} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </div>
          </div>
        </div>

        <div className="row-span-1 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden px-10 pt-10">
          <div className="w-full h-full shadow-lg h-[515px] overflow-hidden">
            <div className="w-full h-10 rounded-t-lg bg-gray-200 dark:bg-slate-900 flex justify-start items-center space-x-1.5 px-4">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <img
              src="/assets/work/merative/work--merative-thumb.webp"
              className="w-full object-cover"
              alt=""
              loading="lazy"
            />
          </div>
        </div>

        <div className="row-span-1 rounded-3xl bg-neutral-100 p-4 dark:bg-slate-800">
        </div>

        <div className="row-span-1 rounded-3xl bg-neutral-100 dark:bg-slate-800 overflow-hidden col-span-2">
          <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0">
                  <video autoPlay loop muted playsInline className="object-cover w-full h-full">
                      <source src={placeholderVideThree} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </div>
          </div>
        </div>        
      </div>

      <div aria-hidden="true" className="pointer-events-none hidden lg:block blob absolute opacity-30 -left-40 -bottom-1/4 z-[-1]"></div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mt-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div> */}
    </section>
  )
}

export default MoreStories
