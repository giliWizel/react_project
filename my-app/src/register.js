import React, { createRef } from "react";
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
    const reftoGender = createRef();
    const reftoCity = createRef();
    const reftoPassword = createRef();
    const refToPhone = createRef();
    function register() {

        debugger;
        const user = {
            "name": reftoName.current.value,
            "password": reftoPassword.current.value,
            "email": reftoEmail.current.value,
            "city": reftoCity.current.value,
            "gender": reftoGender.current.value,
            "phone": refToPhone.current.value
        }
        //לשלוח לשרת עם היוזר
        addNewUser(user);
        console.log(user)

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
                            <label htmlFor="name" className="col-sm-2 col-form-label" >שם</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="name" ref={reftoName} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">מייל</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="staticEmail" ref={reftoEmail} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">סיסמא</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" ref={reftoPassword} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-2 col-form-label" >עיר</label>
                            <div className="col-sm-10">
                                <select className="form-select" ref={reftoCity} aria-label="Default select example">
                                    <option defaultValue>בחר עיר</option>
                                    {cities.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-2 col-form-label" >רחוב</label>
                            <div className="col-sm-10">
                                <select className="form-select" placeholder="בחר רחוב" ref={reftoCity} aria-label="Default select example">
                                    {streets.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="phone" className="col-sm-2 col-form-label" >מספר בניין</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="phone" ref={refToPhone} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="phone" className="col-sm-2 col-form-label" >קומה</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" id="phone" ref={refToPhone} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="phone" className="col-sm-2 col-form-label" >מספר טלפון</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="phone" ref={refToPhone} />
                            </div>
                        </div>

                    </form>
                    <button className="btn btn-primary" onClick={register}>הרשמה</button>

                </div>

            </div >

        </div >



    )
})