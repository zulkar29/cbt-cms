import axios from 'axios';
import { API_URL } from '../../constants';
import { ISettings, ISettingsResponse } from '../../interfaces/settings';

const getSettings = async (): Promise<ISettings> => {
  const { data } = await axios.get(`${API_URL}/settings`);
  return data.setting;
};

const updateSettings = async (
  settingData: FormData
): Promise<ISettingsResponse> => {
  const { data } = await axios.put(`${API_URL}/settings`, settingData);
  return data;
};

const settingService = {
  getSettings,
  updateSettings,
};

export default settingService;
