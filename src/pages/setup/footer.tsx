import { FC } from 'react';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import './footer.scss';
import Select from '../../components/forms/select';
import CardBody from '../../components/card-body';

const options = [
  { label: 'Home-horizontal', value: 'home' },
  { label: 'Home-vertical ', value: 'home-v' },
  { label: 'Product', value: 'product' },
  { label: 'Category', value: 'category' },
  { label: 'Video', value: 'video' },
  { label: 'Blog', value: 'blog' },
];

const Footer: FC = () => {
  return (
    <div>
      <CardBody header="Create Menu" to="/setup/header" text="remove" />
      <Display>
        <form>
          <Input
            htmlFor="url"
            label="URL"
            name="url"
            placeholder="URL"
            required
          />
          {/*  <Select
            name="group_by"
            onChange={handleBannerData}
            label="Select Group"
            value={bannerData.group_by as string}
            options={options}
            required
          /> */}
        </form>
      </Display>
    </div>
  );
};

export default Footer;
