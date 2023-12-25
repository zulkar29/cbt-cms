import { useEffect, useState } from 'react';
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
import Pagination from '../../components/pagination';
import CardBody from '../../components/card-body';

const Subscriber = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { subscribers, isDelete, totalCount } = useAppSelector(
    (state) => state.subscribers
  );

  const totalPage = Math.ceil(totalCount / 15);

  const handleSubscriber = (id: number) => {
    dispatch(deleteSubscriber(id));
  };
  const handlePageChange = (selectedItem: { selected: number }) => {
    setPageNumber(selectedItem.selected + 1);
  };

  useEffect(() => {
    dispatch(getSubscribers({ page: pageNumber, limit: 15 }));
  }, [dispatch, isDelete, pageNumber]);

  return (
    <div>
      <CardBody header="Subscriber" to="#" />
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
        <Pagination
          pageCount={pageNumber}
          handlePageClick={handlePageChange}
          totalPage={totalPage}
        />
      </Display>
    </div>
  );
};

export default Subscriber;
