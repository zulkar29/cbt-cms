import { useState, FormEvent, useEffect } from 'react';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import DescriptionInput from '../../components/description';
import Column from '../../components/table/column';
import { Button } from '../../components/button';
import { toast } from 'react-toastify';

const initialState = {
  title: '',
  slug: '',
  content: '',
  meta_title: '',
  meta_description: '',
};
const CreatePage = () => {
  const [pageData, setPageData] = useState(initialState);
  const [description, setDescription] = useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPageData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    setPageData((prev) => ({
      ...prev,
      content: description,
    }));
  }, [description]);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /*  if (!description) {
      return toast.error('Please fillup the description');
    } */
    setPageData(initialState);
    setDescription('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <Column className="col-md-8">
            <Display>
              <Input
                htmlFor="title"
                label="Title *"
                placeholder="Enter Title"
                name="title"
                value={pageData.title}
                onChange={handleChange}
                required
              />
              <Input
                htmlFor="slug"
                label="Slug *"
                name="slug"
                value={pageData.slug}
                onChange={handleChange}
                placeholder="Enter Slug"
                required
              />
              <div className="des-none">
                <TextArea label="Description" value={description} required />
              </div>
              <DescriptionInput value={description} setValue={setDescription} />
            </Display>
          </Column>
          <Column className="col-md-4">
            <Display>
              <Input
                htmlFor="Metatitle"
                name="meta_title"
                value={pageData.meta_title}
                onChange={handleChange}
                placeholder="Enter Title"
                required
              />
              <TextArea
                label="Meta Description"
                name="meta_description"
                value={pageData.meta_description}
                onChange={handleChange}
                placeholder="Meta description"
                required
              />
              <Button type="submit">Save Page</Button>
            </Display>
          </Column>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
