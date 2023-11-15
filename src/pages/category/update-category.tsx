import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import FileInput from '../../components/forms/file-input';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  getCategories,
  updateCategory,
} from '../../redux/category/categorySlice';
import { useParams } from 'react-router-dom';
import Column from '../../components/table/column';
import Select from '../../components/select';

const UpdateCategory: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  // const { slug } = useParams();
  const { categories } = useAppSelector((state) => state.category);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [parent_category, setParentCategory] = useState('');
  const [image, setImage] = useState<File | string | null>(null);
  const [meta_title, setMetaTitle] = useState('');
  const [meta_description, setMetaDescription] = useState('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImage(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('slug', slug);
    formData.append('parent_category', parent_category);
    if (image !== null) {
      formData.append('image', image);
    }
    formData.append('meta_title', meta_title);
    formData.append('meta_description', meta_description);
  };

  useEffect(() => {
    dispatch(getCategories({}));
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      console.log('first');
    };
  }, []);

  return (
    <div>
      <CardBody header="Create Category" to="/category" text="back" />
      <Display>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <Column className="col-md-8">
              <Input
                htmlFor="title"
                name="title"
                label="Title *"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Title"
                required
              />
              <Input
                htmlFor="slug"
                name="slug"
                label="Slug *"
                onChange={(e) => setSlug(e.target.value)}
                placeholder="Enter Slug"
                required
              />
              <Select
                htmlFor="Choose Parent category"
                name="parent_category"
                onChange={(e) => setParentCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option
                    key={index}
                    value={category.slug}
                    selected={category.slug === slug}
                  >
                    {category.title}
                  </option>
                ))}
              </Select>
              <FileInput
                label="Set Image"
                placeholder="Choose an Image"
                onChange={handleImageChange}
              />
            </Column>
            <Column className="col-md-4">
              <br />
              <Input
                name="meta_title"
                placeholder="Meta Title"
                htmlFor="meta-title"
                onChange={(e) => setMetaTitle(e.target.value)}
              />
              <TextArea
                name="meta_description"
                placeholder="Meta Description"
                onChange={(e) => setMetaDescription(e.target.value)}
              />
            </Column>
          </div>
          <div className="text-right">
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Display>
    </div>
  );
};

export default UpdateCategory;
