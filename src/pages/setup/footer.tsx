import React from 'react';
import Display from '../../components/display';
import Input from '../../components/forms/text-input';
import Column from '../../components/table/column';

const Footer = () => {
  return (
    <div>
      <Display>
        <h3>Link Widget Two</h3>
        <br />
        <Input htmlFor="f-w" label="Title" placeholder="title" />
        <h6>Links</h6>
        <div className="row">
          <Column className="col-md-4">
            <Input htmlFor="f-w" placeholder="Name" />
          </Column>
          <Column className="col-md-8">
            <Input htmlFor="f-w" placeholder="Url" />
          </Column>
        </div>
        <div className="row">
          <Column className="col-md-4">
            <Input htmlFor="f-w" placeholder="Name" />
          </Column>
          <Column className="col-md-8">
            <Input htmlFor="f-w" placeholder="Url" />
          </Column>
        </div>
        <div className="row">
          <Column className="col-md-4">
            <Input htmlFor="f-w" placeholder="Name" />
          </Column>
          <Column className="col-md-8">
            <Input htmlFor="f-w" placeholder="Url" />
          </Column>
        </div>
        <div className="row">
          <Column className="col-md-4">
            <Input htmlFor="f-w" placeholder="Name" />
          </Column>
          <Column className="col-md-8">
            <Input htmlFor="f-w" placeholder="Url" />
          </Column>
        </div>
      </Display>
    </div>
  );
};

export default Footer;
