import axios from "axios";

// Define the ITodo interface for the props
interface ITodo {
  title: string;
  completed: boolean;
}

// Declare the Todo component with proper function declaration
const Todo = ({ title, completed }: ITodo) => {
  return (
    <div className="bg-gray-100 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300 p-6">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-2">{completed ? "done" : "not done"}</p>
    </div>
  );
};

const getBlogs = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return response.data;
};

export default async function Blogs() {
  const blogs = await getBlogs(); // Fetch blogs data

  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-700">Blog Posts</h1>

        <div className="space-y-8">
          {/* Map over the blogs array and render each blog */}
          {blogs.map((blog: { id: number; title: string; completed: boolean }) => (
            <Todo key={blog.id} title={blog.title} completed={blog.completed} />
          ))}
        </div>
      </div>
    </div>
  );
}
