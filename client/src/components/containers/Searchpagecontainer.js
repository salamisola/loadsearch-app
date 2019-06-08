import React from "react";
/* import "./container.css"; */

function Searchpagecontainer(props) {
    return (
        <div className="container">
            <form className="well form-horizontal" action=" " method="post" id="contact_form">
                <fieldset>
                    <legend>
                        <center>
                            <h2><b>Search Parameters</b></h2>
                        </center>
                    </legend>
                    <br />
                    <div className="form-group">
                        <label className="col-md-4 control-label">Load Type</label>
                        <div className="col-md-4 selectContainer">
                            <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                <select value={props.equipment} onChange={props.handleInputChange} name="equipment" className="form-control selectpicker">
                                    <option value="">Select your Load Type</option>
                                    <option value="container">Container</option>
                                    <option value="container_refrigerated">Container Refrigerated</option>
                                    <option value="container_double">Container Double</option>
                                    <option value="dry_van">Dry Van</option>
                                    <option value="dump_trailer">Dump Trailer</option>
                                    <option value="flatbed">Flatbed</option>
                                    <option value="lowboy">Lowboy</option>
                                    <option value="reefer">Reefer</option>
                                    <option value="tanker">Tanker</option>
                                    <option truck and trailer>Truck and Trailer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Distance</label>
                        <div className="col-md-4 selectContainer">
                            <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                <select value={props.distance} onChange={props.handleInputChange} name="distance" className="form-control selectpicker">
                                    <option value="">Select Distance between Source and Destination</option>
                                    <option value="1">0 to 200mi</option>
                                    <option value="2">201 to 400mi</option>
                                    <option value="3">401 to 600mi</option>
                                    <option value="4">601 and Longer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Rate Per Mile</label>
                        <div className="col-md-4 selectContainer">
                            <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                <select value={props.rate} onChange={props.handleInputChange} name="rate" className="form-control selectpicker">
                                    <option value="">Select Rate Per Mile</option>
                                    <option value="low">0 to $1</option>
                                    <option value="medium">$1.1 to $3</option>
                                    <option value="high">$3.1 and Higher</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="alert alert-success" role="alert" id="success_message">Success <i
                        className="glyphicon glyphicon-thumbs-up"></i> Success!.</div>
                    <div className="form-group">
                        <label className="col-md-4 control-label"></label>
                        <div className="col-md-4"><br />
                            {/*  //----------------- */}
                            <button onClick={props.handleFormSubmit} type="submit" className="btn btn-success">SUBMIT <span
                                className="glyphicon glyphicon-send"></span></button>
                        </div>
                    </div>
                </fieldset>
            </form>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </div >
    )
}

export default Searchpagecontainer;

