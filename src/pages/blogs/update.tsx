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
import { createBlog, singleBlog as blog } from '../../redux/blogs/blogSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useParams } from 'react-router-dom';
const initialBlogData = {
  title: '',
  image: null,
  description: '',
  is_visible: true,
  meta_title: '',
  meta_keyword: '',
  meta_description: '',
  slug: '',
};

const UpdateBlog: React.FC = () => {
  const { id } = useParams();
  const { message, isError, isLoading, isSuccess, singleBlog } = useAppSelector(
    (state) => state.blogs
  );
  const [blogData, setBlogData] = useState<BlogData>(initialBlogData);
  const [description, setDescription] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    dispatch(blog(Number(id)));
    Object.entries(singleBlog).forEach(([key, value]) => {
      if (key === 'description') {
        setDescription(value);
      }
      setBlogData((prev) => ({
        ...prev,
        [key]: value,
      }));
    });
  }, [id, dispatch, isSuccess]);

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
    /*  if (isSuccess) {
      toast.success(`${message}`);
      setBlogData(initialBlogData);
      setDescription('');
      window.location.reload();
    } else if (isError) {
      toast.error(`${message}`);
    } */
  };

  return (
    <div>
      <CardBody header="Update Blog" to="/blogs" text="back" />
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
            {/*  {blogData.image && (
              <img
                style={{ width: '100%' }}
                src={URL.createObjectURL(blogData.image)}
                alt="category"
              />
            )} */}
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
          <Button>Create</Button>
        </form>
      </Display>
    </div>
  );
};

export default UpdateBlog;
