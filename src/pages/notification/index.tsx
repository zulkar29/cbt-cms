import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import CardBody from '../../components/card-body';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import {
  getNotification,
  reset,
} from '../../redux/notification/notificationSlice';

const Notification = () => {
  const dispatch = useAppDispatch();
  const { notifications, isSuccess } = useAppSelector(
    (state) => state.notification
  );

  useEffect(() => {
    dispatch(getNotification());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);
  return (
    <div>
      <CardBody header="Notifications" to="/notification/create" />
      <Display>
        <Row className="row">
          <Column className="col-md-2">Notification ID</Column>
          <Column className="col-md-5">Title</Column>
          <Column className="col-md-5">Details</Column>
        </Row>
        {notifications.map((n, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-2">{n.id}</Column>
            <Column className="col-md-5">{n.title}</Column>
            <Column className="col-md-5">{n.details}</Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default Notification;
