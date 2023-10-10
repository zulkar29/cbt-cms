import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Pagination from '../../components/pagination';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import ToggleButton from '../../components/forms/checkbox';

const Reviews: React.FC = () => {
  return (
    <div>
      <CardBody header="Reviews" to="/products/reviews#" />
      <Display>
        <Row className="row">
          <Column className="col-md-1">#</Column>
          <Column className="col-md-2">Name</Column>
          <Column className="col-md-2">Email</Column>
          <Column className="col-md-2">Products</Column>
          <Column className="col-md-3">Review</Column>
          <Column className="col-md-1">Rating</Column>
          <Column className="col-md-1">Published</Column>
        </Row>
        {[...Array(6).keys()].map((_review, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-1">1</Column>
            <Column className="col-md-2">Talha</Column>
            <Column className="col-md-2">admin@admin.com</Column>
            <Column className="col-md-2">Gazi Oval Sauce Pan GSP-26C</Column>
            <Column className="col-md-3">
              New French Elegant White Bubble Sleeve Party Dress Casual A-Line
              Dresses, Long Sleeve Dresses
            </Column>
            <Column className="col-md-1">3.5</Column>
            <Column className="col-md-1">
              <ToggleButton isChecked />
            </Column>
          </Row>
        ))}
        <Pagination />
      </Display>
    </div>
  );
};

export default Reviews;
