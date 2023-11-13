import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
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
import {
  reset,
  singleBlog as blog,
  updateBlog,
} from '../../redux/blogs/blogSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Column from '../../components/table/column';
import { useParams } from 'react-router-dom';

const UpdateBlog = () => {
  const { singleBlog, isSuccess } = useAppSelector((state) => state.blogs);
  const { id } = useParams();
  console.log(id);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<File | string | null>(null);
  const [meta_title, setMetaTitle] = useState('');
  const [meta_description, setMetaDescription] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('slug', slug);
    if (image) {
      formData.append('image', image.toString());
    }
    formData.append('description', description);
    formData.append('meta_title', meta_title);
    formData.append('meta_description', meta_description);
    dispatch(updateBlog({ id: singleBlog.id as number, blogData: formData }));
  };

  useEffect(() => {
    dispatch(blog(Number(id)));
    setTitle(singleBlog.title);
    setDescription(singleBlog.description as string);
    setImage(singleBlog.image ?? null);
    setMetaTitle(singleBlog.meta_title);
    setSlug(singleBlog.slug);
  }, [id, dispatch, singleBlog.title]);

  return (
    <div>
      <CardBody header="Create Blog" to="/blogs" text="back" />
      {/* {isLoading && <p>Please Wait.</p>} */}
      <Display>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <Column className="col-md-8">
              <Input
                htmlFor="title"
                label="Title *"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Title"
                required
              />
              <Input
                htmlFor="Slug"
                label="slug *"
                name="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
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
                value={meta_title}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder="Meta Title"
              />

              <TextArea
                label="Meta Description"
                name="meta_description"
                onChange={(e) => setMetaDescription(e.target.value)}
                value={meta_description}
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

export default UpdateBlog;
