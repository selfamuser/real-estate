
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const { currentUser } = useSelector((state) => state.user);
    const [searchTerm , setSearchTerm] = useState('');
    const navigate = useNavigate();

    const  handleSubmit = (e) =>{
        e.preventDefault();
        const urlParams =  new URLSearchParams(window.location.search);
        urlParams.set('searchTerm',searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
          setSearchTerm(searchTermFromUrl);
        }
      }, [location.search]);
  
    

    return (
        <header className="bg-slate-200 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Link to="/">
                    <h1 className="font-bold text-sm sm:text-3xl flex flex-wrap hover:scale-110 hover:font-semibold">
                        <span className="text-purple-400">Pure</span>
                        <span className="text-purple-800">Homes</span>
                    </h1>
                </Link>
                <form 
                onSubmit={handleSubmit}
                className="bg-slate-100 p-3 rounded-lg flex items-center"
                  
                >
                    <input
                        type="text"
                        placeholder="Search Properties..."
                        className="bg-transparent text-purple-500 font-bold focus:outline-none w-24 sm:w-64"
                        value={searchTerm}
                        onChange={(e)=>setSearchTerm(e.target.value)}
                    />
                    <button className="hover:scale-110 hover:font-semibold">
                        <FaSearch className="text-purple-600" />
                    </button>
                </form>
                <ul className="flex gap-5">
                    <Link to="/">
                        <li className=" hidden sm:inline text-purple-700 hover:scale-110 hover:font-bold">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="hidden sm:inline text-purple-700 hover:scale-110 hover:font-bold">
                            About
                        </li>
                    </Link>
                        {currentUser ? (
                            <Link to="/profile">
                            <img
                                className="rounded-full h-7 w-7 object-cover"
                                src={currentUser.avatar}
                                alt="profile"
                            />
                            </Link>
                        ) : (
                            <Link to="/signin">
                            <li className=" text-purple-700 hover:scale-110 hover:font-bold"> Sign in</li>
                            </Link>
                        )}
                </ul>
            </div>
        </header>
    );
}

export default Header;

