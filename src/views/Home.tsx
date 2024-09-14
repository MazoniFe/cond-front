import React from 'react';
import MenuItem from '../components/MenuItem';
import { FaCar } from "react-icons/fa";
import { SiTalenthouse } from "react-icons/si";
import { MdApartment } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { FaPeopleRobbery } from "react-icons/fa6";





import ProfileItem from '../components/ProfileItem';


const Home: React.FC = () => {
    return (
        <div className='grid grid-cols-6 h-screen'>
            <div className='col-start-1 col-end-2 px-4 py-2'>
                <ProfileItem name={'Felipe'} accessType={'Administrador'}></ProfileItem>
                <MenuItem image={FaCar} label={'Veículos'}></MenuItem>
                <MenuItem image={SiTalenthouse} label={'Torres'}></MenuItem>
                <MenuItem image={MdApartment} label={'Apartamentos'}></MenuItem>
                <MenuItem image={IoPeople} label={'Moradores'}></MenuItem>
                <MenuItem image={FaPeopleRobbery} label={'Visitantes'}></MenuItem>
                <MenuItem image={IoIosSettings} label={'Configurações'}></MenuItem>
            </div>
            <div className='bg-blue-300 col-start-2 col-end-9'>
                content
            </div>
        </div>
    );
};

export default Home;