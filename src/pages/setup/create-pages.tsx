import { useState } from 'react';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import DescriptionInput from '../../components/description';
import Column from '../../components/table/column';
import FileInput from '../../components/forms/file-input';
import { Button } from '../../components/button';

const CreatePage = () => {
  const [description, setDescription] = useState('');
  return (
    <div>
      <div className="row">
        <Column className="col-md-8">
          <Display>
            <Input htmlFor="title" label="Title *" placeholder="Enter Title" />
            <Input htmlFor="slug" label="Slug *" placeholder="Enter Slug" />
            <div className="des-none">
              <TextArea label="Description" value={description} required />
            </div>
            <DescriptionInput value={description} setValue={setDescription} />
          </Display>
        </Column>
        <Column className="col-md-4">
          <Display>
            <Input
              htmlFor="Metatitle"
              label="Meta Title *"
              placeholder="Enter Title"
            />
            <FileInput label="Meta Image" />
            <TextArea label="Meta Description" placeholder="Meta description" />
            <Button>Save Page</Button>
          </Display>
        </Column>
      </div>
    </div>
  );
};

export default CreatePage;
