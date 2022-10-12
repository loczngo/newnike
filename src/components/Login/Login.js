import React from 'react'
import classNames from 'classnames/bind'
import styles from "./Login.module.css"
import logo1 from '../../img/nike-logo.png'
import logo from '../../img/0_LJ4Aq45zmj8yf8UD.png'

let cx = classNames.bind(styles)


function Login() {
  return (
    <div>
                <form>
            <div className="logo">
              <img src={logo1} alt="" className="logo12"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Tell us more about your email address!</label>
              <input type="email" className={cx("form-control")} id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <small id="emailHelp" className={cx("form-text text-muted")}>We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className={cx("form-control")} id="exampleInputPassword1"/>
            </div>
            <button type="submit" className={cx("btn btn-dark")}>Submit</button>
            <a href="#" className="passforgot">Forgot your password?</a>
          </form>


    </div>
  )
}

export default Login