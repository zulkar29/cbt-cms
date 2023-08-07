import CardBody from '../../components/card-body';
import Display from '../../components/display';
import TextInput from '../../components/forms/text-input';
import { Button } from '../../components/button';

const CreateVideo: React.FC = () => {
  return (
    <div>
      <CardBody to="/videos" text="back" header="Create Video" />

      <Display>
        <form>
          <TextInput
            label="Video Title *"
            placeholder="video title"
            htmlFor="video"
            required
          />
          <TextInput
            label="Slug *"
            placeholder="Slug"
            htmlFor="slug"
            required
          />
          <TextInput
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

export default CreateVideo;
