
import AllBlogs from "../components/AllBlogs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Blog = ({ user }) => {

	return (
		<>
		<Navbar user={user}/>
			<AllBlogs />
		<Footer />
		</>
	);
};

export default Blog;
