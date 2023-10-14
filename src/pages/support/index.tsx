import ViewButton from '../../components/button/view';
import CustomIconArea from '../../components/custom-icon-area';
import Display from '../../components/display';
import Column from '../../components/table/column';
import Row from '../../components/table/row';

const TicketPage = () => {
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
        {[...Array(10).keys()].map(() => (
          <Row className="row">
            <Column className="col-md-1">#2147483647</Column>
            <Column className="col-md-2">2023-10-03 23:52:40</Column>
            <Column className="col-md-3">The stove is igniting.</Column>
            <Column className="col-md-2">Mahmudul Hasan</Column>
            <Column className="col-md-1">Pending</Column>
            <Column className="col-md-2">2023-10-04 01:56:11</Column>
            <Column className="col-md-1">
              <CustomIconArea>
                <ViewButton href="/" />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default TicketPage;
