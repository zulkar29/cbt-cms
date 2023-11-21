import { useState } from 'react';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import Select from '../../components/select';
import { DateRangePicker } from 'rsuite';

const CreateCoupon = () => {
  const [discountType, setDiscountType] = useState<'percent' | 'flat' | ''>('');
  const [discount, setDiscount] = useState(0);
  const [campaignDate, setCampaignDate] = useState<[Date, Date] | null>(null);

  return (
    <div>
      <CardBody header="Create Coupon" to="/coupons" />
      <Display>
        <form>
          <Input htmlFor="coupon" placeholder="Coupon code" />
          <Select
            onChange={(e) =>
              setDiscountType(e.target.value as 'flat' | 'percent')
            }
          >
            <option value="flat">Flat</option>
            <option value="percent">Percent</option>
          </Select>
          <Input
            placeholder="Discount Price"
            label="Discount Price"
            htmlFor="discount-price"
            onChange={(e) => setDiscount(Number(e.target.value))}
            required
          />
          <Input
            placeholder="Discount Price"
            label="Discount Price"
            htmlFor="discount-price"
            onChange={(e) => setDiscount(Number(e.target.value))}
            required
          />
          <DateRangePicker
            className={`date-area`}
            value={campaignDate}
            onChange={(dateRange) => setCampaignDate(dateRange)}
          />
        </form>
      </Display>
    </div>
  );
};

export default CreateCoupon;
