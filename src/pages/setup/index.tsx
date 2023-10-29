import { useState } from 'react';
import { Button } from '../../components/button';
import Display from '../../components/display';
import FileInput from '../../components/forms/file-input';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import Column from '../../components/table/column';
import './index.scss';
import { IHomePage } from '../../interfaces/homePage';

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

  return (
    <div>
      <form>
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
                required
              />
              <Input
                htmlFor="time"
                label="Office Time"
                placeholder="Office time"
                required
              />
              <Input
                htmlFor="s-product"
                label="Special Product Link"
                placeholder="Special product link"
                required
              />
              <FileInput label="Special Product Image" required />
            </Display>
          </Column>
          <Column className="col-md-6">
            <Display>
              <Input
                htmlFor="m-title"
                label="Meta Title"
                placeholder="Mobile Number"
                required
              />
              <TextArea label="Meta Description" />
            </Display>
          </Column>
        </div>
      </form>
    </div>
  );
};

export default SetupPage;
