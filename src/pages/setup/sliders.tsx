import { useEffect } from 'react';
import Display from '../../components/display';
import Column from '../../components/table/column';
import CustomIconArea from '../../components/custom-icon-area';
import DeleteButton from '../../components/button/delete';
import ToggleButton from '../../components/forms/checkbox';
import CardBody from '../../components/card-body';
import Row from '../../components/table/row';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  deleteBanner,
  getAddBanner,
  updateAddBanner,
} from '../../redux/add-banner/addBannerSlice';
import { API_ROOT } from '../../constants';
import { IAdBanner } from '../../interfaces/addBanner';

const Sliders = () => {
  const dispatch = useAppDispatch();
  const { addBanner, isDelete } = useAppSelector((state) => state.banner);

  const handleDelete = (id: number) => {
    dispatch(deleteBanner(id));
  };

  const handleVisibility = (banner: IAdBanner) => {
    dispatch(
      updateAddBanner({ id: banner.id, is_visible: !banner.is_visible })
    );
    dispatch(getAddBanner({}));
  };

  useEffect(() => {
    dispatch(getAddBanner({}));
  }, [dispatch, isDelete]);

  return (
    <div>
      <CardBody header="Banner" to="/banner/create" />
      <Display>
        <Row className="row">
          <Column className="col-md-4">Image</Column>
          <Column className="col-md-4">Link</Column>
          <Column className="col-md-2">Status</Column>
          <Column className="col-md-2">Action</Column>
        </Row>
        {addBanner.map((banner, index) => (
          <Row key={index} className="row banner">
            <Column className="col-md-4">
              <img
                src={`${API_ROOT}/images/banner/${banner.image}`}
                alt="banner"
              />
            </Column>
            <Column className="col-md-4">{banner.url}</Column>
            <Column className="col-md-2">
              <ToggleButton
                onClick={() => handleVisibility(banner)}
                isChecked={banner.is_visible}
              />
            </Column>
            <Column className="col-md-2">
              <CustomIconArea>
                <DeleteButton
                  onClick={() => handleDelete(banner.id as number)}
                />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default Sliders;
