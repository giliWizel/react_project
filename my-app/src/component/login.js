import React, { createRef, useState } from "react";
import { connect } from 'react-redux'
import { actionsStore } from '../redux/actions/actions'
import { routerClient } from './client/RouteClient';
import Http from '../config/axios'
import register from './client/register/register';
import { withRouter } from 'react-router-dom';
function mapStateToProps(state) {
    return {
        user: state.users
    }
}
const mapDispatchToProps = (dispatch) => ({

    addNewUser: (token) => dispatch(actionsStore.addNewUser(token)),

})
export default connect(mapStateToProps, mapDispatchToProps)(function Login(props) {
    const { user, addNewUser, history } = props;
    const reftoName = createRef();
    const reftoPassword = createRef();
    const [fields, setFields] = useState({})
    const [errors, setErrors] = useState({})
    function login() {
        debugger;
        const user = {
            "name": reftoName.current.value,
            "password": reftoPassword.current.value
        }
        // Http.post('/login', user)
        //     .than(res => {
        //         if (res.status == 404) {
        //             console.log("משתמש לא קיים")
        //             // history.push('/Register');
        //         }
        //         else {
        //             addNewUser(res.user);
        //             //בדיקה אם קלינט או עובד 
        //             // history.push('route'');
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        // addNewUser(user);
        console.log(user)

    }
    function myFunction() {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    function handleValidation() {
        debugger
        let formfields = fields;
        let error = {};
        let formIsValid = true;

        //Name
        if (!formfields["name"]) {
            formIsValid = false;
            error["name"] = "name is require";
        }
        if (typeof formfields["name"] !== "undefined") {
            if (!formfields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                error["name"] = "Only letters";
            }
        }
        if (!formfields["password"]) {
            formIsValid = false;
            error["password"] = "password is require";
        }
        setErrors(error)
        return formIsValid
    }
    function handleChange(field, e) {
        let formfields = fields;
        formfields[field] = e.target.value;
        setFields(formfields)
    }
    function contactSubmit(e) {
        e.preventDefault();

        if (handleValidation()) {
            login()
        }

    }

    return (
        <div className="container">
            <div class="container">
                <div class="row">
                </div>
                <br /><br />
            </div>
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <form>
                        <h1>כניסה</h1>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">שם משתמש</label>
                            <input type="text" className="form-control" id="name" ref={reftoName} placeholder="שם משתמש" onChange={(e) => handleChange("name", e)} />
                            <span style={{ color: "red", fontSize: "small" }}>{errors["name"]}</span>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">סיסמא</label>
                            <input type="password" className="form-control" id="password" placeholder="סיסמא" onChange={(e) => handleChange("password", e)} ref={reftoPassword} />
                            <span style={{ color: "red", fontSize: "small" }}>{errors["password"]}</span>
                            <br></br>
                            <input type="checkbox" onClick={myFunction} />  הצג סיסמא
                        </div>

                    </form>
                    <button className="btn btn-primary" onClick={contactSubmit}>כניסה</button>

                </div>

            </div >

        </div >



    )
})