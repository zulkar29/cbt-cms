import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Invoice from '../../components/invoice';
import { AiOutlinePrinter } from 'react-icons/ai';
import './view.scss';

const OrderView: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <div className="print-control">
            <button>
              <AiOutlinePrinter />
            </button>
          </div>
        )}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>{<Invoice />}</div>
    </div>
  );
};

export default OrderView;
