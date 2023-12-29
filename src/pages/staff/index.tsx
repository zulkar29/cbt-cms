import DeleteButton from "../../components/button/delete";
import CardBody from "../../components/card-body";
import CustomIconArea from "../../components/custom-icon-area";
import Display from "../../components/display";
import Column from "../../components/table/column";
import Row from "../../components/table/row";

const Staff = () => {
  return (
    <div>
      <CardBody to="/staffs/create" header="Staff List" />

      <Display>
        <Row className="row">
          <Column className="col-md-4">Name</Column>
          <Column className="col-md-4">Email</Column>
          <Column className="col-md-4">Actions</Column>
        </Row>
        {[...Array(6).keys()].map(() => (
          <Row className="row">
            <Column className="col-md-4">Admin</Column>
            <Column className="col-md-4">admin@admin.com</Column>
            <Column className="col-md-4">
              <CustomIconArea>
                <DeleteButton
                  onClick={() => {
                    console.log("");
                  }}
                />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default Staff;
