import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap hover:scale-110 hover:font-semibold'>
                        <span className='text-purple-400'>Pure</span>
                        <span className='text-purple-800'>Homes</span>
                    </h1>
                </Link>
                <form
                    className='bg-slate-100 p-3 rounded-lg flex items-center'
                >
                    <input
                        type='text'
                        placeholder='Search Homes...'
                        className='bg-transparent text-purple-500 font-bold focus:outline-none w-24 sm:w-64'
                    />
                    <button className="hover:scale-110 hover:font-semibold">
                        <FaSearch className='text-purple-600' />
                    </button>
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className=' hidden sm:inline text-purple-700 hover:scale-110 hover:font-bold'>
                            Home
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline text-purple-700 hover:scale-110 hover:font-bold'>
                            About
                        </li>
                    </Link>
                    <Link to='/profile'>
                        <li className=' text-purple-700 hover:scale-110 hover:font-bold'> Sign in</li>
                    </Link>
                </ul>
            </div>
        </header>
    );
}

export default Header;
