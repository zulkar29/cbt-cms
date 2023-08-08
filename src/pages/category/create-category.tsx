import { useState } from 'react';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import FileInput from '../../components/forms/file-input';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';

const CreateCategory = () => {
  const [file, setFile] = useState<File | null>(null);
  const handleChangeFile = (selectedFile: File | null) => {
    setFile(selectedFile);
  };

  return (
    <div>
      <CardBody header="Create Category" to="/category" text="back" />
      <Display>
        <form>
          <FileInput
            label="Set Image"
            onChange={handleChangeFile}
            placeholder="Choose an Image"
            required
          />
          <div>
            {file && <img src={URL.createObjectURL(file)} alt="category" />}
          </div>
          <Input htmlFor="title" label="Title *" placeholder="Enter Title" />
          <Input htmlFor="slug" label="Slug *" placeholder="Enter Slug" />
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
