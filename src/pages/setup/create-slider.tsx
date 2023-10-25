import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import FileInput from '../../components/forms/file-input';
import { Button } from '../../components/button';

const CreateSlider = () => {
  return (
    <div>
      <Display>
        <form>
          <FileInput label="Banner Image" required />
          <Input htmlFor="url" label="Url" placeholder="Enter url" required />
          <Button>Create</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateSlider;
