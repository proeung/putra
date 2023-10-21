import Container from './container';
import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string
}

const WorkBody = ({ content }: Props) => {
  return (
    <section className="border-t border-slate-900/10 py-16 dark:border-slate-50/[0.1] md:py-40 relative w-full">
      <Container>
        <div className="mx-auto max-w-3xl">
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
