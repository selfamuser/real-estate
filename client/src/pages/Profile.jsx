import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { app } from '../firebase';
import { updateUserFailure, updateUserStart, updateUserSuccess } from '../redux/user/userSlice';

function Profile() {
  const { currentUser ,loading,error} = useSelector((state) => state.user);
  const [isVisible, setIsVisible] = useState(true);
  const [deleteText, setDeleteText] = useState("Delete Account");
  const [signoutText, setSignoutText] = useState("Sign Out");
  const [filePercentUpload, setFilePercentUpload] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const dispatch = useDispatch();

  // firebase storage
  // allow read;
  // allow write : if
  // request.resource.size < 5 * 1024 * 1024 &&
  // request.resource.contentType.matches('image/*')

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred /
          snapshot.totalBytes) * 100;
        setFilePercentUpload(Math.round(progress));
      },
      (error) => {
        console.log(error);
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadUrl) => {
            setFormData({
              ...formData,
              avatar: downloadUrl
            })
          }
          );
      });
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };


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
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-4xl text-purple-800 font-semibold text-center my-7">
        Profile
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 mb-2"
        />
        <p className='text-sm self-center'>
          {fileUploadError ? (
            <span className='text-red-700'>
              ** Error Image upload (image must be less than 2 mb) **
            </span>
          ) : filePercentUpload > 0 && filePercentUpload < 100 ? (
            <span className='text-green-800'>{`Uploading ${filePercentUpload}%`}</span>
          ) : filePercentUpload === 100 ? (
            <span className='text-green-700'>Image uploaded successfully!</span>
          ) : (
            ''
          )}
        </p>
        <input
          type="text"
          placeholder="Username"
          defaultValue={currentUser.username}
          id="username"
          className="border p-3 rounded-lg px-4 py-2 text-center"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          defaultValue={currentUser.email}
          className="border p-3 rounded-lg px-4 py-2 text-center"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg px-4 py-2 text-center"
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-purple-800 text-white p-3 rounded-lg uppercase hover:bg-green-600">
          {loading ? 'Loading..' : 'Update'}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span
          className="text-red-600 font-semibold text-shadow-lg cursor-pointer"
          onMouseOver={handleMouseOverDelete}
          onMouseOut={handleMouseOutDelete}
        >
          {deleteText}
        </span>
        <span
          className="text-red-600 font-semibold text-shadow-lg cursor-pointer"
          onMouseOver={handleMouseOverSignOut}
          onMouseOut={handleMouseOutSignOut}
        >
          {signoutText}
        </span>
      </div>
       <p className='text-center text-red-700 mt-5'>{error ? `${error} Access` : ''}</p>
     { isVisible && <p className='text-center text-green-700 mt-5'>
        {updateSuccess ? 'User is updated successfully!' : ''}
      </p>}
    </div>
  );
}

export default Profile;
