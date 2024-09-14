import React from 'react';
import { CgProfile } from "react-icons/cg";

interface IProfileItem {
    name: string;
    accessType: string;
}

const ProfileItem: React.FC<IProfileItem> = ({ name, accessType }) => {
    return (
        <div className='flex items-center py-4 px-1'>
            <div className='bg-violet-600 p-2 rounded-full'>
                <CgProfile size={40} color="white" />
            </div>

            <div className='ml-4'>
                <span className='block text-lg font-semibold text-gray-800'>{name}</span>
                <span className='block text-sm text-gray-600'>{accessType}</span>
            </div>
        </div>
    );
};

export default ProfileItem;
