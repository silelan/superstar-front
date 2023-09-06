import React, { useEffect, useRef } from 'react';
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Editor } from '@tinymce/tinymce-react';
import { fileData } from '../component/demoData/filedata';

export const TabComponent = () => {
    const [file, setFile] = useState()
    const [uploadedFile, setUploadedFile] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);
    const [filename, setFilename] = useState("Choose file");
    const [fileDescription, setFileDescription] = useState("");
    const [fileType, setFileType] = useState("Default");
    const [fileContent, setFileContent] = useState("");
    const [selectedText, setSelectedText] = useState("");
    const [temp, setTemp] = useState(0);
    
    const [fileDetail, setFileDetail] = useState({
        title: '',
        desc: ''
    });
    const [selectFile, setSelectFile] = useState();

    const navigate = useNavigate();

    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };

    const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log('The file =', event.target.files)
        if (selectedFile) {
            setFilename(selectedFile.name);
            setFileDescription(selectedFile.type);
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
        // navigate('/chat')
    }

    // const fileDetailChange = (e) => {
    //     e.preventDefault();
    //     console.log("sdkhkjds", e.target.value)
    //     setFileDetail({
    //         ...fileDetail,
    //         [e.target.name]: e.target.value,
    //     })
    // }
    const UploadDoc = () => {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    {/* Dropdown to select file type start here*/}
                    {/* <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={selectFileType} value={fileType}>
                        <option>Select file type to upload</option>
                        <option value="pdf">PDF</option>
                        <option value="docx">DOCX</option>
                        <option value="sql">SQL</option>
                        <option value="vdb">VDB</option>
                    </select> */}
                    {/* Dropdown to select file type end here*/}
                    <div className="form-group">
                        <label className="form-label" as="customFileLabel">{fileType.toUpperCase()} File Upload</label>
                        <div className="form-control-wrap">
                            <div className="form-file">
                                <input
                                    type="file"
                                    name="file"
                                    className="form-file-input"
                                    id="customFile"
                                    onChange={handleChange}
                                    // accept={`.${fileType}`}
                                    accept=".docx, .pdf"
                                />
                                <label className="form-file-label" htmlFor="customFile">{filename}</label>
                            </div>
                        </div>
                    </div>
                    {/* <button className="btn btn-dim btn-success">Upload </button> */}
                        <div className="mb-3">
                            <label htmlFor="TextInput" className="form-label">File Title</label>
                            <input
                                type="text"
                                // id="disabledTextInput"
                                name='title'
                                className="form-control form-control-lg"
                                placeholder={'Enter Title'}
                                onChange={(e)=>setFileDetail({...fileDetail,[e.target.name]: e.target.value})}
                                value={fileDetail.title} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="TextInput" className="form-label">File Description</label>
                            <input
                                type="text"
                                // id="disabledTextInput"
                                name='desc'
                                className="form-control form-control-lg"
                                placeholder={'Enter Description'}
                                onChange={(e)=>setFileDetail({...fileDetail,[e.target.name]: e.target.value})}
                                value={fileDetail.desc} />
                        </div>
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

    const selectFileChange = (event) => {
        setSelectFile(event.target.value)
        fileData.filter((item) => {
            if(item.id === event.target.value){
                setFileContent(item.message)
            }
        });

    }

    const selectText = () =>{
        setSelectedText(window.getSelection())
        setTemp(temp+1)
    }
    const reviewDocument = () => {
        return (
            <>
                <div className='container mb-2'>
                    <div className="row h-75">
                        <div className="col-8 border">
                            <div className="mb-3 mt-2">
                                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={selectFileChange} value={selectFile}>
                                    <option>Select file</option>
                                    <option value="0">file.pdf</option>
                                    <option value="1">filetwo.docx</option>
                                    <option value="2">filethree.sql</option>
                                    <option value="3">filefour.vdb</option>
                                </select>
                            </div>
                            {/* <div className="mb-3 mt-2">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">File Content</label>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue={`<p>${fileContent}</p>`}
                                //     initialValue={`<iframe
                                //     src="https://drive.google.com/viewerng/viewer?embedded=true&url=http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&scrollbar=0"
                                //     frameBorder="0"
                                //     scrolling="auto"
                                //     height="100%"
                                //     width="100%"
                                // ></iframe>`}
                                    
                                    init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                                            'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                                            'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                        ],
                                        toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                                            'alignleft aligncenter alignright alignjustify | ' +
                                            'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                                <button onClick={log}>Log editor content</button>
                            </div> */}
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">File Content</label>
                                <textarea 
                                    className="form-control mb-1 " 
                                    id="exampleFormControlTextarea1" 
                                    rows="3" 
                                    defaultValue={fileContent} 
                                    onMouseUp={selectText}></textarea>
                        </div>
                        <div className="col-4 border">
                            <div className="mb-3 mt-2">
                                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Get Suggestion</label> */}
                                <textarea 
                                    className="form-control mb-1 " 
                                    id="exampleFormControlTextarea1" 
                                    rows="3"
                                    defaultValue={selectedText}></textarea>
                                <div className="container d-flex justify-content-around">
                                    <button type='button' className="btn btn-danger m-1">Rewrite</button>
                                    <button type='button' className="btn btn-danger m-1">Summerize</button>
                                    <button type='button' className="btn btn-danger m-1">Insert</button>
                                </div>
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Insert new content</label>
                                <textarea className="form-control mb-1" id="exampleFormControlTextarea1" rows="3"></textarea>
                                <div className="container d-flex justify-content-end">
                                    <button type='button' className="btn btn-danger ">Save</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    var dict = {
        'Upload Document': UploadDoc,
        // 'Provide Title': UploadDoc,
        'Review Document': reviewDocument,
        'Download Document': UploadDoc
    }
    // select file type function
    const selectFileType = (event) => {
        setFileType(event.target.value)
    }

    useEffect(()=>{
        setSelectedText(window.getSelection())
    },[temp])
    return (

        <div className="nk-content mt-0 ml-0">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="content-page ml-3">
                            <div className="nk-block">
                                <div className="card card-bordered">
                                    <div className="card-inner card-inner-xl">
                                        <ul className="nav nav-tabs d-flex justify-content-evenly">
                                            {Object.entries(dict).map(([key, value], index) => (
                                                <li className="nav-item" key={key + "-" + index}>
                                                    <a
                                                        className={`nav-link ${index + 1 === activeTab ? 'active' : ''} ${index + 1 > activeTab ? 'disabled' : ''}`}
                                                        data-bs-toggle="tab"
                                                        href={`#tabItem${index + 1}`}> {key} </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="tab-content h-100 mx-auto">

                                            {Object.entries(dict).map(([key, Component], index) => (
                                                <div
                                                    className={`tab-pane ${index + 1 === activeTab ? 'active' : ''}`}
                                                    id={`tabItem${index + 1}`}
                                                    key={index}
                                                >
                                                    <Component />
                                                    <div className="container d-flex justify-content-end">
                                                        {/* {index !== 3 && <button className="btn btn-danger" onClick={handleNextClick}>Next</button>} */}
                                                        {<button className="btn btn-danger" onClick={handleNextClick}>Next</button>}
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

