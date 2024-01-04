import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../components/button";
import CardBody from "../../components/card-body";
import Display from "../../components/display";
import FileInput from "../../components/forms/file-input";
import Input from "../../components/forms/text-input";
import { reset, updateAddBanner } from "../../redux/add-banner/addBannerSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

/* const initialState = {
  url: "",
  group_by: "slider",
  image: null as File | null,
  is_visible: true,
}; */
const UpdateSlider = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isUpdate, message, isError } = useAppSelector(
    (state) => state.banner
  );
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      setImage(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("group_by", "slider");
    formData.append("is_visible", "true");
    formData.append("url", url);
    if (image) {
      formData.append("image", image);
    }

    dispatch(updateAddBanner({ bannerData: formData, id: slug as string }));
  };

  useEffect(() => {
    if (isUpdate) {
      toast.success(`${message}`);
      navigate("/setup/home-page");
    }
    if (isError) {
      toast.error("Blog create filed");
    }
    return () => {
      dispatch(reset());
    };
  }, [isUpdate, message, dispatch, isError, navigate]);

  return (
    <div>
      <CardBody header="Update Banner" to="/banner" text="Back" />
      <Display>
        <form onSubmit={handleSubmit}>
          <FileInput
            name="image"
            onChange={handleImageChange}
            label="Banner Image"
          />
          <Input
            htmlFor="url"
            label="URL"
            name="url"
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <Button type="submit">Update</Button>
        </form>
      </Display>
    </div>
  );
};

export default UpdateSlider;
