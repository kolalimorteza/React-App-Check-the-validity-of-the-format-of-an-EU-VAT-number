import React, { Component } from 'react';

const VatDetails = (props) => {
  const name = props.name;
  const isValid = props.isValid;
  return (
    <div>
      <div className="my-2 mx-auto p-relative bg-white shadow-1 blue-hover" style={{ width: 360, overflow: 'hidden', borderRadius: 1 }}>
        <div className="px-2 py-2">
          <p className="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
          VAT number Details
       </p>
          <h4 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1">
          Country Name: {name}
          </h4>
          <h5 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1">
          VAT Number: {props.value}
          </h5>
          <h5 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1">
          Country Code long : {props.isoCode.long}
          </h5>
          <h5 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1">
          Country Code short : {props.isoCode.short}
          </h5>
          <h5 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1">
          Country numeric : {props.isoCode.numeric}
          </h5>
          <h5 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1">
            { name !== null
              ? 'Valid : True' 
              : 'Valid : False'
            }
          </h5>
        </div>
      </div>
    </div>
     

  );
};
export default VatDetails;