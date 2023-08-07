import { ChangeEvent, useState } from 'react';
import Actions from '../../components/actions';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Pagination from '../../components/pagination';
import Select from '../../components/select';
import Table from '../../components/table';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import Filter from '../../components/filter';

const BlogCategories = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="All Blogs Categories" to="/blogs/categories/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Table>
          <tbody>
            <Row>
              <th>SI No.</th>
              <th>Title</th>
              <th>Status</th>
              <th>Options</th>
            </Row>
          </tbody>
          <tbody>
            {[...Array(5).keys()].map((_category, index) => (
              <Row key={index}>
                <Column>{index + 1}</Column>
                <Column>Cookware</Column>
                <Column>
                  <Select />
                </Column>
                <Column>
                  <Actions editUrl="" />
                </Column>
              </Row>
            ))}
          </tbody>
        </Table>
        <Pagination />
      </Display>
    </div>
  );
};

export default BlogCategories;
