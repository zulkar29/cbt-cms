import { useState, ChangeEvent, useEffect } from 'react';
import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Pagination from '../../components/pagination';
import CardBody from '../../components/card-body';
import CustomIconArea from '../../components/custom-icon-area';
import EditButton from '../../components/button/edit';
import DeleteButton from '../../components/button/delete';
import ToggleButton from '../../components/forms/checkbox';
import Filter from '../../components/filter';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  deleteVideo,
  getVideos,
  updateVideo,
} from '../../redux/videos/videoSlice';
import { IVideo } from '../../interfaces/video';

const VideosPage: React.FC = () => {
  const [displayItem, setDisplayItem] = useState(10);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const dispatch = useAppDispatch();

  const { totalCount, videos } = useAppSelector((state) => state.videos);

  const totalPage = Math.floor(totalCount / displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };
  const handlePageChange = (selectedItem: { selected: number }) => {
    setPageNumber(selectedItem.selected + 1);
  };

  const handleStatusChange = (video: IVideo) => {
    dispatch(updateVideo({ id: video.id, is_visible: !video.is_visible }));
    setTimeout(
      () => dispatch(getVideos({ page: pageNumber, limit: displayItem })),
      500
    );
  };

  const handleDeleteVideo = (video: number | string) => {
    dispatch(deleteVideo(video));
    setTimeout(
      () => dispatch(getVideos({ page: pageNumber, limit: displayItem })),
      500
    );
  };

  useEffect(() => {
    dispatch(getVideos({ page: pageNumber, limit: displayItem }));
    window.scrollTo(0, 0);
  }, [dispatch, pageNumber, displayItem]);

  return (
    <div>
      <CardBody header="Videos" to="/videos/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Row className="row">
          <Column className="col-md-1">SI No.</Column>
          <Column className="col-md-4">Title</Column>
          <Column className="col-md-4">Link</Column>
          <Column className="col-md-1">Status</Column>
          <Column className="col-md-2">Options</Column>
        </Row>
        {videos.map((video) => (
          <Row key={video.id} className="row">
            <Column className="col-md-1">{video.id}</Column>
            <Column className="col-md-4">{video.title}</Column>
            <Column className="col-md-4">{video.url}</Column>
            <Column className="col-md-1">
              <ToggleButton
                isChecked={video.is_visible}
                onClick={() => handleStatusChange(video)}
              />
            </Column>
            <Column className="col-md-2">
              <CustomIconArea>
                <EditButton editUrl={`/blogs/edit/1`} />
                <DeleteButton
                  onClick={() => handleDeleteVideo(video.id as number)}
                />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
        <Pagination
          pageCount={pageNumber}
          handlePageClick={handlePageChange}
          totalPage={totalPage}
        />
      </Display>
    </div>
  );
};

export default VideosPage;
