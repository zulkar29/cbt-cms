import { useEffect } from 'react';
import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  deleteSubscriber,
  getSubscribers,
} from '../../redux/subscribe/subscribeSlice';
import CustomIconArea from '../../components/custom-icon-area';
import DeleteButton from '../../components/button/delete';

const Subscriber = () => {
  const dispatch = useAppDispatch();
  const { subscribers } = useAppSelector((state) => state.subscribers);

  const handleSubscriber = (id: number) => {
    dispatch(deleteSubscriber({ subsId: id }));
  };

  useEffect(() => {
    dispatch(getSubscribers());
  }, [dispatch]);

  return (
    <div>
      <Display>
        <Row className="row">
          <Column className="col-md-11">Email</Column>
          <Column className="col-md-1">Actions</Column>
        </Row>
        {subscribers.map((subscribe, index) => (
          <Row key={index} className="row">
            <Column className="col-md-11">{subscribe.email}</Column>
            <Column className="col-md-1">
              <CustomIconArea>
                <DeleteButton
                  onClick={() => handleSubscriber(subscribe.id as number)}
                />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default Subscriber;
