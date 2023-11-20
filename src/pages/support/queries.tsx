import DeleteButton from '../../components/button/delete';
import CustomIconArea from '../../components/custom-icon-area';
import Display from '../../components/display';
import Column from '../../components/table/column';
import Row from '../../components/table/row';

const Queries = () => {
  return (
    <div>
      <Display>
        <Row className="row">
          <Column className="col-md-1">#</Column>
          <Column className="col-md-2">Date</Column>
          <Column className="col-md-2">Product Title</Column>
          <Column className="col-md-2">Mobile</Column>
          <Column className="col-md-3">Question</Column>
          <Column className="col-md-2">Options</Column>
        </Row>
        <Row className="row">
          <Column className="col-md-1">1</Column>
          <Column className="col-md-2">2023-10-09 23:03:54</Column>
          <Column className="col-md-2">HTD-2002A - Gazi Gas Stove</Column>
          <Column className="col-md-2">01724721383</Column>
          <Column className="col-md-3">
            Is is available? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dignissimos sed aliquam deleniti aliquid cupiditate illum
            excepturi et ducimus blanditiis magnam.
          </Column>
          <Column className="col-md-2">
            <CustomIconArea>
              <DeleteButton onClick={() => console.log('first')} />
            </CustomIconArea>
          </Column>
        </Row>
      </Display>
    </div>
  );
};

export default Queries;
