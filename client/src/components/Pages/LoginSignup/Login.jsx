import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild
} from '@headlessui/react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Context/UserProvider';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useUser();
  const navigate = useNavigate();

  let [isOpen, setIsOpen] = useState(false);


  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        username,
        password
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setUser(response.data.user);
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 500);
      });
      navigate('/');
    } catch (err) {
      console.log(err);
      setIsOpen(true);
    } finally {
      setIsOpen(true);
    }
  };

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-96 max-w-md rounded-xl border bg-white p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-semibold text-slate-800"
                  >
                    Wrong username or password!
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-slate-800/50">
                    Please enter your username and password again.
                  </p>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-blue-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-blue-500 
                      transition duration-200 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      Try Again
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
      {
        <div
          id="page-container"
          className={
            'bg-image flex h-screen items-center justify-center bg-transparent ' +
            (isOpen ? 'blur-sm ' : '')
          }
        >
          <div id="main" className="rounded-lg">
            <div
              id="card-container"
              className="mx-auto flex rounded-lg shadow-sm ring-1 ring-slate-900/5"
            >
              <div id="form-container">
                <div id="form">
                  <div
                    id="form-greeting"
                    className="rounded-t-lg bg-stone-50 px-16 py-6 text-center"
                  >
                    <h1 className="text-slate-700">Merhaba!</h1>
                    <h2 className="text-slate-400">
                      {"StationWatch'a hoşgeldin!"}
                    </h2>
                  </div>
                    <form
                      onSubmit={handleLoginSubmit}
                      className="rounded-b-lg bg-white px-16 pb-8 pt-8"
                    >
                      <fieldset>
                        <div>
                          <div>
                            <input
                              type="text"
                              id="username"
                              name="username"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              minLength="3"
                              maxLength="20"
                              placeholder=" "
                              required
                            />
                            <label htmlFor="username">Kullanıcı Adı</label>
                          </div>
                          <div>
                            <input
                              type="password"
                              id="password"
                              name="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              minLength="6"
                              maxLength="20"
                              placeholder=" "
                              required
                            />
                            <label htmlFor="password">Şifre</label>
                          </div>
                        </div>

                        <div className="button">
                          <button
                            type="submit"
                            className="mb-2 rounded-md bg-blue-400 hover:bg-blue-500"
                          >
                            Giriş Yap
                          </button>
                        </div>
                        <div>
                          Şifreni mi unuttun?{' '}
                          <a href="#" className="font-semibold text-blue-300">
                            Şifreni Yenile
                          </a>
                          <div className="flex w-full justify-center">
                            <div
                              onClick={() => navigate("/signup")}
                              className="mt-4 w-fit rounded-md bg-blue-50
                            p-2 font-semibold text-blue-400 hover:cursor-pointer hover:text-blue-500 "
                            >
                              Veya Hemen Kaydol!
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Login;
