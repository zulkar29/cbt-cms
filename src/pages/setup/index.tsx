import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Button } from '../../components/button';
import Display from '../../components/display';
import FileInput from '../../components/forms/file-input';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import Column from '../../components/table/column';
import './index.scss';
import { IHomePage } from '../../interfaces/homePage';
import { API_ROOT, API_URL } from '../../constants';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  meta_title: '',
  meta_description: '',
  mobile_number: '',
  office_time: '',
  special_product_link: '',
  special_product_photo: null,
};

const SetupPage: React.FC = () => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/home-page`);
        const data = await response.json();

        if (data.homePage) {
          setHomeData(data.homePage);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isSuccess]);

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
          </Column>
        </div>
      </form>
    </div>
  );
};

export default SetupPage;
