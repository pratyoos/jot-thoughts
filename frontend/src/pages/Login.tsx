// pages/Login.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Add your login API integration here
            // const response = await axios.post('/api/login', formData);
            console.log('Logging in with:', formData);

            // If successful
            navigate('/dashboard'); // or home
        } catch (err: any) {
            setError('Invalid email or password.');
        }
    };

    return (
        <>
            <Navbar />

            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-6">Login to Jot Thoughts</h2>

                    {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

                    <form onSubmit={handleSubmit}>
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
                            className="w-full bg-[#44B0E2] text-white py-2 rounded-xl"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-sm text-center mt-4">
                        Don’t have an account?{' '}
                        <Link to="/signup" className="text-[#44B0E2] hover:underline">
                            Sign Up
                        </Link>
                    </p>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Login;