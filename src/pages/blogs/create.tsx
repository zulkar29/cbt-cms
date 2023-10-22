import { ChangeEvent, FormEvent, useState, useRef, useEffect } from 'react';
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
import { createBlog, reset } from '../../redux/blogs/blogSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
const initialBlogData = {
  title: '',
  image: null,
  is_visible: false,
  meta_title: '',
  meta_keyword: '',
  meta_description: '',
  slug: '',
};

const CreateBlog: React.FC = () => {
  const [blogData, setBlogData] = useState<BlogData>(initialBlogData);
  const formRef = useRef<HTMLFormElement | null>(null);
  const dispatch = useAppDispatch();
  const { isError, isLoading, isSuccess, message } = useAppSelector(
    (state) => state.blogs
  );
  console.log(message);
  console.log(isSuccess);

  useEffect(() => {
    if (isSuccess) {
      toast.success(`${message}`);
    }
    if (isError) {
      toast.error('Blog create filed');
    }
    return () => {
      dispatch(reset());
    };
  }, [isSuccess, message, dispatch, isError]);

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
    formData.append('description', description);
    dispatch(createBlog(formData));
    //reset form
    setBlogData(initialBlogData);
    setDescription('');
  };

  return (
    <div>
      <CardBody header="Create Blog" to="/blogs" text="back" />
      {isLoading && <p>Please Wait.</p>}
      <Display>
        <form onSubmit={handleSubmit} ref={formRef}>
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
            htmlFor="Slug"
            label="slug *"
            name="slug"
            value={blogData.slug}
            onChange={handleBlogData}
            placeholder="Slug"
          />
          <Input
            htmlFor="Meta-Title"
            label="Meta title *"
            name="meta_title"
            value={blogData.meta_title}
            onChange={handleBlogData}
            placeholder="Meta Title"
          />
          <Input
            htmlFor="Meta-Keywords"
            label="Meta Keywords *"
            name="meta_keyword"
            onChange={handleBlogData}
            value={blogData.meta_keyword}
            placeholder="Meta Keywords"
          />
          <TextArea
            label="Meta Description"
            name="meta_description"
            onChange={handleBlogData}
            value={blogData.meta_description}
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
