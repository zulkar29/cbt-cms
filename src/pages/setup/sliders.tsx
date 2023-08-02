import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import Actions from '../../components/actions';
import { ChangeEvent, useState } from 'react';
import Filter from '../../components/filter';

const Sliders = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Home Sliders" to="/coupon/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Table>
          <thead>
            <Row>
              <th>Image</th>
              <th>Link</th>
              <th>Visible Shop Button</th>
              <th>Action</th>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1629616218pexels-karolina-grabowska-4386467.jpg"
                  alt="brand"
                />
              </Column>
              <Column>https://www.gazihomeappliance.com/categories</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/16343906281630493865s3.jpg"
                  alt="brand"
                />
              </Column>
              <Column>https://www.gazihomeappliance.com/categories</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
          </tbody>
        </Table>
      </Display>
    </div>
  );
};

export default Sliders;
