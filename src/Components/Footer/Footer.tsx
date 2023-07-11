import logoImg from '../../assets/logo.svg'
import { Link } from 'react-scroll'
import facebook from '../../assets/icon-facebook.svg'
import youtube from '../../assets/icon-youtube.svg'
import twitter from '../../assets/icon-twitter.svg'
import pinterest from '../../assets/icon-pinterest.svg'
import instagram from '../../assets/icon-instagram.svg'
import Button from '../Button/Button.tsx'

function Footer() {

    const currentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <footer id='footer' className='bg-veryDarkBlue'>
            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            {/* Logo and social links container */}
                <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
                    <div className='mx-auto my-6 text-center text-white md:hidden'>
                        Copyright &copy;{currentYear()}.All Rights Reserved
                    </div>
                    {/* Logo */}
                    <div className='bg-white p-2 my-6'>
                        <img src={logoImg} alt="" className='h-8'/>
                    </div>
                    {/* Social Links Container */}
                    <div className='flex justify-center space-x-4'>
                        <Link to=''>
                            <img src={facebook} alt="facebook" className='h-6'/>
                        </Link>
                        <Link to=''>
                            <img src={youtube} alt="youtube" className='h-6'/>
                        </Link>
                        <Link to=''>
                            <img src={twitter} alt="twitter" className='h-6'/>
                        </Link>
                        <Link to=''>
                            <img src={pinterest} alt="pintrest" className='h-6'/>
                        </Link>
                        <Link to=''>
                            <img src={instagram} alt="instagram" className='h-6'/>
                        </Link>
                    </div>
                </div>
                {/* List Container */}
                <div className='flex justify-around space-x-24 ml-8'>
                    <div className='flex flex-col space-y-3 text-white'>
                        <Link to='nav' className='text-white hover:text-brightRed transition-all duration-300'>
                            Home
                        </Link>
                        <Link to='pricing' className='text-white hover:text-brightRed transition-all duration-300'>
                            Pricing
                        </Link>
                        <Link to='product' className='text-white hover:text-brightRed transition-all duration-300'>
                            Product
                        </Link>
                        <Link to='about' className='text-white hover:text-brightRed transition-all duration-300'>
                            About Us
                        </Link>
                    </div>
                    <div className='flex flex-col space-y-3 text-white'>
                        <Link to='' className='text-white hover:text-brightRed transition-all duration-300'>
                            Careers
                        </Link>
                        <Link to='' className='text-white hover:text-brightRed transition-all duration-300'>
                            Community
                        </Link>
                        <Link to='' className='text-white hover:text-brightRed transition-all duration-300'>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                {/* Input Container */}
                <div className='flex flex-col justify-between'>
                    <form>
                        <div className='flex space-x-3'>
                            <input type="text" className='flex-1 px-4 rounded-full focus:outline-none' placeholder='Updates in your inbox'/>
                            <Button
                                classes='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight transition-all duration-300 focus:outline-none'
                                Text='Go'
                            />
                        </div>
                    </form>
                    <div className='hidden text-white md:block'>
                        Copyright &copy;{currentYear()}.All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;