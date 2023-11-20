import React, { useEffect, useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import Invoice from '../../components/invoice';
import { AiOutlinePrinter } from 'react-icons/ai';
import './view.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constants';
import { IOrder } from '../../interfaces/order';

const OrderView: React.FC = () => {
  const [order, setOrder] = useState<IOrder>({} as IOrder);
  const { slug } = useParams();
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getOrderData = async () => {
      const res = await axios.get(`${API_URL}/orders/${slug}`);
      setOrder(res.data.data);
    };
    getOrderData();
  }, [slug]);

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <div className="print-control">
            <button title="Print">
              <AiOutlinePrinter />
            </button>
          </div>
        )}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>{<Invoice order={order} />}</div>
    </div>
  );
};

export default OrderView;
