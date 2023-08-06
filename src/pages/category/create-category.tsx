import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import TextInput from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';

const CreateCategory = () => {
  return (
    <div>
      <CardBody header="Create Category" to="/category" text="back" />
      <Display>
        <form>
          <TextInput label="Title *" placeholder="Enter Name" />
          <TextInput label="Slug *" placeholder="Enter Slug" />
          <TextArea
            label="Meta Description"
            placeholder="Enter Meta Description"
          />
          <Button>Submit</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateCategory;
