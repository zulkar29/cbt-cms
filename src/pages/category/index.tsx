import { ChangeEvent, useState } from 'react';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import Pagination from '../../components/pagination';
import Filter from '../../components/filter';

function Categories() {
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
        <Table>
          <thead>
            <Row>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
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
              <Column>Web Themes & Templates</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <div className="rect-icon">
                  <div className="icon">
                    <FaRegEdit className="i" />
                  </div>
                  <div className="icon">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1629616218pexels-karolina-grabowska-4386467.jpg"
                  alt="brand"
                />
              </Column>
              <Column>Web Themes & Templates</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <div className="rect-icon">
                  <div className="icon">
                    <FaRegEdit className="i" />
                  </div>
                  <div className="icon">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1629616218pexels-karolina-grabowska-4386467.jpg"
                  alt="brand"
                />
              </Column>
              <Column>Web Themes & Templates</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <div className="rect-icon">
                  <div className="icon">
                    <FaRegEdit className="i" />
                  </div>
                  <div className="icon">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1629616218pexels-karolina-grabowska-4386467.jpg"
                  alt="brand"
                />
              </Column>
              <Column>Web Themes & Templates</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <div className="rect-icon">
                  <div className="icon">
                    <FaRegEdit className="i" />
                  </div>
                  <div className="icon">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1629616218pexels-karolina-grabowska-4386467.jpg"
                  alt="brand"
                />
              </Column>
              <Column>Web Themes & Templates</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <div className="rect-icon">
                  <div className="icon">
                    <FaRegEdit className="i" />
                  </div>
                  <div className="icon">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1629616218pexels-karolina-grabowska-4386467.jpg"
                  alt="brand"
                />
              </Column>
              <Column>Web Themes & Templates</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <div className="rect-icon">
                  <div className="icon">
                    <FaRegEdit className="i" />
                  </div>
                  <div className="icon">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1629616218pexels-karolina-grabowska-4386467.jpg"
                  alt="brand"
                />
              </Column>
              <Column>Web Themes & Templates</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <div className="rect-icon">
                  <div className="icon">
                    <FaRegEdit className="i" />
                  </div>
                  <div className="icon">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1629616218pexels-karolina-grabowska-4386467.jpg"
                  alt="brand"
                />
              </Column>
              <Column>Web Themes & Templates</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <div className="rect-icon">
                  <div className="icon">
                    <FaRegEdit className="i" />
                  </div>
                  <div className="icon">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1629616218pexels-karolina-grabowska-4386467.jpg"
                  alt="brand"
                />
              </Column>
              <Column>Web Themes & Templates</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <div className="rect-icon">
                  <div className="icon">
                    <FaRegEdit className="i" />
                  </div>
                  <div className="icon">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </Column>
            </Row>
          </tbody>
        </Table>
        <Pagination />
      </Display>
    </div>
  );
}

export default Categories;
