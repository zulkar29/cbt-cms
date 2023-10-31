import Column from '../table/column';
import Input from '../forms/text-input';
import { RxCross2 } from 'react-icons/rx';
import './index.scss';

const Menu = () => {
  return (
    <div className="alignment">
      <Column className="col-md-4">
        <Input htmlFor="f-w" placeholder="Name" />
      </Column>
      <Column className="col-md-7">
        <Input htmlFor="f-w" placeholder="Url" />
      </Column>
      <Column className="col-md-1">
        <RxCross2 />
      </Column>
    </div>
  );
};

export default Menu;
