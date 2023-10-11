import { useEffect } from 'react';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Actions from '../../components/actions';
import ToggleButton from '../../components/forms/checkbox';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCategories } from '../../redux/category/categorySlice';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <CardBody header="Categories" to="/categories/create" />
      <Display>
        <Row className="row">
          <Column className="col-md-3">Banner</Column>
          <Column className="col-md-3">Name</Column>
          <Column className="col-md-2"> Parent Category</Column>
          <Column className="col-md-2">Featured</Column>
          <Column className="col-md-1">Options</Column>
        </Row>
        {categories.map((category, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-3">
              <img
                src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1629616218pexels-karolina-grabowska-4386467.jpg"
                alt="brand"
              />
            </Column>
            <Column className="col-md-3">{category.title}</Column>
            <Column className="col-md-2">{category.parent_category}</Column>
            <Column className="col-md-2">
              <ToggleButton />
            </Column>
            <Column className="col-md-1">
              <Actions editUrl={`/categories/edit/${index}`} />
            </Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default Categories;
