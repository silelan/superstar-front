import React from 'react'
import { useState } from 'react'
import axios from 'axios';



export const TabComponent = () => {
    const [file, setFile] = useState()
    const [uploadedFile, setUploadedFile] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);
    const [filename, setFilename] = useState("Choose file");

    const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log(`The file = ${selectedFile.name}`)
        if (selectedFile) {
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
                        <p>{error.message}</p>
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
    var dict = {
        'Upload Document': UploadDoc,
        'Provide Title': UploadDoc,
        'Review Document': UploadDoc,
        'Submit': UploadDoc
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
                                                        className={`nav-link ${index + 1 === activeTab ? 'active' : ''} ${index + 1 > activeTab ? 'disabled' : ''}`}
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
                                                    <div className="container d-flex justify-content-end">
                                                        {index !== 3 && <button className="btn btn-danger" onClick={handleNextClick}>Next</button>}
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

