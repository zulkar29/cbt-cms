import { ChangeEvent } from 'react';
import './index.scss';

interface propsType {
  handleSearch: (e: ChangeEvent<HTMLSelectElement>) => void;
}
const Filter: React.FC<propsType> = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="dataTables_length" id="admin-table_length">
          <label className="filter-item">
            Show{' '}
            <select
              // onChange={(e) => handleSearch(e)}
              name="admin-table_length"
              aria-controls="admin-table"
              className="custom-select custom-select-sm form-control form-control-sm"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            entries
          </label>
        </div>
      </div>
      <div className="col-md-6">
        <div id="admin-table_filter" className="filter-search">
          <label>Search </label>
          <input
            type="search"
            className="form-control form-control-sm"
            placeholder=""
            aria-controls="admin-table"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
