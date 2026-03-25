import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
    const {uid,email,displayName,photoUrl} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoUrl:photoUrl}))
    navigate("/browse");
    } else {
    dispatch(removeUser());
    navigate("/");
    }
    });
    return ()=>unsubscribe();
   },[])



    const handleClick = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate("/");

        }).catch((error) => {
            dispatch("/error");

        });
    }
    return (
        <div className="absolute flex justify-between items-center px-8 py-3 bg-gradient-to-r from-black z-10 w-full">
            <img
                className="w-30 h-20"
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="header-logo"
            />
            <div className="relative group">
                {/* Profile Section */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img
                        className="w-10 h-10 rounded"
                        src="https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABS8sWFjSyj1zyfgcnGamqyJ1E2ZubZGo8dndCM_ipf_5UpmVlkuf8IXzQlmPZQqTMWNjWukESRdLkFGHnf7zbY3MJCO3r4s.png?r=229"
                        alt="user-icon"
                    />
                </div>

                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-56 bg-black text-white rounded shadow-lg 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300">

                    <ul className="flex flex-col text-sm">
                        <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Manage Profiles</li>
                        <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Transfer Profile</li>
                        <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Account</li>
                        <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Help Center</li>

                        <li
                            className="px-4 py-2 hover:bg-gray-800 cursor-pointer border-t border-gray-700"
                            onClick={handleClick}
                        >
                            Sign out of Netflix
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

