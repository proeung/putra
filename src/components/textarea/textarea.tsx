import { useEffect, useRef } from 'react';
import markdownStyles from '@/components/markdown-styles.module.css';

type Props = {
  content: string
}

const Textarea = ({ content }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const images = contentRef.current.querySelectorAll('img');
    const observers: IntersectionObserver[] = [];

    images.forEach((img) => {
      // Initially hide image
      img.style.opacity = '0';
      img.setAttribute('loading', 'lazy');

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Handle image load
            const handleLoad = () => {
              img.style.opacity = '1';
            };

            if (img.complete) {
              // Image already loaded
              handleLoad();
            } else {
              img.addEventListener('load', handleLoad, { once: true });
            }

            observer.disconnect();
          }
        },
        {
          rootMargin: '60px',
          threshold: 0.01
        }
      );

      observer.observe(img);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [content]);

  return (
    <div className="mx-auto prose max-w-full lg:max-w-3xl dark:prose-invert">
      <div
        ref={contentRef}
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default Textarea;
