import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Actions from '../../components/actions';
import Filter from '../../components/filter';
import { ChangeEvent, useState } from 'react';

const CommonPages: React.FC = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Add More Pages" to="/setup/pages/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />

        <Row className="row">
          <Column className="col-md-3">#</Column>
          <Column className="col-md-3">Page Name</Column>
          <Column className="col-md-3">Slug</Column>
          <Column className="col-md-3">Action</Column>
        </Row>
        <Row className="row">
          <Column className="col-md-3">1</Column>
          <Column className="col-md-3">About Page</Column>
          <Column className="col-md-3">/about</Column>
          <Column className="col-md-3">
            <Actions editUrl="/setup/pages/edit/1" />
          </Column>
        </Row>
      </Display>
    </div>
  );
};

export default CommonPages;
