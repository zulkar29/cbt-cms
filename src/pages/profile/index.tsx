import { Button } from "../../components/button";
import CardBody from "../../components/card-body";
import Display from "../../components/display";
import Input from "../../components/forms/text-input";

const Profile = () => {
  return (
    <div>
      <CardBody header="Admin Profile" to="#" />

      <Display>
        <form>
          <Input htmlFor="name" label="Name" placeholder="Your Name" />
          <Input
            htmlFor="password"
            type="password"
            label="Password"
            placeholder="Password"
          />
          <Input
            htmlFor="confirm_password"
            label="Confirm Password"
            placeholder="Confirm Password"
          />
          <Button type="submit">Update</Button>
        </form>
      </Display>
    </div>
  );
};

export default Profile;
