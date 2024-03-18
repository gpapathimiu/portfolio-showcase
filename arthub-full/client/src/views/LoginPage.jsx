import Login from "../components/Login";
import Register from "../components/Register";
import { PAINTINGS } from "../constants/paintings";
import { pickRandomElement } from "../helpers/functions";
import Navbar from "../components/Navbar";



function LoginPage() {
    const paintingUrl = pickRandomElement(PAINTINGS);

    return (
        <>
        <Navbar />
             <div className={`w-full h-[770px] overflow-hidden flex items-center justify-center`} style={{ backgroundImage: `url("${paintingUrl}")`, backgroundSize: 'cover' }}>
            <div className="flex flex-col gap-12">
            <div className="rounded-md relative">
                <div className="">
                    <Login />
                </div>
            </div>
            </div>
        </div>
        </>
       
    );
}

export default LoginPage;
