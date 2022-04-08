import "../styles.css";
import React, { useCallback, useState, useEffect } from "react";
import database from "../data.json";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const LoginPage = (props) => {
  let fieldsCheck;
  let email;
  let emailError;
  let password;
  let passwordError;
  let errorsDetected;
  let globalUserSetter;
  // routing hooks
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/contest", { replace: true }),
    [navigate]
  );

  
  let loginFormChecker = function (e) {
    errorsDetected = 0;
    errorsReset();
    e.preventDefault(); //Prevent default form submit behavior.
    fieldsCheck.forEach((field) => {
      console.log(field);
      if (field.checker(field) === false) {
        field.error.innerText = field.msg;
        errorsDetected++;
      }
    });
    if (errorsDetected > 0) {
    } else {
      //Check for login info
      let users = database.user;
      users.forEach((user) => {
        let email = document.querySelector("#loginEmail").value;
        let password = document.querySelector("#loginPassword").value;
  
        if ((email === user.email) && (password === user.password)) {
          //Clean THIS error field
          document.querySelector("#credentialsError").innerHTML = "";
          //Set global user...
          globalUserSetter(user);
          //Redirect
          navigate("/contest", { replace: true });
        }
        else{
          //Set error field;
          document.querySelector("#credentialsError").innerHTML = "Invalid email or password.";
        }
      })
    }
  };

  let initForm = function () {
    globalUserSetter = props.setUser;
    document.querySelector("#credentialsError").innerHTML = "";
    email = document.querySelector("#loginEmail");
    emailError = document.querySelector("#loginEmailError");
    password = document.querySelector("#loginPassword");
    passwordError = document.querySelector("#loginPasswordError");

    fieldsCheck = [
      {
        field: email,
        checker: isNotEmpty,
        error: emailError,
        msg: "Please enter your email.",
      },
      {
        field: password,
        checker: isNotEmpty,
        error: passwordError,
        msg: "Please enter your password.",
      },
    ];

    let loginFormSubmit = document.querySelector("#loginFormSubmit");
    if (loginFormSubmit) {
      loginFormSubmit.addEventListener("click", loginFormChecker);
    }
  }
  // form validation
  let isNotEmpty = function (userInput) {
    if (userInput.field.value.trim().length > 0) {
      return true;
    }
    return false;
  };
 


  let errorsReset = function () {
    fieldsCheck.forEach((input) => {
      input.error.innerText = "";
    });
  };

  useEffect(() => {
    initForm();
  });


  return (
    <main>
    <section className="grid-x grid-padding-x">
    <div id="form-login" className="large-5 medium-6 small-12">
            <h3 id="bmd-form-title">Login</h3>
            <form id="bmd_form" action="#">
            <p className="bmd-error" id="credentialsError"></p>
              <fieldset>
                <label htmlFor="loginEmail" className="loginEmail inputLabel">
                  Email
                </label>
                <input name="loginEmail" id="loginEmail" type="text" />
                <p className="bmd-error" id="loginEmailError"></p>
              </fieldset>
              <fieldset>
                <label htmlFor="loginPassword" className="loginPassword inputLabel">
                  Password
                </label>
                <input name="loginPassword" id="loginPassword" type="password" />
                <p className="bmd-error" id="loginPasswordError"></p>
              </fieldset>
              <input
                type="submit"
                value="Login"
                id="loginFormSubmit"
                className="button"
                // onClick={() => {
                //   errorsDetected === 0 && handleOnClick();
                // }}
              />
            </form>
          </div>
    </section>
    </main>

    
  );
};

export default LoginPage;
