import Container from './container';
import Textarea from './textarea';

type Props = {
  content: string
}

const WorkBody = ({ content }: Props) => {
  return (
    <section className="py-16 md:py-40 relative w-full">
      <Container>
        <Textarea content={content} />
      </Container>
    </section>
  );
}

export default WorkBody;
