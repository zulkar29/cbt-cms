import { ChangeEvent, useState, useEffect } from 'react';
import Actions from '../../components/actions';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Filter from '../../components/filter';
import Pagination from '../../components/pagination';
import Select from '../../components/select';
import Table from '../../components/table';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import axios from 'axios';

const Blogs: React.FC = () => {
  const [displayItem, setDisplayItem] = useState(10);
  const [blogs, setBlogs] = useState([]);
  console.log(displayItem);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${import.meta.env.VITE_API_URL}/api/blogs`)
        .then((res) => {
          console.log(res);
          setBlogs(res.data);
        });
    };
    fetchData();
  }, []);
  console.log(blogs);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="All Blogs" to="/blogs/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Table>
          <thead>
            <Row>
              <th>SI No.</th>
              <th>Title</th>
              <th>Category</th>
              <th>Sort Description</th>
              <th>Status</th>
              <th>Options</th>
            </Row>
          </thead>
          <tbody>
            {[...Array(3).keys()].map((_category, index) => (
              <Row key={index}>
                <Column>{index + 1}</Column>
                <Column>বাজারের সেরা Gazi Kitchen Hood</Column>
                <Column>Kitchen Appliances</Column>
                <Column>
                  রান্নাঘরে ধোঁয়া জমে থাকা, তেল চিটচিটে ভাব হওয়া আমাদের দেশের
                  একটা নিত্য-নৈমিত্তিক ব্যাপার। মূলত রান্নার সময় যে আদ্র ধোঁয়া
                  তৈরী হয়, তা দ্রুত বাইরে বের করার কোন ব্যবস্থা থাকে না বলে
                  এমনটি হয়ে থাকে।
                </Column>
                <Column>
                  <Select />
                </Column>
                <Column>
                  <Actions editUrl={`/blog/edit/1`} />
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

export default Blogs;
