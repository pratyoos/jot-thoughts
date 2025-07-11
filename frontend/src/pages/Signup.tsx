import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axiosClient from '../api/axiosClient'; // <-- import axios client
import InputField from '../components/InputField';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axiosClient.post('/auth/signup', formData);
      console.log('Signup success:', response.data);

      // Optionally store token here:
      // localStorage.setItem('token', response.data.token);

      navigate('/login');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          <form onSubmit={handleSubmit}>
            <InputField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-sm text-gray-600"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#44B0E2] hover:bg-[#3A9CCF] text-white py-2 rounded-xl transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-[#44B0E2]">
              Login
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
