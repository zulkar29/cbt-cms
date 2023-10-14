import { Button } from '../../components/button';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import './footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <form>
        <Row className="row">
          <Column className="col-md-12 button">
            <Button type="submit">Update</Button>
          </Column>
          <Column className="col-md-6">
            <Display>
              <Input label="Footer info" htmlFor="info" required />
              <Input label="Footer copy write" htmlFor="copywrite" required />
              <Input label="Contact Number" htmlFor="mobile-No" required />
              <Input
                label="Contact Email"
                type="email"
                htmlFor="email"
                required
              />
              <TextArea label="Address" required />
            </Display>
          </Column>
          <Column className="col-md-6">
            <Display>
              <Input htmlFor="Contact email" label="Play Store Link" />
              <Input htmlFor="Contact email" label="App Store Link" />
              <TextArea label="google analytics" required />
              <TextArea label="Facebook pixel" required />
            </Display>
          </Column>
          <Column className="col-md-6">
            <Display>
              <Input label="facebook url" htmlFor="f-url" required />
              <Input label="youtube url" htmlFor="y-url" required />
              <Input label="twitter url" htmlFor="t-url" required />
              <Input label="instagram url" htmlFor="t-url" required />
            </Display>
          </Column>
          <Column className="col-md-6">
            <Display>
              <Input type="file" label="Logo" htmlFor="logo" />
              <Input type="file" label="Favicon" htmlFor="favicon" />
              <TextArea label="Footer script" required />
              <TextArea label="Header Script" required />
            </Display>
          </Column>
        </Row>
      </form>
    </div>
  );
};

export default Footer;
