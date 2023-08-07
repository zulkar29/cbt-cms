import { useState } from 'react';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import FileInput from '../../components/forms/file-input';
import TextInput from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import Select from '../../components/forms/select';
import DescriptionInput from '../../components/description';

const CreateBlog = () => {
  const [file, setFile] = useState<File | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleChangeFile = (selectedFile: File | null) => {
    setFile(selectedFile);
  };

  return (
    <div>
      <CardBody header="Create Blog" to="/blogs" text="back" />
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
          <TextInput
            htmlFor="title"
            label="Title *"
            placeholder="Enter Title"
          />
          <Select
            label="Select Category *"
            name="mySelect"
            value={selectedOption}
            onChange={handleSelectChange}
            options={options}
            required
          />
          <DescriptionInput />
          <br />
          <br />
          <TextInput
            htmlFor="Meta-Title"
            label="Meta title *"
            placeholder="Meta Title"
          />
          <TextInput
            htmlFor="Meta-Keywords"
            label="Meta Keywords *"
            placeholder="Meta Keywords"
          />
          <TextArea
            label="Meta Description"
            placeholder="Enter Meta Description"
          />
          <Button>Create</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateBlog;
