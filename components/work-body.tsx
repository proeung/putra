import Container from './container';
import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string
}

const WorkBody = ({ content }: Props) => {
  return (
    <section className="py-16 md:py-40 relative w-full">
      <Container>
        <div className="mx-auto prose max-w-full lg:max-w-3xl dark:prose-invert">
          <div
            className={markdownStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </Container>
    </section>
  );
}

export default WorkBody;
