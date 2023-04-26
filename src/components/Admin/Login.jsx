import React, {useState}  from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";

function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const validation = async () => {
        const schema = yup.object().shape({
            userName: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
            password: yup.string().required("لطفا رمز خود را وارد کنید")
        })
        try {
            return await schema.validate({userName,password})
        } catch (error) {
            setErrors(error.errors)
        }
    }

    function LoginApi(){
        return(
            axios.post("http://localhost:8010/login",
                {username: userName, password: password}
            ).then((response) => {
                localStorage.setItem("Authorization", response.headers["authorization"])
                localStorage.setItem("password", password)
                localStorage.setItem("username", userName)
                return response
            }).catch((error) => {
                return error.response;
            })
        )
    }

    async function submit() {
        const result = await validation()
        if (result !== undefined) {
            setErrors([])
            const res = await LoginApi()
            if (res.status === 403) {
                setErrors(["رمز عبور یا نام کاربری اشتباه است"])
            } else if (res.status === 200) {
                navigate("/admin")
            }
        }
    }



    return (
        <section className="bg-gray-50 dark:bg-gray-900 text-right">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            ورود به گردونه میگ میگ
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    نام کاربری
                                </label>
                                <input type="email" name="email" id="email" value={userName} onChange={e => setUserName(e.target.value)}
                                       className="bg-gray-50 text-right border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رمز عبور</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}
                                       className="bg-gray-50 text-right border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""/>
                            </div>
                            <div>
                                {
                                    errors.map((error, index) =>
                                        <small key={index} className={"text-red-600 mt-5 text-[0.8rem]"}>{error}</small>
                                    )
                                }
                            </div>
                            <button onClick={submit}
                                    className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                ورود
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default Login;
