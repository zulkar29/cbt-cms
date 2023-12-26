// import React from 'react';
import axios from '../../lib';
import { Button } from '../../components/button';
import FileInput from '../../components/forms/file-input';
import TextArea from '../../components/forms/textarea';
import './replay.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Replay = () => {
  const { slug } = useParams();
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const getTicketDetails = async () => {
      try {
        const response = await axios.get(`/supports/${slug}`);
        if (response.status === 200) {
          setMessages(response?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTicketDetails();
  }, [slug]);

  console.log(messages);

  return (
    <div>
      <div className="replay-area">
        {/* User Message */}
        <div className="left">
          <img src="/assets/images/product.png" alt="replay" />
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quae eaque animi numquam sapiente quis nesciunt error
            hic, temporibus ad deleniti neque, accusantium velit fuga officia
            dignissimos? Eius, assumenda unde.
          </p>
        </div>
        {/* Admin Message */}
        <div className="right">
          <img src="/assets/images/product.png" alt="replay" />
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quae eaque animi numquam sapiente quis nesciunt error
            hic, temporibus ad deleniti neque, accusantium velit fuga officia
            dignissimos? Eius, assumenda unde.
          </p>
        </div>
      </div>
      <form>
        {/* <Input htmlFor="f" label="Image" ty/> */}
        <TextArea placeholder="Message" />
        <FileInput />
        <Button type="submit">Replay</Button>
      </form>
    </div>
  );
};

export default Replay;
