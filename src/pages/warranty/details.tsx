import Display from '../../components/display';
import { Button } from '../../components/button';
import TextArea from '../../components/forms/textarea';
import CardBody from '../../components/card-body';

const WarrantyDetails = () => {
  return (
    <>
      <CardBody header="Warranty Details" to="/warranty" text="Back" />
      <Display>
        <div className="flex">
          <h3>Reason:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            temporibus commodi illum aperiam numquam corporis placeat, eos
            cumque vitae vero rerum velit ab molestiae repudiandae quidem culpa,
            aliquid inventore ipsam.
          </p>
        </div>
        <br />
        <form>
          <TextArea name="replay" label="Replay" placeholder="Replay" />
          <Button type="submit">Submit</Button>
        </form>
      </Display>
    </>
  );
};

export default WarrantyDetails;
