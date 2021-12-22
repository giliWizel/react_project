import React, { useState, createRef } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Feedback(props) {
    const [value, setValue] = useState("");

    function sendEmail() {
        debugger;
        //שליחה לשרת את VALUE
        console.log("myEmmail" + value);
    }
    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
            ["link", "image", "video"],
            ["clean"],
        ]
    }
    return (
        <div className="container">
            <br /><br />
            <div className="row">
                <div className="col"><h1>שליחת מייל למערכת</h1></div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-3"> </div>
                <div className="col-6">
                    <ReactQuill
                        modules={modules} theme="snow" onChange={setValue} placeholder="Content goes here..." />
                    <button className="btn btn-primary" onClick={sendEmail}>שליחה</button>
                </div>
            </div >
        </div >
    )
}