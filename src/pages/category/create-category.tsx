import { useState, useEffect } from 'react';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import FileInput from '../../components/forms/file-input';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import Column from '../../components/table/column';
import Select from '../../components/select';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCategories } from '../../redux/category/categorySlice';

const CreateCategory: React.FC = () => {
  const { categories } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);
  const handleChangeFile = (selectedFile: File) => {
    setFile(selectedFile);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div>
      <CardBody header="Create Category" to="/category" text="back" />
      <Display>
        <form>
          <div className="row">
            <Column className="col-md-8">
              <Input
                htmlFor="title"
                label="Title *"
                placeholder="Enter Title"
                required
              />
              <Input
                htmlFor="slug"
                label="Slug *"
                placeholder="Enter Slug"
                required
              />
              <Select htmlFor="Choose Parent category">
                {categories.map((category) => (
                  <option
                    value={category.title.replace(' ', '_').toLowerCase()}
                  >
                    {category.title}
                  </option>
                ))}
              </Select>
              <FileInput
                label="Set Image"
                onChange={handleChangeFile}
                placeholder="Choose an Image"
                required
              />
            </Column>
            <Column className="col-md-4">
              <br />
              <Input placeholder="Meta Title" htmlFor="meta-title" />
              <Input placeholder="Meta keyword" htmlFor="meta-keyword" />
              <FileInput />
              <TextArea placeholder="Meta Description" />
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

export default CreateCategory;
