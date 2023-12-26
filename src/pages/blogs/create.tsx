import { ChangeEvent, FormEvent, useState, useRef, useEffect } from 'react';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import FileInput from '../../components/forms/file-input';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import DescriptionInput from '../../components/description';
import './index.scss';
import { toast } from 'react-toastify';
import { BlogData } from '../../interfaces/blog';
import { createBlog, reset } from '../../redux/blogs/blogSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Column from '../../components/table/column';
import { useNavigate } from 'react-router-dom';
const initialBlogData = {
  title: '',
  image: null,
  is_visible: true,
  meta_title: '',
  meta_description: '',
  slug: '',
};

const CreateBlog: React.FC = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState<BlogData>(initialBlogData);
  const formRef = useRef<HTMLFormElement | null>(null);
  const dispatch = useAppDispatch();
  const { isError, isLoading, isCreate, message } = useAppSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    if (isCreate) {
      toast.success(`${message}`);
      navigate('/blogs');
    }
    if (isError) {
      toast.error('Blog create filed');
    }
    return () => {
      dispatch(reset());
    };
  }, [isCreate, dispatch, isError]);

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

  /*   const handleVisible = () => {
    setBlogData((prevState) => ({
      ...prevState,
      is_visible: !prevState.is_visible,
    }));
  }; */

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(blogData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('description', description);
    dispatch(createBlog(formData));
  };

  return (
    <div>
      <CardBody header="Create Blog" to="/blogs" text="back" />
      {isLoading && <p>Please Wait.</p>}
      <Display>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="row">
            <Column className="col-md-8">
              <Input
                htmlFor="title"
                label="Title *"
                name="title"
                value={blogData.title}
                onChange={handleBlogData}
                placeholder="Enter Title"
                required
              />
              <Input
                htmlFor="Slug"
                label="slug *"
                name="slug"
                value={blogData.slug}
                onChange={handleBlogData}
                placeholder="Slug"
              />
              <FileInput
                label="Set Image *"
                name="image"
                onChange={handleImageChange}
                placeholder="Choose an Image"
                required
              />
              <DescriptionInput value={description} setValue={setDescription} />
            </Column>
            <Column className="col-md-4">
              <textarea
                className="des-none"
                name="description"
                id="desc"
                required
                value={description}
                readOnly
              ></textarea>

              <Input
                htmlFor="Meta-Title"
                label="Meta title *"
                name="meta_title"
                value={blogData.meta_title}
                onChange={handleBlogData}
                placeholder="Meta Title"
              />
              <TextArea
                label="Meta Description"
                name="meta_description"
                onChange={handleBlogData}
                value={blogData.meta_description}
                placeholder="Enter Meta Description"
              />
            </Column>
          </div>
          <div>
            {/* {blogData.image && (
              <img
                style={{ width: '100%' }}
                src={URL.createObjectURL(blogData.image)}
                alt="category"
              />
            )} */}
          </div>

          <Button>Create</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateBlog;
