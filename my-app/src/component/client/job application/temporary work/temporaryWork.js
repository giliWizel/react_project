import React from 'react'
export default function TemporaryWork(props) {


    return (

        <div className="container">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div id="loader4">
                            <span class="loader loader-1"></span>
                            <span class="loader loader-2"></span>
                            <span class="loader loader-3"></span>
                            <span class="loader loader-4"></span>
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <form>
                        <h1>עבודה זמנית</h1>
                    </form>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>


                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Example select</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>


                    <button className="btn btn-primary">Login</button>

                </div>

            </div >

        </div >
    )

}