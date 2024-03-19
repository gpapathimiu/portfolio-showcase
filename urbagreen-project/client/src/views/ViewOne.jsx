import Navbar from '../components/Navbar'
import OneBlog from '../components/OneBlog'
import Footer from '../components/Footer'

function ViewOne({ user }) {
  return (
    <div>
        <Navbar user={user} />
        <OneBlog/>
        <Footer/>
    </div>
  )
}

export default ViewOne