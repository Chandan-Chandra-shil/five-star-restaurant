import React from 'react';

const CommonButton = ({ButtonText}) => {
  return (
    <div>
      <button className="btn btn-outline  border-0 border-b-4">
        {ButtonText}
      </button>
    </div>
  );
};

export default CommonButton;