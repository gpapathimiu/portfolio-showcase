import Navbar from "../components/Navbar";
import Quiz from "../components/Quiz";
import Footer from "../components/Footer";

const QuizPage = ({ user }) => {
  return (
    <>
        <Navbar user={user} />
        <Quiz />
        <Footer />
    </>
  )
}

export default QuizPage