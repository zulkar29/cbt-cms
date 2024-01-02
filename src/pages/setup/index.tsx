import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../components/button";
import DeleteButton from "../../components/button/delete";
import EditButton from "../../components/button/edit";
import CardBody from "../../components/card-body";
import CustomIconArea from "../../components/custom-icon-area";
import Display from "../../components/display";
import ToggleButton from "../../components/forms/checkbox";
import FileInput from "../../components/forms/file-input";
import Input from "../../components/forms/text-input";
import TextArea from "../../components/forms/textarea";
import Column from "../../components/table/column";
import Row from "../../components/table/row";
import { API_ROOT, API_URL } from "../../constants";
import { IAdBanner } from "../../interfaces/addBanner";
import { IHomePage } from "../../interfaces/homePage";
import axios from "../../lib";
import {
  deleteBanner,
  getAddBanner,
  getSlider,
  updateAddBanner,
} from "../../redux/add-banner/addBannerSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./index.scss";

const initialState = {
  meta_title: "",
  meta_description: "",
  mobile_number: "",
  office_time: "",
  special_product_link: "",
  special_product_photo: null,
};

const SetupPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { addBanner, isDelete } = useAppSelector((state) => state.banner);
  const [homeData, setHomeData] = useState<IHomePage>(initialState);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleHomeData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setHomeData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]; // Get the first selected file

      setHomeData((prevState) => ({
        ...prevState,
        special_product_photo: file,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(homeData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    setIsSuccess(false);
    await axios.put(`${API_URL}/home-page`, formData).then((res) => {
      setIsSuccess(true);
      toast.success(`${res.data.message}`);
    });
  };

  const handleDelete = (id: number) => {
    dispatch(deleteBanner(id));
  };

  const handleVisibility = (banner: IAdBanner) => {
    dispatch(
      updateAddBanner({ id: banner.id, is_visible: !banner.is_visible })
    );
    dispatch(getAddBanner());
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/home-page`);
        const data = await response.json();

        if (data.homePage) {
          setHomeData(data.homePage);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isSuccess]);

  useEffect(() => {
    dispatch(getSlider());
  }, [dispatch, isDelete]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <Column className="col-md-12 setup">
            <Button>Update</Button>
          </Column>
          <Column className="col-md-6">
            <Display>
              <Input
                htmlFor="Mobile"
                label="Mobile Number"
                placeholder="Mobile Number"
                value={homeData.mobile_number}
                onChange={handleHomeData}
                name="mobile_number"
                required
              />
              <Input
                htmlFor="time"
                label="Office Time"
                placeholder="Office time"
                value={homeData.office_time}
                onChange={handleHomeData}
                name="office_time"
                required
              />
              <Input
                htmlFor="s-product"
                label="Special Product Link"
                placeholder="Special product link"
                value={homeData.special_product_link}
                onChange={handleHomeData}
                name="special_product_link"
                required
              />
              <FileInput
                label="Special Product Image"
                name="special_product_photo"
                onChange={handleImageChange}
              />
              <img
                src={`${API_ROOT}/images/home-page/${homeData.special_product_photo}`}
                alt=""
              />
            </Display>
          </Column>
          <Column className="col-md-6">
            <Display>
              <Input
                htmlFor="m-title"
                label="Meta Title"
                placeholder="Mobile Number"
                value={homeData.meta_title}
                onChange={handleHomeData}
                name="meta_title"
                required
              />
              <TextArea
                label="Meta Description"
                value={homeData.meta_description}
                onChange={handleHomeData}
                name="meta_description"
              />
            </Display>
            <Display>
              <CardBody header="Create New Banner" to="/setup/sliders/create" />
              <Row className="row">
                <Column className="col-md-4">Image</Column>
                <Column className="col-md-4">Link</Column>
                <Column className="col-md-2">Status</Column>
                <Column className="col-md-2">Action</Column>
              </Row>
              {addBanner?.map((banner, index) => (
                <Row key={index} className="row banner">
                  <Column className="col-md-4">
                    <img
                      src={`${API_ROOT}/images/banner/${banner.image}`}
                      alt="banner"
                    />
                  </Column>
                  <Column className="col-md-4">{banner.url}</Column>
                  <Column className="col-md-2">
                    <ToggleButton
                      onClick={() => handleVisibility(banner)}
                      isChecked={banner.is_visible}
                    />
                  </Column>
                  <Column className="col-md-2">
                    <CustomIconArea>
                      <EditButton
                        editUrl={`/setup/sliders/edit/${banner.id}`}
                      />
                      <DeleteButton
                        onClick={() => handleDelete(banner.id as number)}
                      />
                    </CustomIconArea>
                  </Column>
                </Row>
              ))}
            </Display>
          </Column>
        </div>
      </form>
    </div>
  );
};

export default SetupPage;
