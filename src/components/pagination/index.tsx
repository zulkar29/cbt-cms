import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './index.scss';

const Pagination = () => {
  const [page, setPage] = useState<number>(0);
  const handlePageClick = (count: { selected: number }) => {
    setPage(count.selected);
  };

  console.log(page);

  return (
    <div className="page-container">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={80}
        disableInitialCallback={true}
        marginPagesDisplayed={1}
        pageClassName="page-item"
        previousClassName="prev-page"
        nextClassName="next-page"
        previousLabel="Previous"
        containerClassName="pagination"
        renderOnZeroPageCount={null}
        disabledClassName="disable"
      />
    </div>
  );
};

export default Pagination;
