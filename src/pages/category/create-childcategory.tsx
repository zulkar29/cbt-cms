import { useState } from 'react';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import Select from '../../components/forms/select';

const CreateChildCategory: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const options2 = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleSelectChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <div>
      <CardBody header="Create Chid Category" to="/childcategory" text="back" />
      <Display>
        <form>
          <Select
            label="Select Category *"
            name="mySelect"
            value={selectedOption}
            onChange={handleSelectChange}
            options={options}
            required
          />
          <Select
            label="Select subcategory *"
            name="mySelect"
            value={selectedOption2}
            onChange={handleSelectChange2}
            options={options2}
            required
          />
          <Input
            label="Title *"
            placeholder="Enter Title"
            htmlFor="title"
            required
          />
          <Input
            label="Slug *"
            placeholder="Enter Slug"
            htmlFor="slug"
            required
          />
          <Button>Submit</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateChildCategory;
