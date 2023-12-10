import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import { Button } from '../../components/button';

const UpdateShipping = () => {
  return (
    <div>
      <CardBody header="Create Shipping" to="/shipping" text="Back" />

      <Display>
        <form>
          <Input label="District Name" htmlFor="name" />
          <Input label="Price" htmlFor="name" />

          <Button type="submit">Submit</Button>
        </form>
      </Display>
    </div>
  );
};

export default UpdateShipping;
