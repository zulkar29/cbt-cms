import Display from '../../components/display';
import CardBody from '../../components/card-body';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Pagination from '../../components/pagination';
import Filter from '../../components/filter';
import { ChangeEvent, useState } from 'react';

const SubCategory = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Sub Categories" to="/categories/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Table>
          <thead>
            <Row>
              <th>Category</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Column>Web Themes & Templates</Column>
              <Column>HTML Templates</Column>
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
              <Column>Web Themes & Templates</Column>
              <Column>HTML Templates</Column>
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
              <Column>Web Themes & Templates</Column>
              <Column>HTML Templates</Column>
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
              <Column>Web Themes & Templates</Column>
              <Column>HTML Templates</Column>
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
              <Column>Web Themes & Templates</Column>
              <Column>HTML Templates</Column>
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
              <Column>Web Themes & Templates</Column>
              <Column>HTML Templates</Column>
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
              <Column>Web Themes & Templates</Column>
              <Column>HTML Templates</Column>
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
              <Column>Web Themes & Templates</Column>
              <Column>HTML Templates</Column>
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
              <Column>Web Themes & Templates</Column>
              <Column>HTML Templates</Column>
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
              <Column>Web Themes & Templates</Column>
              <Column>HTML Templates</Column>
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
};

export default SubCategory;
