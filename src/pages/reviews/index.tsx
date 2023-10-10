import { ChangeEvent, useState } from 'react';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Pagination from '../../components/pagination';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import Filter from '../../components/filter';
import ToggleButton from '../../components/forms/checkbox';

const Reviews: React.FC = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Reviews" to="/products/reviews#" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Row className="row">
          <Column className="col-md-1">#</Column>
          <Column className="col-md-2">Name</Column>
          <Column className="col-md-3">Products</Column>
          <Column className="col-md-4">Review</Column>
          <Column className="col-md-1">Rating</Column>
          <Column className="col-md-1">Published</Column>
        </Row>
        {[...Array(6).keys()].map((_review, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-1">1</Column>
            <Column className="col-md-2">Alex SmiColumn</Column>
            <Column className="col-md-3">Gazi Oval Sauce Pan GSP-26C</Column>
            <Column className="col-md-4">
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
