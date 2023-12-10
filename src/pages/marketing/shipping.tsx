import Row from '../../components/table/row';
import Column from '../../components/table/column';
import CardBody from '../../components/card-body';
import CustomIconArea from '../../components/custom-icon-area';
import DeleteButton from '../../components/button/delete';
import EditButton from '../../components/button/edit';

const Shipping = () => {
  return (
    <div>
      <CardBody header="Shipping Details" to="/shipping/create" />
      <Row className="row">
        <Column className="col-md-4">District Name</Column>
        <Column className="col-md-4">Shipping Cost</Column>
        <Column className="col-md-4">Actions</Column>
      </Row>
      <Row className="row">
        <Column className="col-md-4">Rangpur</Column>
        <Column className="col-md-4">200</Column>
        <Column className="col-md-4">
          <CustomIconArea>
            <DeleteButton onClick={() => console.log('first')} />
            <EditButton editUrl="/shipping/edit/1" />
          </CustomIconArea>
        </Column>
      </Row>
    </div>
  );
};

export default Shipping;
