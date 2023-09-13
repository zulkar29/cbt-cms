import { ChangeEvent, useState } from 'react';
import Actions from '../../components/actions';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Filter from '../../components/filter';
import Pagination from '../../components/pagination';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import ToggleButton from '../../components/forms/checkbox';

const Blogs: React.FC = () => {
  const [displayItem, setDisplayItem] = useState(10);
  // const [blogs, setBlogs] = useState([]);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="All Blogs" to="/blogs/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Row className="row">
          <Column className="col-md-1">SI No.</Column>
          <Column className="col-md-2">Title</Column>
          <Column className="col-md-7">Sort Description</Column>
          <Column className="col-md-1">Status</Column>
          <Column className="col-md-1">Options</Column>
        </Row>
        <>
          {[...Array(3).keys()].map((_category, index) => (
            <Row className="row" key={index}>
              <Column className="col-md-1">{index + 1}</Column>
              <Column className="col-md-2">
                বাজারের সেরা Gazi Kitchen Hood
              </Column>
              <Column className="col-md-7">
                রান্নাঘরে ধোঁয়া জমে থাকা, তেল চিটচিটে ভাব হওয়া আমাদের দেশের
                একটা নিত্য-নৈমিত্তিক ব্যাপার। মূলত রান্নার সময় যে আদ্র ধোঁয়া
                তৈরী হয়, তা দ্রুত বাইরে বের করার কোন ব্যবস্থা থাকে না বলে এমনটি
                হয়ে থাকে।
              </Column>
              <Column className="col-md-1">
                <ToggleButton isChecked />
              </Column>
              <Column className="col-md-1">
                <Actions editUrl={`/blog/edit/1`} />
              </Column>
            </Row>
          ))}
        </>
        <Pagination />
      </Display>
    </div>
  );
};

export default Blogs;
