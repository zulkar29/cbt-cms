// import React from 'react';
import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import CustomIconArea from '../../components/custom-icon-area';
import DeleteButton from '../../components/button/delete';
import ToggleButton from '../../components/forms/checkbox';
import CardBody from '../../components/card-body';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { getKeypoints } from '../../redux/service/keypointSlice';
import { API_ROOT } from '../../constants';

const Services = () => {
  const dispatch = useAppDispatch();
  const { services } = useAppSelector((state) => state.services);

  useEffect(() => {
    dispatch(getKeypoints({ page: 1, limit: 1 }));
  }, [dispatch]);

  const handleDelete = () => {
    console.log('first');
  };
  return (
    <div>
      <CardBody header="Service" to="/setup/services/create" />
      <Display>
        <Row className="row">
          <Column className="col-md-2">Icon</Column>
          <Column className="col-md-2">Slug</Column>
          <Column className="col-md-2">Title</Column>
          <Column className="col-md-2">Sub Title</Column>
          <Column className="col-md-2">Status</Column>
          <Column className="col-md-2">Options</Column>
        </Row>
        {services.map((service, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-2">
              <img
                src={`${API_ROOT}/images/key-point/${service.image}`}
                alt="service"
              />
            </Column>
            <Column className="col-md-2">{service.url}</Column>
            <Column className="col-md-2">{service.title}</Column>
            <Column className="col-md-2">{service.subtitle}</Column>
            <Column className="col-md-2">
              <ToggleButton isChecked />
            </Column>
            <Column className="col-md-2">
              <CustomIconArea>
                <DeleteButton onClick={handleDelete} />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default Services;
