import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import FileInput from '../../components/forms/file-input';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import DescriptionInput from '../../components/description';
import './index.scss';
import ToggleButton from '../../components/forms/checkbox';
import { toast } from 'react-toastify';
import { BlogData } from '../../interfaces/blog';
import { createBlog } from '../../redux/blogs/blogSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
const initialBlogData = {
  title: '',
  image: null,
  is_visible: false,
  meta_title: '',
  meta_description: '',
  slug: '',
};

const CreateBlog: React.FC = () => {
  const [blogData, setBlogData] = useState<BlogData>(initialBlogData);
  const dispatch = useAppDispatch();
  const { message, isError, isSuccess } = useAppSelector(
    (state) => state.blogs
  );

  const [description, setDescription] = useState('');

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
  /*   const handleDescriptionChange = (value: string) => {
    setBlogData((prevState) => ({
      ...prevState,
      description: value,
    }));
  }; */
  const handleVisible = () => {
    setBlogData((prevState) => ({
      ...prevState,
      is_visible: !prevState.is_visible,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(blogData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    dispatch(createBlog(formData));
    if (isSuccess) {
      setBlogData(initialBlogData);
    }
    if (isError) {
      toast.error(`${message}`);
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
            value={blogData.title}
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
