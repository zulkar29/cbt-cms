import { useState, ChangeEvent } from 'react';
import { toast } from 'react-toastify';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import { Button } from '../../components/button';
import ToggleButton from '../../components/forms/checkbox';
import { IVideo } from '../../interfaces/video';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { createVideo } from '../../redux/videos/videoSlice';

const initialData = {
  // title: '',
  url: '',
  is_visible: false,
};

const CreateVideo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isError, isSuccess } = useAppSelector((state) => state.videos);
  const [videoData, setVideoData] = useState<IVideo>(initialData);

  const handleVideoData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setVideoData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleStatusChange = () => {
    setVideoData((prev) => ({
      ...prev,
      is_visible: !prev.is_visible,
    }));
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createVideo(videoData));
    if (isSuccess) {
      toast.success('Video created successfully');
      setVideoData(initialData);
    }

    if (isError) {
      toast.error('Failed to create video');
    }
  };

  return (
    <div>
      <CardBody to="/videos" text="back" header="Create Video" />

      <Display>
        <form onSubmit={handleSubmit}>
          <Input
            label="Video Title *"
            placeholder="video title"
            name="title"
            htmlFor="video"
            onChange={handleVideoData}
            required
          />
          <Input
            label="Video Embed URL *"
            placeholder="Enter video embed code"
            name="url"
            htmlFor="link"
            onChange={handleVideoData}
            value={videoData.url}
            required
          />
          <ToggleButton
            isChecked={videoData.is_visible}
            onClick={handleStatusChange}
          />
          <Button type="submit">Save</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateVideo;
