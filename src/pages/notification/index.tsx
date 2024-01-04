import { useEffect } from "react";
import CardBody from "../../components/card-body";
import Display from "../../components/display";
import Column from "../../components/table/column";
import Row from "../../components/table/row";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getNotification,
  reset,
} from "../../redux/notification/notificationSlice";

const Notification = () => {
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector((state) => state.notification);

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
        <Row className="row text-bold">
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
