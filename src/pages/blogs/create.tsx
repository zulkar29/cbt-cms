import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import FileInput from '../../components/forms/file-input';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import DescriptionInput from '../../components/description';
import './index.scss';
<<<<<<< HEAD
import ToggleButton from '../../components/forms/checkbox';
import axios from 'axios';
import { toast } from 'react-toastify';

interface BlogData {
  title: string;
  description: string;
  image: File | null;
  is_visible: boolean;
  meta_title: string;
  meta_description: string;
  slug: string;
}
=======
>>>>>>> parent of 0fcca6f (add toggle checkbox)

const CreateBlog: React.FC = () => {
  const initialBlogData = {
    title: '',
    description: '',
    image: null,
    is_visible: false,
    meta_title: '',
    meta_description: '',
    slug: '',
  };
  const [blogData, setBlogData] = useState<BlogData>(initialBlogData);
  console.log(blogData);

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
  const handleDescriptionChange = (value: string) => {
    setBlogData((prevState) => ({
      ...prevState,
      description: value,
    }));
  };
  const handleVisible = () => {
    setBlogData((prevState) => ({
      ...prevState,
      is_visible: !prevState.is_visible,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(blogData).map(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/blogs`,
        formData
      );
      toast.success(data.message);
      setBlogData(initialBlogData);
    } catch (error) {
      // toast.error(error.message)
    }
  };

  return (
    <div>
      <CardBody header="Create Blog" to="/blogs" text="back" />
      <Display>
        <form onSubmit={handleSubmit}>
          <FileInput
            label="Set Image *"
            name="image"
            onChange={handleImageChange}
            placeholder="Choose an Image"
            required
          />
          <div>
            {blogData.image && (
              <img
                style={{ width: '100%' }}
                src={URL.createObjectURL(blogData.image)}
                alt="category"
              />
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

          <Input
            htmlFor="Slug"
            label="Slug *"
            name="slug"
            onChange={handleBlogData}
            placeholder="Enter slug"
            required
          />

          <textarea
            className="des-none"
            name="description"
            id="desc"
            required
            value={blogData.description}
            readOnly
          ></textarea>
          <DescriptionInput
            value={blogData.description}
            setValue={handleDescriptionChange}
          />
          <br />
          <br />

          <Input
            htmlFor="Meta-Title"
            label="Meta title *"
            placeholder="Meta Title"
            onChange={handleBlogData}
            name="meta_title"
          />
          <Input
            htmlFor="Meta-Keywords"
            label="Meta Keywords *"
            placeholder="Meta Keywords"
          />
          <TextArea
            label="Meta Description"
            placeholder="Enter Meta Description"
            name="meta_description"
            onChange={handleBlogData}
          />
          <ToggleButton
            isChecked={blogData.is_visible}
            onClick={handleVisible}
          />
          <Button>Create</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateBlog;
