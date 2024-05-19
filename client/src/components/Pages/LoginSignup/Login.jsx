import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        username,
        password
      })
      const { token } = response.data
      localStorage.setItem('token', token)
      await console.log(response)
      //setIsLoggedIn(true);
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {
        /*isLoggedIn &&*/
        <div
          id="page-container"
          className="bg-image flex h-screen items-center justify-center bg-transparent"
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
                    onSubmit={handleSubmit}
                    className="rounded-b-lg bg-white px-16 pb-10 pt-8"
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
  )
}

export default Login
