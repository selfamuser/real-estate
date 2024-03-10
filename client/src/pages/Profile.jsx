import { useState } from 'react';
import { useSelector } from 'react-redux';
function Profile() {

  const { currentUser } = useSelector((state) => state.user);
  const [deleteText , setDeleteText] = useState("Delete Account");
  const [signoutText,setSignoutText] = useState("Sign Out");

  const handleMouseOverSignOut = () => {
    setSignoutText("Want to exit?");
  };
  const handleMouseOutSignOut = () => {
    setSignoutText("Sign Out");
  };

  const handleMouseOverDelete = () => {
    setDeleteText("Permanently Leaving us?");
  };
  const handleMouseOutDelete = () => {
    setDeleteText("Delete Account");
  };
  //console.log(currentUser)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-purple-800 font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img
          src={currentUser.avatar}
          alt='profile'
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 mb-2'
        />
        <input
          type='text'
          placeholder='Username'
          defaultValue={currentUser.username}
          id='username'
          className='border p-3 rounded-lg px-4 py-2 text-center'
        />
        <input
          type='email'
          placeholder='Email'
          id='email'
          defaultValue={currentUser.email}
          className='border p-3 rounded-lg px-4 py-2 text-center'
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='border p-3 rounded-lg px-4 py-2 text-center'
        />
        <button className='bg-purple-800 text-white p-3 rounded-lg uppercase hover:bg-green-600'>
          Update
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span
          className='text-red-600 font-semibold text-shadow-lg cursor-pointer'
          onMouseOver={handleMouseOverDelete}
          onMouseOut={handleMouseOutDelete}
        >
          {deleteText}
        </span>
        <span  
        className='text-red-600 font-semibold text-shadow-lg cursor-pointer'
        onMouseOver={handleMouseOverSignOut}
        onMouseOut={handleMouseOutSignOut}
        >
          {signoutText}
        </span>
      </div>
    </div>

  )
}

export default Profile;