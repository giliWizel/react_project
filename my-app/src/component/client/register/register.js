import React, { createRef, useState } from "react";
import { connect } from 'react-redux'
import { actionsStore } from '../../../redux/actions/actions'
function mapStateToProps(state) {
    return {
        user: state.users
    }
}
const mapDispatchToProps = (dispatch) => ({

    addNewUser: (token) => dispatch(actionsStore.addNewUser(token)),

})
export default connect(mapStateToProps, mapDispatchToProps)(function RegisterClient(props) {
    const { user, addNewUser } = props;
    let cities = ["בני ברק", "ירושלים", "תל אביב"]
    let streets = ["בני ברק", "ירושלים", "תל אביב"]
    const reftoName = createRef();
    const reftoEmail = createRef();
    const reftoStreet = createRef();
    const reftoCity = createRef();
    const reftoPassword = createRef();
    const refToPhone = createRef();
    const refToBuildingNum = createRef();
    const refToFloor = createRef();
    const [fields, setFields] = useState({})
    const [errors, setErrors] = useState({})
    function register() {

        debugger;
        const user = {
            "name": reftoName.current.value,
            "password": reftoPassword.current.value,
            "email": reftoEmail.current.value,
            "city": reftoCity.current.value,
            "street": reftoStreet.current.value,
            "buildingNum": refToBuildingNum.current.value,
            "floor": refToFloor.current.value,
            "phone": refToPhone.current.value
        }
        //לשלוח לשרת עם היוזר
        addNewUser(user);
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

        if (!formfields["name"]) {
            formIsValid = false;
            error["name"] = "חובה להכניס שם";
        }
        if (typeof formfields["name"] !== "undefined") {
            if (!formfields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                error["name"] = "אותיות באנגלית בלבד";
            }
        }
        if (!formfields["password"]) {
            formIsValid = false;
            error["password"] = "חובה להכניס סיסמא";
        }
        if (!formfields["email"]) {
            formIsValid = false;
            error["email"] = "חובה להכניס מייל";
        }
        if (typeof formfields["email"] !== "undefined") {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formfields["email"]) === false) {
                formIsValid = false;
                error["email"] = "כתובת מייל לא חוקית";
            }
        }
        if (formfields["street"] === undefined || formfields["street"] === 'noStreet') {
            formIsValid = false;
            error["street"] = "חובה לבחור רחוב";
        }
        if (formfields["city"] === undefined || formfields["city"] === 'noCity') {
            formIsValid = false;
            error["city"] = "חובה לבחור עיר";
        }
        if (!formfields["buildingNum"]) {
            formIsValid = false;
            error["buildingNum"] = "חובה להכניס מספר בניין";
        }
        if (!formfields["floor"]) {
            formIsValid = false;
            error["floor"] = "חובה להכניס קומה";
        }
        if (typeof formfields["phone"] !== "undefined") {
            if (!formfields["phone"].match(/^[0-9]+$/)) {
                formIsValid = false;
                error["phone"] = "מספרים בלבד";
            }
            if (formfields["phone"].length < 9) {
                formIsValid = false;
                error["phone"] = "מספר טלפון לא חוקי";
            }
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
            register()
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <form>
                        <h1>פרטים אישיים</h1>
                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-3 col-form-label" >שם משתמש</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="name" ref={reftoName} placeholder="שם" onChange={(e) => handleChange("name", e)} />
                                <span style={{ color: "red", fontSize: "small" }}>{errors["name"]}</span>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-sm-3 col-form-label">מייל</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="staticEmail" placeholder="מייל" onChange={(e) => handleChange("email", e)} ref={reftoEmail} />
                                <span style={{ color: "red", fontSize: "small" }}>{errors["email"]}</span>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="password" className="col-sm-3 col-form-label">סיסמא</label>
                            <div className="col-sm-9">
                                <input type="password" className="form-control" id="password" placeholder="סיסמא" onChange={(e) => handleChange("password", e)} ref={reftoPassword} />
                                <span style={{ color: "red", fontSize: "small" }}>{errors["password"]}</span>
                                <br></br>
                                <input type="checkbox" onClick={myFunction} /> הצג סיסמא
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-3 col-form-label" >עיר</label>
                            <div className="col-sm-9">
                                <select className="form-select" ref={reftoCity} onChange={(e) => handleChange("city", e)} aria-label="Default select example">
                                    <option defaultValue value="noCity">בחר עיר</option>
                                    {cities.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                                <span style={{ color: "red", fontSize: "small" }}>{errors["city"]}</span>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-3 col-form-label" >רחוב</label>
                            <div className="col-sm-9">
                                <select className="form-select" placeholder="בחר רחוב" ref={reftoStreet} onChange={(e) => handleChange("street", e)} aria-label="Default select example">
                                    <option defaultValue value="noStreet">בחר רחוב</option>
                                    {streets.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                                <span style={{ color: "red", fontSize: "small" }}>{errors["street"]}</span>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="buildingNum" className="col-sm-3 col-form-label" >מספר בניין</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="buildingNum" ref={refToBuildingNum} placeholder="מס' בניין" onChange={(e) => handleChange("buildingNum", e)} />
                                <span style={{ color: "red", fontSize: "small" }}>{errors["buildingNum"]}</span>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="floor" className="col-sm-3 col-form-label" >קומה</label>
                            <div className="col-sm-9">
                                <input type="number" className="form-control" id="floor" ref={refToFloor} placeholder="קומה" onChange={(e) => handleChange("floor", e)} />
                                <span style={{ color: "red", fontSize: "small" }}>{errors["floor"]}</span>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="phone" className="col-sm-3 col-form-label" >מספר טלפון</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="phone" minLength="9" maxLength="11" ref={refToPhone} placeholder="מס' טלפון" onChange={(e) => handleChange("phone", e)} />
                                <span style={{ color: "red", fontSize: "small" }}>{errors["phone"]}</span>
                            </div>
                        </div>

                    </form>
                    <button className="btn btn-primary" onClick={contactSubmit}>הרשמה</button>

                </div>

            </div >

        </div >



    )
})