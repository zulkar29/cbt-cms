import { ChangeEvent, useState } from 'react';
import Display from '../../components/display';
import Pagination from '../../components/pagination';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import Filter from '../../components/filter';
import { CSVLink } from 'react-csv';
import { BsDownload } from 'react-icons/bs';
import CustomIconArea from '../../components/custom-icon-area';
import DeleteButton from '../../components/button/delete';

const Customers: React.FC = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  const csvData = [
    ['firstname', 'lastname', 'email'],
    ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
    ['Raed', 'Labes', 'rl@smthing.co.com'],
    ['Yezzi', 'Min l3b', 'ymin@cocococo.com'],
  ];

  return (
    <div>
      <Display>
        <div className="csv-icon" title="Download CSV">
          <CSVLink data={csvData}>
            <BsDownload />
          </CSVLink>
        </div>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Row className="row">
          <Column className="col-md-3">Name</Column>
          <Column className="col-md-3">Email</Column>
          <Column className="col-md-3">Phone</Column>
          <Column className="col-md-3">Actions</Column>
        </Row>
        {[...Array(3).keys()].map((_customer, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-3">Md Sheikh Talha</Column>
            <Column className="col-md-3">talha.halcyon@gmail.com</Column>
            <Column className="col-md-3">+8801724721383</Column>
            <Column className="col-md-3">
              <CustomIconArea>
                <DeleteButton onClick={() => console.log('first')} />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
        <Pagination />
      </Display>
    </div>
  );
};

export default Customers;
