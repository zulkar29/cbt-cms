import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import { Button } from '../../components/button';

const UpdateVideo: React.FC = () => {
  return (
    <div>
      <CardBody to="/videos" text="back" header="Create Video" />

      <Display>
        <form>
          <Input
            label="Video Title *"
            placeholder="video title"
            htmlFor="video"
            required
          />
          <Input label="Slug *" placeholder="Slug" htmlFor="slug" required />
          <Input
            label="Video Link *"
            placeholder="Enter video embed code"
            htmlFor="link"
            required
          />
          <Button type="submit">Save</Button>
        </form>
      </Display>
    </div>
  );
};

export default UpdateVideo;
