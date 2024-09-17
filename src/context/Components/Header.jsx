import { ContactsOutlined, ContainerOutlined, CustomerServiceOutlined, HomeOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <header className={`${theme == 'light' ? 'bg-white text-black' : 'bg-black text-white'} shadow-md`}>
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-indigo-600">
                    MyLogo
                </div>

                <nav className="md:flex space-x-8">
                    <a href="#home" className="">Home <HomeOutlined /></a>
                    <a href="#about" className="">About <ContainerOutlined /></a>
                    <a href="#services" className=" ">Services <CustomerServiceOutlined /></a>
                    <a href="#contact" className="">Contact <ContactsOutlined /></a>
                </nav>

                <div>
                    <button
                        onClick={() => {
                            if (theme == 'light') {
                                setTheme('dark')
                            } else {
                                setTheme('light');
                            }
                        }}
                        className="font-bold bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 transition duration-300">
                        {theme == 'light' ? 'Make it Dark ' : 'Make it Light '}
                        {theme == 'light' ? <MoonOutlined /> : <SunOutlined />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
