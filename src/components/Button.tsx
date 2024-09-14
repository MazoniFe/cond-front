import React from 'react';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';

interface ICoreButton {
  buttonStyle?: 'primary' | 'secondary';
  label: string;
  action: Action;
}

const getButtonCSS = (buttonStyle: string | undefined) => {
  if (buttonStyle === 'primary') {
    return 'bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded';
  } else {
    return 'bg-white text-blue-500 outline outline-1 outline-blue-500 hover:bg-slate-500 font-medium py-2 px-4 rounded';
  }
};


const CoreButton: React.FC<ICoreButton> = ({ label, action, buttonStyle }) => {
  const dispatch = useDispatch();
  return (
    <button 
      className={getButtonCSS(buttonStyle)}
      onClick={() => dispatch(action)}>
      {label}
    </button>
  );
};

export default CoreButton;
