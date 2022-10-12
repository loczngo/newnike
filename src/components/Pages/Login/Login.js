import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from "./Login.module.css"
import logo1 from '../../img/nike-logo.png'
import logo from '../../img/0_LJ4Aq45zmj8yf8UD.png'


let cx = classNames.bind(styles)


function Login() {
    const initialValues = {
      username: "",
      email: "",
      password: ""
    };
    const [formValues, setFormValues] = useState(initialValues)
    const handleChange = (e) => {
      console.log(e.target);
    }
  return (
    <div>
      <div className={cx("container", "py-5")}>
        <form className='d-flex flex-column align-items-center justify-content-center'>
          <div className="form-group d-flex flex-column align-items-center justify-content-center">
            <label htmlFor="exampleInputEmail1" className="m">Email address</label>
            <input type="email" className={cx('form-control', 'inp-cus')} id="exampleInputEmail1" aria-describedby="emailHelp" value={formValues.email} onChange={handleChange} />
             
          </div>
          <div className="form-group d-flex flex-column align-items-center justify-content-center">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className={cx('form-control','inp-cus')} id="exampleInputPassword1" value={formValues.password} onChange={handleChange} />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Login