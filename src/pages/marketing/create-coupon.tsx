import React from 'react';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';

const CreateCoupon = () => {
  return (
    <div>
      <CardBody header="Create Coupon" to="/coupons" />
      <Display>
        <form>
          <Input htmlFor="talha" />
        </form>
      </Display>
    </div>
  );
};

export default CreateCoupon;
