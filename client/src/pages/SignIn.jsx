import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signin",{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/');

    } catch (error) {
      setLoading(false);
      setError(error.message);

    }
  }

  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-4xl text-purple-800 text-center font-semibold">
          Sign In
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5 ">
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg"
            id="password"
            onChange={handleChange}
          />
          <button disabled={loading} className="bg-purple-800 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-60">
            {loading ? 'Loading...' : "Sign In"}
          </button>
        </form>
        <div className="mt-3 text-center">
          <p>
            Not a registered user?
            <Link to={"/sign-in"}>
              <span className="text-purple-600 font-bold">
                {"  "}
                Click here to Sign Up...
              </span>
            </Link>
          </p>
        </div>
        {error && <p className='text-red-500 mt-5 text-center'>{error}</p>}
      </div>
    </>
  );
}
