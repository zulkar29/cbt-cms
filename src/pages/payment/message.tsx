import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../components/button";
import CardBody from "../../components/card-body";
import Display from "../../components/display";
import TextArea from "../../components/forms/textarea";
import { ISettings } from "../../interfaces/settings";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getSettings,
  reset,
  updateSettings,
} from "../../redux/settings/settingSlice";

const PaymentMessage = () => {
  const dispatch = useAppDispatch();
  const { setting, isSuccess, isUpdate } = useAppSelector(
    (state) => state.settings
  );
  const [settings, setSettings] = useState<ISettings>(setting);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) =>
    setSettings((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

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
    <div>
      <CardBody header="Payment Message" to="#" />
      <Display>
        <form onSubmit={handleSubmit}>
          <TextArea
            label="Cash on message"
            value={settings.cash_on_message as string}
            name="cash_on_message"
            onChange={handleChange}
          />
          <TextArea
            label="online payment message"
            value={settings.online_payment_message as string}
            name="online_payment_message"
            onChange={handleChange}
          />
          <div>
            <Button type="submit">Update</Button>
          </div>
        </form>
      </Display>
    </div>
  );
};

export default PaymentMessage;
