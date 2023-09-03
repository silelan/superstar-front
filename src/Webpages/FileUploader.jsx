import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { focusOnFeild, hasValidationError, validationError } from '../helpers/Frontend';
import { toast } from 'react-toastify';
import Chatbox from '../components/Sections/Chatbox';
import Loading from '../components/Loading/Loading';



export const TabComponent = () => {
    
    const [shownextBtn ,setshownextBtn] =useState(false)
    const [activeTab, setActiveTab] = useState(1);
    


    const handleNextClick = () => {
        // Increment the activeTab state to show the next tab
        setActiveTab(prevTab => prevTab + 1);
    }
    const UploadDoc = () => {
        const [post , setPost] = useState({title:"" ,description:""})
        const [submitting,setIsSubmitting] = useState(false);
        const [errors,setErrors] = useState([]);
        const [uploadedFile, setUploadedFile] = useState();
        const [file, setFile] = useState()
        const [errorMessage, setErrorMessage] = useState();
        const [success, setSuccess] = useState(false);
        const [filename, setFilename] = useState("Choose file");
        const [documentType , setdocumentType] = useState("application/pdf")
        const fileType = [
            {type : "application/pdf" ,title :"PDF"},
            {type : "application/docx" ,title :"DOCX"},
            {type : "application/sql" ,title :"SQL"},
            {type : "application/vdb" ,title :"VDB"},
             ]
        const onChange =(e)=>{
            const {name ,value} = e.target
            if(e.target.type == "file"){
                const selectedFile = e.target.files[0];
                if(selectedFile.type != documentType){setErrorMessage("Please upload selected document  type file ")}else{setErrorMessage()}
                if (selectedFile) {
                    setFilename(selectedFile.name);
                    setFile(selectedFile);
                }
            }
            setPost((prevState) => ({...prevState,[name]: value}));
        }
        const validate = () => {
            const newError = {};
            let positionFocus = "";
            var regex=/^[0-9]+$/
            if(!post.title || !post.title.trim()){
                newError["title"] = "Required";
                positionFocus = positionFocus || "title";
            }
            if(regex.test(post.title)){
                newError["title"] = "Title should be start with alphabets";
                positionFocus = positionFocus || "title";
                console.log(regex.test(post.title));
            }
            
            if(!post.description || !post.description.trim()){
                newError["description"] = "Required";
                positionFocus = positionFocus || "description";
            } else  if(regex.test(post.description)){
                newError["description"] = "Description should be start with alphabets";
                positionFocus = positionFocus || "description";
                console.log(regex.test(post.title));
            }
           
            

            setErrors(newError);
            if(positionFocus){
                focusOnFeild(positionFocus);
                return false;
            }
            return true;
        }
          const onSubmit = (e) => {
            
            e.preventDefault();
            if(submitting){
                return;
            }
            if(!validate()){
                return;
            }
            handleSubmitdoc(e);
        }
        const handleSubmitdoc = (event) => {
            setIsSubmitting(true)
            event.preventDefault();
            console.log(submitting , "<<<<<<<debug1");

            setTimeout(() => {
                setIsSubmitting(false)
            }, 8000);
            const url = '/add-details';
            setshownextBtn(true) // after api res status get success
            const formData = new FormData();
            formData.append('file', file);
            formData.append('fileName', file?.name);
            formData.append('title', post?.title);
            formData.append('description', post?.description);
            const config = {
                headers: {},
            };
            //after res get success
           
            axios.post(url, formData, config)
                .then((response) => {
                    console.log(response.data);
                    if(response.status == 200){
                        toast.success("Document details  saved successfully")
                    }
                })
                .catch((error) => {
                    console.error("Error uploading file: ", error);
                    toast.error("Document details not saved !")
                    // setIsSubmitting(false)
                });
        }
        return (
            <>
                <form className='position-relative' onSubmit={onSubmit} >
                {submitting&&<Loading/>}
                <div className="alert alert-pro  my-3">
                    <div className="form-group">
                        <div className="form-control-wrap">
                            <div className="form-text">
                                <label className="form-text-label" id="">Document Title</label>
                                <input type="text" placeholder='Title' name="title" htmlFor="custominput" value={post?.title} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors,"title") ?{border:"1px solid red"}:{}} />
                                {hasValidationError(errors,"title") ? (<span className="has-cust-error">{validationError(errors,"title")}</span>) : null}
                            </div>
                        </div>
                        <div className="form-control-wrap">
                            <div className="form-text">
                                <label className="form-text-label" >Document Description</label>
                                <textarea type="text" placeholder='Description' name="description" value={post?.description} htmlFor="custominput" className="custom-textarea form-text-input" id="" onChange={onChange}  style={hasValidationError(errors,"description") ?{border:"1px solid red"}:{}} />
                                {hasValidationError(errors,"description") ? (<span className="has-cust-error">{validationError(errors,"description")}</span>) : null}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" as="customFileLabel">Select File Type</label>
                        <div className="form-control-wrap">
                            <div className="position-relative">
                                <select className="custom-select w-full cursor-pointer" value={documentType} onChange={(e)=>  {setdocumentType(e.target.value)}}>
                                    <option  value={""}>Choose File Type</option>
                                    {
                                        fileType.map((item ,index)=>{
                                            return(
                                                <option key={index} value={item.type}>{item.title}</option>
                                            )
                                        })
                                    }
                                </select>
                                <span className='custom-down-arrow h-full position-absolute'><svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 16L6 10H18L12 16Z" fill="rgba(173,184,194,1)"></path></svg></span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" as="customFileLabel"> {documentType == "application/pdf" ? "PDF" :documentType == "application/docx" ? "DOCX" : "Default" } {" "} File Upload</label>
                        <div className="form-control-wrap">
                            <div className="form-file">
                                <input type="file" name="file" className="form-file-input" id="customFile" onChange={onChange} />
                                <label className="form-file-label" htmlFor="customFile">{filename}</label>
                                 {errorMessage && <p className='has-cust-error'>{errorMessage}</p>}
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-dim btn-orangelight my-3" type='submit'> { submitting ? "loading..." : "Save"} </button>
                </div>    
                </form>
                {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />}
                {success && <div className="alert alert-pro alert-success mt-3">
                    <div className="alert-text">
                        <h6>Your file has been uploaded successfully</h6>
                        <p>Click on the <em>Next</em> button to add title and description</p>
                    </div>
                </div>}
            </>)

    }
    var dict = {
        'Upload Document': UploadDoc,
        'Chat': Chatbox,
        // 'Review Document': UploadDoc,
        // 'Submit': UploadDoc
    }

    return (

        <div className="nk-content ">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="content-page wide-md ml-3">
                            <div className="nk-block">
                                <div className="card card-bordered">
                                    <div className="card-inner card-inner-xl">
                                        <ul className="nav nav-tabs">
                                            {Object.entries(dict).map(([key, value], index) => (
                                                <li className="nav-item" key={key + "-" + index}>
                                                    <a
                                                        href={`/#tabItem${index + 1}`} 
                                                        className={`nav-link nav-link-set ${index + 1 === activeTab ? 'active' : ''} ${index + 1 < activeTab ? 'disabled' : ''}`}
                                                        data-bs-toggle="tab">
                                                        { key != "Chat"?<svg viewBox="0 0 24 24" width="18" height="18"><path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9V15H10V9H5L12 2L19 9H14Z" ></path></svg>
                                                        :<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z" ></path></svg>}
                                                        {key}
                                                         </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="tab-content">
                                            {Object.entries(dict).map(([key, Component], index) => (
                                                <div
                                                    className={`tab-pane ${index + 1 === activeTab ? 'active' : ''}`}
                                                    id={`tabItem${index + 1}`}
                                                    key={index}
                                                >
                                                    <Component />
                                                    <div className="container d-flex justify-content-end">
                                                        {/* {index !== 3 && <button className="btn btn-danger" onClick={handleNextClick}>Next</button>} */}
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

