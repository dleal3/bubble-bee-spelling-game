import React from 'react'
import { Link } from 'react-router'

// Created form for login for teachers as they are going to need to login seperately so they can go to the teacher portal page where they will be prompted to enter words and grade level for game

// Created form for login for students as they are going to login with the i.d that the teacher provides them
export default React.createClass({
  render() {
    return (
      <div id="clouds">
      	<div className="cloud x1"></div>

      	<div className="cloud x2"></div>
      	<div className="cloud x3"></div>
      	<div className="cloud x4"></div>
      	<div className="cloud x5"></div>
      </div>


    )
  }
})
