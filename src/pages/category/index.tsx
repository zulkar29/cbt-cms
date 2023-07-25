import { ChangeEvent, useState } from 'react';
import CardBody from '../../components/card-body';
import Display from '../../components/display';

function Categories() {
  const [search, setSearch] = useState(10);

  const handleSearch = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearch(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Categories" to="/categories/create" />
      <Display handleSearch={handleSearch} />
    </div>
  );
}

export default Categories;
