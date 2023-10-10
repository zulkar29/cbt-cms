import { ChangeEvent, useState } from 'react';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import Pagination from '../../components/pagination';
import Filter from '../../components/filter';
import Actions from '../../components/actions';
import ToggleButton from '../../components/forms/checkbox';

const Categories: React.FC = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Categories" to="/categories/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />

        <Row className="row">
          <Column className="col-md-2">Banner</Column>
          <Column className="col-md-2">Name</Column>
          <Column className="col-md-2"> Parent Category</Column>
          <Column className="col-md-2">Featured</Column>
          <Column className="col-md-2">Options</Column>
        </Row>
        {[...Array(5).keys()].map((_category, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-2">
              <img
                src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1629616218pexels-karolina-grabowska-4386467.jpg"
                alt="brand"
              />
            </Column>
            <Column className="col-md-2">Web Columnemes & Templates</Column>
            <Column className="col-md-2">
              <ToggleButton />
            </Column>
            <Column className="col-md-2">
              <Actions editUrl={`/categories/edit/${index}`} />
            </Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default Categories;
