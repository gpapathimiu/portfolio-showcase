import Navbar from '../components/Navbar'
import DisplayOne from '../components/DisplayOne'

function OnePost(props) {
  return (
    <div>
        <Navbar/>
        <DisplayOne props={props} />
    </div>
  )
}

export default OnePost;