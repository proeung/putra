import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  // Placeholder video path
  const placeholderVideo = '/assets/work/outrider/1062304438.mp4';
  const placeholderVideTwo = '/assets/work/albright-knox/1251772433.mp4';
  const placeholderVideThree = '/assets/work/wwii/1252901439.mp4';

  return (
    <section className="container relative mx-auto px-5 md:mb-40 mt-28 w-full">
      <div aria-hidden="true" className="pointer-events-none hidden lg:block blob absolute opacity-30 -right-40 -top-56 z-[-1]"></div>
      <div className="grid grid-cols-3 gap-8">
        <div className="row-span-1 rounded-3xl bg-neutral-100 p-4 dark:bg-slate-800">
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
                      <source src={placeholderVideThree} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </div>
          </div>
        </div>

        <div className="row-span-1 rounded-3xl bg-neutral-100 p-4 dark:bg-slate-800">
        </div>

        <div className="row-span-1 rounded-3xl bg-neutral-100 p-4 dark:bg-slate-800">
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
