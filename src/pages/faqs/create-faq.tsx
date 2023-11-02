import { FormEvent, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import { IFaq } from '../../interfaces/faq';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { createFaq, reset } from '../../redux/faqs/faqSlice';

const initialData = {
  question: '',
  answer: '',
  is_visible: true,
};

const CreateFaq: React.FC = () => {
  const dispatch = useAppDispatch();
  const { message, isCreate, isError, isLoading } = useAppSelector(
    (state) => state.faqs
  );
  const [faqData, setFaqData] = useState<IFaq>(initialData);

  useEffect(() => {
    if (isCreate) {
      toast.success(`${message}`);
    }
    if (isError) {
      toast.error('Blog create filed');
    }
    return () => {
      dispatch(reset());
    };
  }, [isCreate, dispatch, isError, message]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFaqData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(createFaq(faqData));
    setFaqData(initialData);
  };

  return (
    <div>
      <CardBody header="Create Faq" to="/faqs" text="back" />
      <Display>
        <form onSubmit={handleSubmit}>
          <Input
            name="question"
            onChange={handleChange}
            htmlFor="title"
            label="Title *"
            placeholder="Enter Title"
            value={faqData.question}
            required
          />

          <TextArea
            name="answer"
            onChange={handleChange}
            value={faqData.answer}
            label="Meta Description"
            placeholder="Enter Meta Description"
            required
          />
          <Button>{isLoading ? 'Loading' : 'Create'}</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateFaq;
