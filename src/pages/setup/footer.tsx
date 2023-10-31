import { FC } from 'react';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import './footer.scss';
import Menu from '../../components/menu';
import { Button } from '../../components/button';

const Footer: FC = () => {
  return (
    <div>
      <Display>
        <h3>Link Widget One</h3>
        <br />
        <Input htmlFor="f-w" label="Title" placeholder="title" />
        <h6>Links</h6>
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Button>Add new</Button>
        <br />
        <div className="text-right">
          <Button>Update</Button>
        </div>
      </Display>
      <Display>
        <h3>Link Widget Two</h3>
        <br />
        <Input htmlFor="f-w" label="Title" placeholder="title" />
        <h6>Links</h6>
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Button>Add new</Button>
        <br />
        <div className="text-right">
          <Button>Update</Button>
        </div>
      </Display>
    </div>
  );
};

export default Footer;
