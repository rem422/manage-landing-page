import { useState } from 'react'
import LogoImg from '../../assets/logo.svg'
import { Link } from 'react-scroll'
import Button from '../Button/Button.tsx'
import menuBtn from '../../assets/icon-hamburger.svg'
import closeBtn from '../../assets/icon-close.svg'

function Navbar() {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav id='nav' className='relative container mx-auto p-6'>
            <div className="flex items-center justify-between">
                {/*Logo*/}
                <div className="pt-2">
                    <img src={LogoImg} alt="logo"/>
                </div>
                {/*Menu Items*/}
                <div className=" hidden md:flex space-x-6">
                    <Link to='pricing' className='hover:text-darkGrayishBlue transition-all ease-in-out duration-300'>Pricing</Link>
                    <Link to='product' className='hover:text-darkGrayishBlue transition-all ease-in-out duration-300'>Product</Link>
                    <Link to='about' className='hover:text-darkGrayishBlue transition-all ease-in-out duration-300'>About Us</Link>
                    <Link to='carrers' className='hover:text-darkGrayishBlue transition-all ease-in-out duration-300'>Careers</Link>
                    <Link to='community' className='hover:text-darkGrayishBlue transition-all ease-in-out duration-300'>Community</Link>
                </div>
                {/*Button*/}
                <Button
                classes='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight transition-all ease-in-out duration-300'
                Text='Get Started'
                />

            {/* Hamburger Menu */}
                <div className='block cursor-pointer md:hidden focus:outline-none' onClick={handleToggle}>
                    {toggle ? <img src={closeBtn} alt="close" /> : <img src={menuBtn} alt="menu" /> }
                </div>
            </div>
                {/* Mobile Menu */}
                <div className='md:hidden'>
                    <div className={toggle ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" : "hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"}>
                        <Link to='' onClick={handleToggle} className='hover:text-brightRed transition-all duration-300'>Pricing</Link>
                        <Link to='' className='hover:text-brightRed transition-all duration-300' onClick={handleToggle}>Product</Link>
                        <Link to='features' className='hover:text-brightRed transition-all duration-300' onClick={handleToggle}>About Us</Link>
                        <Link to='' className='hover:text-brightRed transition-all duration-300' onClick={handleToggle}>Carrer</Link>
                        <Link to='cta' className='hover:text-brightRed transition-all duration-300' onClick={handleToggle}>Community</Link>
                    </div>
                </div>
        </nav>
    );
}

export default Navbar;