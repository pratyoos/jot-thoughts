import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { getUserProfile } from "../api/user";
import { blogApi } from "../api/blogApi";

const CreateBlog = () => {
    const navigate = useNavigate();
    const [_user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [category, setCategory] = useState("General");
    const [content, setContent] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/login"); // redirect if not logged in
                return;
            }
            try {
                const data = await getUserProfile();
                setUser(data);
            } catch {
                navigate("/login");
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await blogApi.create({
                title,
                summary,
                content,
                imageUrl,
                category
            });
            navigate("/blog"); // redirect to blog page after creation
        } catch (error: any) {
            console.error("Error creating blog:", error);
            if (error.response) {
                console.error("Error response:", error.response.data);
                console.error("Error status:", error.response.status);
            }
            // You can add error handling here
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <>
            <Navbar />
            <section className="min-h-[80vh] bg-gray-50 py-16 px-6">
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Create a New Blog</h1>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700 mb-1">Title</label>
                            <Input
                                type="text"
                                placeholder="Enter blog title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Summary</label>
                            <Textarea
                                placeholder="Enter blog summary"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                                required
                                className="resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Image URL</label>
                            <Input
                                type="text"
                                placeholder="Enter image URL"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Category</label>
                            <Input
                                type="text"
                                placeholder="Enter category"
                                className="w-full"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>


                        <div>
                            <label className="block text-gray-700 mb-1">Content</label>
                            <Textarea
                                placeholder="Write your blog content here..."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                                rows={10}
                                className="resize-none"
                            />
                        </div>

                        <div className="flex justify-end mt-4">
                            <Button type="submit">Publish Blog</Button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CreateBlog;