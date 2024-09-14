import React from 'react';
import { IconType } from 'react-icons';

interface IMenuItem {
  image?: IconType; // Tipo para ícone
  label: string;
  callback?: () => void; // Tipagem mais precisa para a função callback
}

const MenuItem: React.FC<IMenuItem> = ({ image: Image, label, callback }) => {
  return (
    <div className='rounded-md flex items-center p-4 hover:cursor-pointer hover:bg-gray-300 ease-in-out duration-300'>
      {Image && <Image size={25} />}
      <span className='ml-2 text-gray-950 text-lg' onClick={() => callback && callback()}>{label}</span>
    </div>
  );
};

export default MenuItem;
