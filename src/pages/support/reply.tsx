// import React from 'react';
import { Button } from '../../components/button';
import FileInput from '../../components/forms/file-input';
import TextArea from '../../components/forms/textarea';
import './replay.scss';

const Replay = () => {
  return (
    <div>
      <div className="replay-area">
        <div className="left">
          <img src="/assets/images/product.png" alt="replay" />
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quae eaque animi numquam sapiente quis nesciunt error
            hic, temporibus ad deleniti neque, accusantium velit fuga officia
            dignissimos? Eius, assumenda unde.
          </p>
        </div>
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
