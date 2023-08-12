/* eslint-disable jsx-a11y/anchor-is-valid */
import { ApiClient } from "../../interceptors/axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
const Logout = () => {
    const nav = useNavigate();
    const { state } = useLocation();
    const handleLogout = async () => {
        await ApiClient().get('/logout').then(res => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');

        }).then(res => {
            nav('/login')
        })

    }
    return (
        <div>
            {state ?
                <div>
                    <span id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="mr-5 text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Hi, {state.data.fullname.split(' ')[0]}
                        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </span>
                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 shadow w-44 ">
                        <ul class="py-2 text-sm text-white dark:text-black" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lịch sử</Link>
                            </li>
                            <li>
                                <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                            </li>
                            <li>
                                <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                            </li>
                            <li>
                                <Link to="/logout" onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                            </li>
                        </ul>
                    </div>

                </div>
                :
                <Link className="text-white p-5" to='/login'>Login</Link>
            }

        </div>
    )
}
export default Logout;