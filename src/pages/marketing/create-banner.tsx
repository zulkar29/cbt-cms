import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import FileInput from '../../components/forms/file-input';
import Select from '../../components/forms/select';
import Input from '../../components/forms/text-input';
import { useState, ChangeEvent } from 'react';

const options = [
  { label: 'Home', value: 'home' },
  { label: 'Product', value: 'product' },
  { label: 'Category', value: 'category' },
  { label: 'Video', value: 'video' },
  { label: 'Blog', value: 'blog' },
];

const initialState = {
  url: '',
  group_by: '',
  image: null as File | null,
  is_visible: false,
};
const CreateBanner = () => {
  const [bannerData, setBannerData] = useState(initialState);
  console.log(bannerData);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]; // Get the first selected file

      setBannerData((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  };
  const handleBannerData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setBannerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <CardBody header="Create Banner" to="/banner" text="Back" />
      <Display>
        <form>
          <FileInput
            name="image"
            onChange={handleImageChange}
            label="Banner Image"
            required
          />
          <Input
            htmlFor="url"
            label="URL"
            name="url"
            onChange={handleBannerData}
            required
          />
          <Select
            name="group_by"
            onChange={handleBannerData}
            label="Select Group"
            value={bannerData.group_by}
            options={options}
            required
          />
          <Button type="submit">Create</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateBanner;
