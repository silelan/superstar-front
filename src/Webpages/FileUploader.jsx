import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { ChatPage } from '../components/chatPage';



export const TabComponent = ({showTitle, heading}) => {
    const [file, setFile] = useState()
    const [uploadedFile, setUploadedFile] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);
    const [filename, setFilename] = useState("Choose file");
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        // Reset your variables or state here when the the heading value changes
        setActiveTab(1);
      }, [heading]);
    
    //Function to handle title change
    const handleTitleChange = (event) => {
        // setTitle(event?.target?.value)
    } 

    //Function to handle description change
    const handleDescriptionChange = (event) => {
        console.log("title ", event?.target?.value);
        // setDescription(event?.target?.value)
        
    } 

    const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log(`The file = ${selectedFile.name}`)
        const fileExtension = selectedFile.name.split('.').pop().toLowerCase(); 
        if (selectedFile) {
            if (heading === "chat" && fileExtension !== "pdf") {
                setError("Invalid File Format");
            }
            if ((heading === "sql" || heading === "vector") && fileExtension !== "sql") {
                setError("Invalid File Format");
            }
            setFilename(selectedFile.name);
            setFile(selectedFile);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = '/upload';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {},
        };
        axios.post(url, formData, config)
            .then((response) => {
                // console.log(response.data);
                setUploadedFile(response.data.file);
                setSuccess(true)
            })
            .catch((error) => {
                // console.error("Error uploading file: ", error);
                setError(error);
            });
    }


    const [activeTab, setActiveTab] = useState(1);


    const handleNextClick = () => {
        // Increment the activeTab state to show the next tab
        setActiveTab(prevTab => prevTab + 1);
    }
    
    const handlePrevClick = () => {
        // Increment the activeTab state to show the next tab
        setActiveTab(prevTab => prevTab - 1);
    }

    const UploadDoc = () => {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" as="customFileLabel">Default File Upload</label>
                        <div className="form-control-wrap">
                            <div className="form-file">
                                <input type="file" name="file" className="form-file-input" id="customFile" onChange={handleChange} />
                                <label className="form-file-label" htmlFor="customFile">{filename}</label>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-dim btn-success">Upload </button>
                </form>
                {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />}
                {error && <div className="alert alert-pro alert-danger mt-3">
                    <div className="alert-text">
                        <h6>Your file could not be uploaded</h6>
                        <p>{error.message || error}</p>
                    </div>
                </div>}
                {success && <div className="alert alert-pro alert-success mt-3">
                    <div className="alert-text">
                        <h6>Your file has been uploaded successfully</h6>
                        <p>Click on the <em>Next</em> button to add title and description</p>
                    </div>
                </div>}
                
            </>)

    }
    // Have text field and text description to display under the Provide Title tab
    const UploadText = () => {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="form-title">
                    <div className="form-group">
                        <label className="form-label" htmlFor="text">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="text"
                            name="text"
                            placeholder="Title"
                            value={title}
                            onChange={handleTitleChange}
                        /> 
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="description">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows="4"
                            placeholder="Description"
                            value={description}
                            onChange={handleDescriptionChange}
                        ></textarea>
                    </div>
                    </div>
                </form>
            </>)

    }

    const UploadChatPage = () => {
        return (
            <>
                <ChatPage></ChatPage>
            </>)

    }
    console.log("active tab ", activeTab);
    var dict = showTitle ? {
        'Upload Document': UploadDoc,
        'Provide Title': UploadText,
        'Chat Page': UploadChatPage,
    } : {
        'Upload Document': UploadDoc,
        'Chat Page': UploadChatPage 
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
                                                        className={`nav-link ${index + 1 === activeTab ? 'active' : ''} ${index + 1 > activeTab ? 'disabled' : ''} clickable`}
                                                        data-bs-toggle="tab"
                                                        href={`#tabItem${index + 1}`}> {key} </a>
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
                                                    <div className="container d-flex">
                                                    <div className="btn container d-flex justify-content-start">
                                                        {index !== 0 && <button className="btn btn-danger" onClick={handlePrevClick}>Previous</button>}
                                                    </div>
                                                    <div className="btn container d-flex justify-content-end">
                                                        {index !== Object.entries(dict).length-1 && <button className="btn btn-danger" onClick={handleNextClick}>Next</button>}
                                                    </div>
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

