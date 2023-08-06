import { useState } from 'react';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import TextInput from '../../components/forms/text-input';
import Select from '../../components/forms/select';

const CreateSubcategory = () => {
  const [selectedOption, setSelectedOption] = useState('');
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
      <CardBody header="Create Subcategory" to="/subcategory" text="back" />
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
          <TextInput label="Title *" placeholder="Enter Title" htmlFor='title' required />
          <TextInput label="Slug *" placeholder="Enter Slug" htmlFor='slug' required />
          <Button>Submit</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateSubcategory;
