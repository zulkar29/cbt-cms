import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../components/button";
import Display from "../../components/display";
import Input from "../../components/forms/text-input";
import TextArea from "../../components/forms/textarea";
import Column from "../../components/table/column";
import Row from "../../components/table/row";
import { ISettings } from "../../interfaces/settings";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getSettings,
  reset,
  updateSettings,
} from "../../redux/settings/settingSlice";
import "./settings.scss";

const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const { setting, isSuccess, isUpdate } = useAppSelector(
    (state) => state.settings
  );
  const [settings, setSettings] = useState<ISettings>(setting);
  const [logo, setLogo] = useState<File | null>(null);
  const [favicon, setFavicon] = useState<File | null>(null);
  const [popup, setPopup] = useState<File | null>(null);
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
  const handlePopupChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setPopup(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(settings).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        if (key !== "logo" && key !== "favicon") {
          formData.append(key, String(value));
        }
      }
    });
    if (logo) {
      formData.append("logo", logo);
    }
    if (favicon) {
      formData.append("favicon", favicon);
    }
    if (popup) {
      formData.append("popup_image", popup);
    }
    dispatch(updateSettings(formData));
  };

  useEffect(() => {
    if (isUpdate) {
      toast.success("Updated successfully");
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
          </Column>
          <Column className="col-md-6">
            <Display>
              <Input
                name="play_store_url"
                onChange={handleChange}
                htmlFor="play-store"
                label="Play Store Link"
                value={settings.play_store_url}
              />
              <Input
                name="app_store_url"
                onChange={handleChange}
                htmlFor="app-store"
                label="App Store Link"
                value={settings.app_store_url}
              />
            </Display>
            <Display>
              <Input
                onChange={handleChange}
                label="facebook url"
                value={settings.facebook_url}
                name="facebook_url"
                htmlFor="f-url"
              />
              <Input
                onChange={handleChange}
                label="youtube url"
                value={settings.youtube_url}
                name="youtube_url"
                htmlFor="y-url"
              />
              <Input
                onChange={handleChange}
                label="twitter url"
                value={settings.twitter_url}
                name="twitter_url"
                htmlFor="t-url"
              />
              <Input
                onChange={handleChange}
                label="instagram url"
                value={settings.instagram_url}
                name="instagram_url"
                htmlFor="t-url"
              />
            </Display>
          </Column>
        </Row>
      </form>
    </div>
  );
};

export default Settings;
