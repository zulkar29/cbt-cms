import { useState } from 'react';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import { IFaq } from '../../interfaces/faq';

const CreateFaq: React.FC = () => {
  const [faqData, setFaqData] = useState<IFaq>({
    question: '',
    answer: '',
    is_visible: true,
  });

  console.log(faqData);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFaqData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <CardBody header="Create Faq" to="/faqs" text="back" />
      <Display>
        <form>
          <Input
            name="question"
            onChange={handleChange}
            htmlFor="title"
            label="Title *"
            placeholder="Enter Title"
            required
          />

          <TextArea
            name="answer"
            onChange={handleChange}
            label="Meta Description"
            placeholder="Enter Meta Description"
            required
          />
          <Button>Create</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateFaq;
