import { useState } from 'react';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import FileInput from '../../components/forms/file-input';
import DescriptionInput from '../../components/description';
import { Button } from '../../components/button';
import TextArea from '../../components/forms/textarea';
import './create-product.scss';
import Select from '../../components/forms/select';
import ToggleButton from '../../components/forms/checkbox';

const CreateProduct: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  console.log(file);

  const handleChangeFile = (selectedFile: File | null) => {
    setFile(selectedFile);
  };

  return (
    <div className="create-product">
      <CardBody header="Create Product" to="/products" text="back" />
      <form>
        <div className="row">
          <div className="col-md-8">
            <div className="left-body">
              <Display>
                <Input
                  label="Product Title *"
                  placeholder="Enter Name"
                  htmlFor="name"
                  required
                />
                <Input
                  label="Slug *"
                  placeholder="Enter Slug"
                  htmlFor="slug"
                  required
                />
              </Display>

              <Display>
                <FileInput
                  label="Featured Image *"
                  onChange={handleChangeFile}
                  required
                />
                <p className="wearing">
                  Image Size Should Be 800 x 800.
                  <br /> or square size
                </p>
              </Display>

              <Display>
                <Input
                  placeholder="Video Link"
                  label="Video Link"
                  htmlFor="video"
                />
                <p className="wearing">
                  Use proper link without extra parameter.
                  <br /> Don't use short share link/embedded iframe code.
                </p>
              </Display>

              <Display>
                <FileInput
                  label="Gallery Images"
                  multiple
                  required
                  onChange={handleChangeFile}
                />
                <p className="wearing">
                  Image Size Should Be 800 x 800. or square size
                </p>
              </Display>
              <Display>
                <h5 className="product-title">Product Description</h5>
                <div className="des-none">
                  <TextArea label="Description" value={description} required />
                </div>
                <DescriptionInput
                  value={description}
                  setValue={setDescription}
                />
                <h5 className="product-title">Product Policy</h5>
                <div className="des-none">
                  <TextArea label="Description" value={description} required />
                </div>
                <DescriptionInput
                  value={description}
                  setValue={setDescription}
                />
              </Display>
            </div>
          </div>
          <div className="col-md-4">
            <div className="right-body">
              <Display>
                <Button className="save-btn" type="submit">
                  Save & Publish
                </Button>
                <Button type="submit">Save & Unpublished</Button>
              </Display>

              <Display>
                <Input
                  placeholder="Regular Price"
                  label="Regular Price"
                  htmlFor="regular-price"
                />
                <Input
                  placeholder="Discount Price"
                  label="Discount Price"
                  htmlFor="discount-price"
                />
              </Display>

              <Display>
                <Select
                  label="Select Category *"
                  name="mySelect"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  options={options}
                  required
                />
                <TextArea
                  label="Product short description *"
                  placeholder="Product short description"
                />
              </Display>

              <Display>
                <div className="sudo-item">
                  <span>Is New</span>
                  <ToggleButton isChecked />
                </div>
                <div className="sudo-item">
                  <span>Is Sale</span>
                  <ToggleButton isChecked />
                </div>
                <div className="sudo-item">
                  <span>Is Feature</span>
                  <ToggleButton isChecked />
                </div>
              </Display>
              <Display>
                <Input placeholder="Meta Title" htmlFor="meta-title" />
                <Input placeholder="Meta keyword" htmlFor="meta-keyword" />
                <FileInput />
                <TextArea placeholder="Meta Description" />
              </Display>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
