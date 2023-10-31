import { Button } from '../../components/button';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import Menu from '../../components/menu';

const Header = () => {
  return (
    <div>
      <Display>
        <h3>Header Help Elements</h3>
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
    </div>
  );
};

export default Header;
