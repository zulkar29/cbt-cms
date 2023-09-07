import { ChangeEvent, useState } from 'react';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import FileInput from '../../components/forms/file-input';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import DescriptionInput from '../../components/description';
import './index.scss';
import ToggleButton from '../../components/forms/checkbox';

interface BlogData {
  title: string;
  description: string;
  image: File | null;
  is_visible: string;
  meta_title: string;
  meta_description: string;
  slug: string;
}

const CreateBlog: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [blogData, setBlogData] = useState<BlogData>({
    title: '',
    description: description,
    image: null,
    is_visible: '',
    meta_title: '',
    meta_description: '',
    slug: '',
  });

  const handleBlogData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setBlogData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]; // Get the first selected file

      setBlogData((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  };

  console.log(blogData);

  return (
    <div>
      <CardBody header="Create Blog" to="/blogs" text="back" />
      <Display>
        <form>
          <FileInput
            label="Set Image *"
            name="image"
            onChange={handleImageChange}
            placeholder="Choose an Image"
            required
          />
          <div>
            {blogData.image && (
              <img src={URL.createObjectURL(blogData.image)} alt="category" />
            )}
          </div>
          <Input
            htmlFor="title"
            label="Title *"
            name="title"
            onChange={handleBlogData}
            placeholder="Enter Title"
            required
          />

          <textarea
            className="des-none"
            name="description"
            id="desc"
            required
            value={description}
            readOnly
          ></textarea>
          <DescriptionInput value={description} setValue={setDescription} />
          <br />
          <br />

          <Input
            htmlFor="Meta-Title"
            label="Meta title *"
            placeholder="Meta Title"
          />
          <Input
            htmlFor="Meta-Keywords"
            label="Meta Keywords *"
            placeholder="Meta Keywords"
          />
          <TextArea
            label="Meta Description"
            placeholder="Enter Meta Description"
          />
          <ToggleButton />
          <Button>Create</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateBlog;
