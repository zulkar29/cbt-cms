import Filter from '../filter';
import { ChangeEvent } from 'react';
import Table from '../table';
import Row from '../table/row';
import Column from '../table/column';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './index.scss';
import Select from '../select';

interface propsType {
  handleSearch: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Display: React.FC<propsType> = ({ handleSearch }) => {
  return (
    <div className="display-area">
      <Filter handleSearch={handleSearch} />
      <Table>
        <thead>
          <Row>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </Row>
        </thead>
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
      </Table>
    </div>
  );
};

export default Display;
