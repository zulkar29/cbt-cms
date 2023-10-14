import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import Column from '../../components/table/column';
import Row from '../../components/table/row';

const Footer: React.FC = () => {
  return (
    <div>
      <Row className="row">
        <Column className="col-md-6">
          <Display>
            <Input
              label="Footer info"
              placeholder="footer info"
              htmlFor="info"
              required
            />
            <Input
              label="Footer copy write"
              placeholder="Footer copy write"
              htmlFor="copywrite"
              required
            />
            <Input
              label="Contact Number"
              placeholder="Contact Number"
              htmlFor="mobile-No"
              required
            />
            <Input
              label="Contact Email"
              type="email"
              placeholder="Contact Email"
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
            <TextArea
              label="google analytics"
              placeholder="google analytics"
              required
            />
            <TextArea
              label="Facebook pixel"
              placeholder="facebook pixel"
              required
            />
          </Display>
        </Column>
        <Column className="col-md-6">
          <Display>
            <Input
              label="Footer info"
              placeholder="footer info"
              htmlFor="info"
              required
            />
            <Input
              label="facebook url"
              placeholder="facebook url"
              htmlFor="f-url"
              required
            />
            <Input
              label="youtube url"
              placeholder="youtube url"
              htmlFor="y-url"
              required
            />
            <Input
              label="twitter url"
              placeholder="twitter url"
              htmlFor="t-url"
              required
            />
            <Input
              label="instagram url"
              placeholder="instagram url"
              htmlFor="t-url"
              required
            />
          </Display>
        </Column>
      </Row>
    </div>
  );
};

export default Footer;
