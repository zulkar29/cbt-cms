import { useEffect } from 'react';
import ViewButton from '../../components/button/view';
import CustomIconArea from '../../components/custom-icon-area';
import Display from '../../components/display';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getSupport } from '../../redux/support/supportSlice';
import { formatDate } from '../../components/date-formate';

const TicketPage = () => {
  const dispatch = useAppDispatch();
  const { supports } = useAppSelector((state) => state.support);

  useEffect(() => {
    dispatch(getSupport());
  }, [dispatch]);
  return (
    <div>
      <Display>
        <Row className="row">
          <Column className="col-md-1">Ticket ID</Column>
          <Column className="col-md-2">Sending Date</Column>
          <Column className="col-md-3">Subject</Column>
          <Column className="col-md-2">User</Column>
          <Column className="col-md-1">Status</Column>
          <Column className="col-md-2">Last reply</Column>
          <Column className="col-md-1">Options</Column>
        </Row>
        {supports.map((support, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-1">{support.id}</Column>
            <Column className="col-md-2">
              {formatDate(support.created_at)}
            </Column>
            <Column className="col-md-3">{support.subject}</Column>
            <Column className="col-md-2">Mahmudul Hasan</Column>
            <Column className="col-md-1">Pending</Column>
            <Column className="col-md-2">2023-10-04 01:56:11</Column>
            <Column className="col-md-1">
              <CustomIconArea>
                <ViewButton href={`/support/${support.id}`} />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default TicketPage;
