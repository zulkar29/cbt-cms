import { useState, ChangeEvent, useEffect } from 'react';
import { toast } from 'react-toastify';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import { Button } from '../../components/button';
import { IVideo } from '../../interfaces/video';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { createVideo } from '../../redux/videos/videoSlice';

const initialData = {
  title: '',
  url: '',
  is_visible: true,
};

const CreateVideo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isError, isCreate } = useAppSelector((state) => state.videos);
  const [videoData, setVideoData] = useState<IVideo>(initialData);

  const handleVideoData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setVideoData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createVideo(videoData));
  };

  useEffect(() => {
    if (isCreate) {
      toast.success('Video created successfully');
      setVideoData(initialData);
    }

    if (isError) {
      toast.error('Failed to create video');
    }
  }, [dispatch, isCreate, isError]);
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
            value={videoData.title}
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
          <Button type="submit">Save</Button>
        </form>
      </Display>
    </div>
  );
};

export default CreateVideo;
