import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../components/button";
import CardBody from "../../components/card-body";
import Display from "../../components/display";
import Input from "../../components/forms/text-input";
import axios from "../../lib";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  //   const [image, setImage] = useState<File | null>(null);
  const [mobile, setMobile] = useState("");

  const formData = {
    name,
    email,
    mobile,
    password,
    role_id: 1,
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password didn't match");
    }
    try {
      const response = await axios.post(`/users`, formData);
      if (response?.status === 201) {
        toast.success(response.data.message);
        navigate("/staffs");
      }
    } catch (error) {
      console.log(error);
      toast.error("Admin is not created!");
    }
  };

  return (
    <div>
      <CardBody header="Admin Create Profile" to="/staffs" text="Back" />

      <Display>
        <form onSubmit={handleSubmit}>
          <Input
            htmlFor="name"
            label="Name"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            htmlFor="email"
            type="email"
            label="Email"
            placeholder="Your Name"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            htmlFor="mobile"
            label="Mobile"
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <Input
            htmlFor="password"
            type="password"
            label="Password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            htmlFor="confirm_password"
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {/*  <FileInput
            onChange={(e) => {
              if (e.target.files) {
                setImage(e.target.files[0]);
              }
            }}
          /> */}
          <Button type="submit">Update</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateProfile;
