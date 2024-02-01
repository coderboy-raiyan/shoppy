/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { admin_login, messageClear } from "../../store/reducers/authReducer";

function AdminLogin() {
  const dispatch = useDispatch<AppDispatch>();
  const { loader, errorMessage, successMessage } = useSelector<
    RootState,
    RootState["auth"]
  >((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(admin_login(formData));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
  }, [errorMessage, successMessage, dispatch]);

  return (
    <section className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[380px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[60px]">
              <img
                className="w-full h-full"
                src="http://localhost:5173/images/logo.png"
                alt=""
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 text-[#d0d2d6]  py-2 outline-none border-slate-700 bg-transparent border rounded focus:border-indigo-500 overflow-hidden"
                type="email"
                onChange={handleInputChange}
                value={formData.email}
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 text-[#d0d2d6]  py-2 outline-none border-slate-700 bg-transparent border rounded focus:border-indigo-500 overflow-hidden"
                type="password"
                onChange={handleInputChange}
                value={formData.password}
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>
            <div className="flex items-center gap-3 mb-3 ">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                required
              />
              <label htmlFor="checkbox">
                I agree to privacy and policy and terms
              </label>
            </div>

            <button
              disabled={loader}
              type="submit"
              className="bg-blue-600 w-full hover:shadow-ble-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
            >
              {loader ? "Please wait..." : "Sign in"}
            </button>
            <div className="flex  mb-3 gap-3 justify-center">
              <p>
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;
