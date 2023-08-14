import { useState } from 'react';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import Select from '../../components/forms/select';

const UpdateFaq: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <CardBody header="Create Faq" to="/faqs" text="back" />
      <Display>
        <form>
          <Input
            htmlFor="title"
            label="Title *"
            placeholder="Enter Title"
            required
          />
          <Select
            label="Select Category *"
            name="mySelect"
            value={selectedOption}
            onChange={handleSelectChange}
            options={options}
          />

          <TextArea
            label="Meta Description"
            placeholder="Enter Meta Description"
            required
          />
          <Button>Create</Button>
        </form>
      </Display>
    </div>
  );
};

export default UpdateFaq;
