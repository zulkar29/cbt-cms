import { useEffect, useState } from 'react';
import { Button } from '../../components/button';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './footer.scss';
import { getSettings } from '../../redux/settings/settingSlice';
import { ISettings } from '../../interfaces/settings';
import { API_ROOT } from '../../constants';

const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { setting, isSuccess } = useAppSelector((state) => state.settings);
  const [settings, setSettings] = useState<ISettings>(setting);
  console.log(settings);

  useEffect(() => {
    dispatch(getSettings());
    setSettings(setting);
  }, [dispatch, isSuccess]);

  return (
    <div className="footer">
      <form>
        <Row className="row">
          <Column className="col-md-12 button">
            <Button type="submit">Update</Button>
          </Column>
        </Row>
        <Row className="row">
          <Column className="col-md-6">
            <Display>
              <Input
                label="Footer info"
                htmlFor="info"
                value={settings.footer_info}
                required
              />
              <Input
                label="Footer copy write"
                htmlFor="copywrite"
                value={settings.footer_copywrite}
                required
              />
              <Input
                label="Contact Number"
                htmlFor="mobile-No"
                value={settings.contact_number}
                required
              />
              <Input
                label="Contact Email"
                type="email"
                value={settings.contact_email}
                htmlFor="email"
                required
              />
              <TextArea label="Address" value={settings.address} required />
            </Display>
            <Display>
              <Input
                label="facebook url"
                value={settings.facebook_url}
                htmlFor="f-url"
                required
              />
              <Input
                label="youtube url"
                value={settings.youtube_url}
                htmlFor="y-url"
                required
              />
              <Input
                label="twitter url"
                value={settings.twitter_url}
                htmlFor="t-url"
                required
              />
              <Input
                label="instagram url"
                value={settings.instgram_url}
                htmlFor="t-url"
                required
              />
            </Display>
            <Display>
              <TextArea
                label="Cash on message"
                value={settings.cash_on_message as string}
                required
              />
              <TextArea
                label="online payment message"
                value={settings.online_payment_message as string}
                required
              />
            </Display>
          </Column>
          <Column className="col-md-6">
            <Display>
              <Input htmlFor="play-store" label="Play Store Link" required />
              <Input htmlFor="app-store" label="App Store Link" />
              <TextArea
                label="google analytics"
                value={settings.google_analytics}
                required
              />
              <TextArea
                label="Facebook pixel"
                value={settings.facebook_pixel}
                required
              />
            </Display>
            <Display>
              <Input type="file" label="Logo" htmlFor="logo" />
              <img
                src={`${API_ROOT}/images/setting/${settings.logo}`}
                alt="logo"
              />
              <Input type="file" label="Favicon" htmlFor="favicon" />
              <img
                src={`${API_ROOT}/images/setting/${settings.favicon}`}
                alt="logo"
              />
              <TextArea
                label="Footer script"
                value={settings.footer_script}
                required
              />
              <TextArea
                label="Header Script"
                value={settings.header_script}
                required
              />
            </Display>
          </Column>
        </Row>
      </form>
    </div>
  );
};

export default Footer;
