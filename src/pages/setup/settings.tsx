import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '../../components/button';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import TextArea from '../../components/forms/textarea';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './settings.scss';
import {
  getSettings,
  reset,
  updateSettings,
} from '../../redux/settings/settingSlice';
import { ISettings } from '../../interfaces/settings';
import { API_ROOT } from '../../constants';
import FileInput from '../../components/forms/file-input';
import { toast } from 'react-toastify';

const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const { setting, isSuccess, isUpdate } = useAppSelector(
    (state) => state.settings
  );
  const [settings, setSettings] = useState<ISettings>(setting);
  const [logo, setLogo] = useState<File | null>(null);
  const [favicon, setFavicon] = useState<File | null>(null);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) =>
    setSettings((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setLogo(file);
    }
  };
  const handleFaviconChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFavicon(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(settings).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        if (key !== 'logo' && key !== 'favicon') {
          formData.append(key, String(value));
        }
      }
    });
    if (logo) {
      formData.append('logo', logo);
    }
    if (favicon) {
      formData.append('favicon', favicon);
    }
    console.log(formData);
    dispatch(updateSettings(formData));
  };

  useEffect(() => {
    if (isUpdate) {
      toast.success('Updated successfully');
    }
    return () => {
      dispatch(reset());
    };
  }, [isUpdate, dispatch]);

  useEffect(() => {
    dispatch(getSettings());
    setSettings(setting);
  }, [dispatch, isSuccess, isUpdate]);

  return (
    <div className="footer">
      <form onSubmit={handleSubmit}>
        <Row className="row">
          <Column className="col-md-12 button">
            <Button type="submit">Update</Button>
          </Column>
        </Row>
        <Row className="row">
          <Column className="col-md-6">
            <Display>
              <Input
                onChange={handleChange}
                label="Footer info"
                htmlFor="info"
                name="footer_info"
                value={settings.footer_info}
                required
              />
              <Input
                onChange={handleChange}
                label="Footer copy write"
                htmlFor="copywrite"
                value={settings.footer_copywrite}
                name="footer_copywrite"
                required
              />
              <Input
                onChange={handleChange}
                label="Contact Number"
                htmlFor="mobile-No"
                value={settings.contact_number}
                name="contact_number"
                required
              />
              <Input
                onChange={handleChange}
                label="Contact Email"
                type="email"
                value={settings.contact_email}
                name="contact_email"
                htmlFor="email"
                required
              />
              <TextArea
                label="Address"
                value={settings.address}
                onChange={handleChange}
                name="address"
                required
              />
            </Display>
            <Display>
              <Input
                onChange={handleChange}
                label="facebook url"
                value={settings.facebook_url}
                name="facebook_url"
                htmlFor="f-url"
                required
              />
              <Input
                onChange={handleChange}
                label="youtube url"
                value={settings.youtube_url}
                name="youtube_url"
                htmlFor="y-url"
                required
              />
              <Input
                onChange={handleChange}
                label="twitter url"
                value={settings.twitter_url}
                name="twitter_url"
                htmlFor="t-url"
                required
              />
              <Input
                onChange={handleChange}
                label="instagram url"
                value={settings.instgram_url}
                name="instgram_url"
                htmlFor="t-url"
                required
              />
            </Display>
            <Display>
              <TextArea
                label="Cash on message"
                value={settings.cash_on_message as string}
                name="cash_on_message"
                required
              />
              <TextArea
                label="online payment message"
                value={settings.online_payment_message as string}
                name="online_payment_message"
                required
              />
            </Display>
          </Column>
          <Column className="col-md-6">
            <Display>
              <Input
                name="play_store"
                onChange={handleChange}
                htmlFor="play-store"
                label="Play Store Link"
              />
              <Input
                name="app_store"
                onChange={handleChange}
                htmlFor="app-store"
                label="App Store Link"
              />
              <TextArea
                label="google analytics"
                value={settings.google_analytics}
                name="google_analytics"
                required
              />
              <TextArea
                label="Facebook pixel"
                value={settings.facebook_pixel}
                name="facebook_pixel"
                required
              />
            </Display>
            <Display>
              <FileInput onChange={handleLogoChange} name="logo" label="Logo" />

              <img
                src={`${API_ROOT}/images/setting/${setting.logo}`}
                alt="logo"
              />
              <FileInput
                onChange={handleFaviconChange}
                name="favicon"
                label="Favicon"
              />

              <img
                src={`${API_ROOT}/images/setting/${setting.favicon}`}
                alt="logo"
              />
              <FileInput
                onChange={handleFaviconChange}
                name="popup"
                label="Popup"
              />

              <img
                src={`${API_ROOT}/images/setting/${setting.favicon}`}
                alt="logo"
              />
            </Display>
            <Display>
              <TextArea
                label="Footer script"
                value={settings.footer_script}
                name="footer_script"
                required
              />
              <TextArea
                label="Header Script"
                value={settings.header_script}
                name="header_script"
                required
              />
            </Display>
          </Column>
        </Row>
      </form>
    </div>
  );
};

export default Settings;
