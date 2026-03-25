import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { HEADER_LOGO, USER_ICON } from "../utils/constants";

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
                src={HEADER_LOGO}
                alt="header-logo"
            />
            <div className="relative group">
                {/* Profile Section */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img
                        className="w-10 h-10 rounded"
                        src={USER_ICON}
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

