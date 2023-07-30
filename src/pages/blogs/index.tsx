import Actions from '../../components/actions';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Pagination from '../../components/pagination';
import Select from '../../components/select';
import Table from '../../components/table';
import Column from '../../components/table/column';
import Row from '../../components/table/row';

const Blogs = () => {
  return (
    <div>
      <CardBody header="All Blogs" to="/blogs/create" />
      <Display>
        <Table>
          <tbody>
            <th>SI No.</th>
            <th>Title</th>
            <th>Category</th>
            <th>Sort Description</th>
            <th>Status</th>
            <th>Options</th>
          </tbody>
          <tbody>
            <Row>
              <Column>01</Column>
              <Column>বাজারের সেরা Gazi Kitchen Hood</Column>
              <Column>Kitchen Appliances</Column>
              <Column>
                রান্নাঘরে ধোঁয়া জমে থাকা, তেল চিটচিটে ভাব হওয়া আমাদের দেশের
                একটা নিত্য-নৈমিত্তিক ব্যাপার। মূলত রান্নার সময় যে আদ্র ধোঁয়া
                তৈরী হয়, তা দ্রুত বাইরে বের করার কোন ব্যবস্থা থাকে না বলে এমনটি
                হয়ে থাকে।
              </Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>বাজারের সেরা Gazi Kitchen Hood</Column>
              <Column>Kitchen Appliances</Column>
              <Column>
                রান্নাঘরে ধোঁয়া জমে থাকা, তেল চিটচিটে ভাব হওয়া আমাদের দেশের
                একটা নিত্য-নৈমিত্তিক ব্যাপার। মূলত রান্নার সময় যে আদ্র ধোঁয়া
                তৈরী হয়, তা দ্রুত বাইরে বের করার কোন ব্যবস্থা থাকে না বলে এমনটি
                হয়ে থাকে।
              </Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>বাজারের সেরা Gazi Kitchen Hood</Column>
              <Column>Kitchen Appliances</Column>
              <Column>
                রান্নাঘরে ধোঁয়া জমে থাকা, তেল চিটচিটে ভাব হওয়া আমাদের দেশের
                একটা নিত্য-নৈমিত্তিক ব্যাপার। মূলত রান্নার সময় যে আদ্র ধোঁয়া
                তৈরী হয়, তা দ্রুত বাইরে বের করার কোন ব্যবস্থা থাকে না বলে এমনটি
                হয়ে থাকে।
              </Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>বাজারের সেরা Gazi Kitchen Hood</Column>
              <Column>Kitchen Appliances</Column>
              <Column>
                রান্নাঘরে ধোঁয়া জমে থাকা, তেল চিটচিটে ভাব হওয়া আমাদের দেশের
                একটা নিত্য-নৈমিত্তিক ব্যাপার। মূলত রান্নার সময় যে আদ্র ধোঁয়া
                তৈরী হয়, তা দ্রুত বাইরে বের করার কোন ব্যবস্থা থাকে না বলে এমনটি
                হয়ে থাকে।
              </Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>বাজারের সেরা Gazi Kitchen Hood</Column>
              <Column>Kitchen Appliances</Column>
              <Column>
                রান্নাঘরে ধোঁয়া জমে থাকা, তেল চিটচিটে ভাব হওয়া আমাদের দেশের
                একটা নিত্য-নৈমিত্তিক ব্যাপার। মূলত রান্নার সময় যে আদ্র ধোঁয়া
                তৈরী হয়, তা দ্রুত বাইরে বের করার কোন ব্যবস্থা থাকে না বলে এমনটি
                হয়ে থাকে।
              </Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>বাজারের সেরা Gazi Kitchen Hood</Column>
              <Column>Kitchen Appliances</Column>
              <Column>
                রান্নাঘরে ধোঁয়া জমে থাকা, তেল চিটচিটে ভাব হওয়া আমাদের দেশের
                একটা নিত্য-নৈমিত্তিক ব্যাপার। মূলত রান্নার সময় যে আদ্র ধোঁয়া
                তৈরী হয়, তা দ্রুত বাইরে বের করার কোন ব্যবস্থা থাকে না বলে এমনটি
                হয়ে থাকে।
              </Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
          </tbody>
        </Table>
        <Pagination />
      </Display>
    </div>
  );
};

export default Blogs;
