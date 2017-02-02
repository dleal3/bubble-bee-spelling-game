import React from 'react'
import { Link } from 'react-router'

// Created form for login for teachers as they are going to need to login seperately so they can go to the teacher portal page where they will be prompted to enter words and grade level for game

// Created form for login for students as they are going to login with the i.d that the teacher provides them
export default React.createClass({
  render() {
    return (
      <div id="clouds">
        <img src="styles/Bubble-Bee.png" alt="" className="Bubble-Bee-Image"/>

      	<div className="cloud x1"></div>

      	<div className="cloud x2"></div>
      	<div className="cloud x3"></div>
      	<div className="cloud x4"></div>
      	<div className="cloud x5"></div>
          <div>
            <section id="login_wrapper">
              <form name="login_form"
                    className="login_form"
                    action=""
                    method="post">
                <div className="header">
                  <h1>Login Form</h1>
                  <span>Fill out the form below to login
                  </span>
                </div>

                <div className="content">
                  <input
                    className="input_username"
                    name="username"
                    placeholder="Username"
                    type="text"/>
                  <div className="user_icon">
                    </div>

                  <input
                    name="password"
                    type="password"
                    className="input_password"
                    placeholder="Password"/>
                  <div
                    className="pass_icon">
                  </div>
                </div>

                <div className="footer">
                  <input
                    className="button"
                    name="submit"
                    value="Login"
                    type="text"/>


                    <Link to="/register"
                      className="register"
                      name="submit"
                      value="Register"
                      type="submit">Register</Link>

                </div>
              </form>
            </section>
          </div>
      </div>
    )
  }
})
