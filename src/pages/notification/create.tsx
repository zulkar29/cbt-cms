import { FormEvent, useEffect, useState } from 'react';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import { Button } from '../../components/button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { createNotification } from '../../redux/notification/notificationSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Display from '../../components/display';
import CardBody from '../../components/card-body';

const CreateNotification = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isCreate, isError } = useAppSelector((state) => state.notification);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(createNotification({ title, details }));
  };

  useEffect(() => {
    if (isCreate) {
      toast.success('Notification push successfully');
      navigate('/notification');
    }
    if (isError) {
      toast.error('Notification Error');
    }
  }, [isCreate, isError, navigate]);

  return (
    <div>
      <CardBody header="New Notification" to="/notification" text="Back" />
      <Display>
        <form onSubmit={handleSubmit}>
          <Input
            htmlFor="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Details"
            onChange={(e) => setDetails(e.target.value)}
          />
          <Button type="submit">Push</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateNotification;
