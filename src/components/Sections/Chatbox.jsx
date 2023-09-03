import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Chatbox() {
    const [showCurrectModalChat ,setshowCurrectModalChat] = useState({
        id: 1,
        title:"m1",
        modalName: "Modale 1",
        avatar:"./images/avatar/b-sm.jpg",
        modaldescription: "Recently sended messages",
        isRead :true
    })
    const [sidebarExpand ,setSidebarExpand] = useState(false)    
    const [userMessages ,setUserMessages] = useState("")    
    const [clentMessages ,setClentMessages] = useState("")    
    let [allmessage ,setallmessage]  =useState([])

    const chatModals = [
        {
            id: 1,
            modalName: "Modale 1",
            title:"m1",
            avatar:"./images/avatar/a-sm.jpg",
            modaldescription: "Recently sended messages 2",
            isRead :true,
            chat_mesaage: []
        },
        {
            id: 2,
            modalName: "Modale 2",
            modaldescription: "Modale 2 Recently sended messages",
            title:"m2",
            avatar:"./images/avatar/c-sm.jpg",
            isRead :false,
            chat_mesaage: []


        },
        {
            id: 3,
            modalName: "Modale 3",
            modaldescription: "Modale 3 Recently sended messages",
            title:"m3",
            avatar:"./images/avatar/b-sm.jpg",
            isRead :false,
            chat_mesaage: []

        }
    ]
    const handleModalChat =(id)=>{
        // fetch modale data from api using modale id 
        chatModals.filter((item)=>{
            return item.id == id
        })  
        setshowCurrectModalChat(chatModals.filter((item)=>{
            return item.id == id
        })[0])
    }

    const handleMessage = (e)=>{
        setUserMessages(e.target.value)
    }
    const sendMessageHandle = async (id)=>{
        allmessage.push({userId : id , messageSended:userMessages})
        const config = {
            headers: {},
        };
        // await axios.post("/send-message", userMessages, config)
        //     .then((response) => {
        //         console.log(response);
                
        //     })
        //     .catch((error) => {
        //         console.error("Error uploading file: ", error);
        //     });
        //after res
        setallmessage([...allmessage])
        setUserMessages("")
    }

  return (
    <div className="container-fluid">
        <div className="nk-content-inner">
            <div className="nk-content-body">
                <div className="nk-chat" style={{minHeight:"400px"}}>
                    <div className={` ${sidebarExpand ? "isExpandClass" : "" } nk-chat-aside`}>
                        <div className="nk-chat-aside-head">
                            {!sidebarExpand && <div className="nk-chat-aside-user">
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle dropdown-indicator" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="user-ava">
                                            {/* <img src="./images/avatar/b-sm.jpg" alt=""/> */}
                                            <svg  viewBox="0 0 24 24" width="24" height="24"><path d="M10 3H14C18.4183 3 22 6.58172 22 11C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3Z" fill="#FB2707"></path></svg>
                                        </div>
                                        <div className="title">Chat Box</div>
                                    </a>
                                    <div className="dropdown-menu" >
                                        <ul className="link-list-opt no-bdr">
                                            <li><a href="#"><span>Contacts</span></a></li>
                                            <li><a href="#"><span>Channels</span></a></li>
                                            <li className="divider"></li>
                                            <li><a href="#"><span>Help</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>}
                            <ul className="nk-chat-aside-tools g-2">
                                <li>
                                    <div className="dropdown">
                                        <span className='cursor-pointer' onClick={()=>{setSidebarExpand(!sidebarExpand)}}>
                                        {
                                        sidebarExpand ?
                                        <svg  viewBox="0 0 24 24" width="24" height="24"><path d="M21 17.9996V19.9996H3V17.9996H21ZM17.0503 3.5498L22 8.49955L17.0503 13.4493V3.5498ZM12 10.9996V12.9996H3V10.9996H12ZM12 3.99955V5.99955H3V3.99955H12Z" fill="rgba(173,184,194,1)"></path></svg>:
                                        <svg  viewBox="0 0 24 24" width="24" height="24"><path d="M21 17.9996V19.9996H3V17.9996H21ZM6.94975 3.5498V13.4493L2 8.49955L6.94975 3.5498ZM21 10.9996V12.9996H12V10.9996H21ZM21 3.99955V5.99955H12V3.99955H21Z" fill="rgba(173,184,194,1)"></path></svg>
                                        }
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="nk-chat-aside-body" data-simplebar>
                            <div className="nk-chat-aside-search">
                               
                            </div>
                            <div className="nk-chat-list">
                                <h6 className="title overline-title-alt">{sidebarExpand ? " " : "Modals"}</h6>
                                <ul className="chat-list">
                                    {
                                        chatModals.map((item ,index)=>{
                                            return(
                                            <li className={`chat-item ${item?.isRead ? "is-unread" :""}`} key={index}>
                                                <a className={`${showCurrectModalChat?.id == item.id ? "active-chat":""} chat-link chat-open ` } 
                                                 onClick={()=>{
                                                     handleModalChat(item.id)
                                                     if(allmessage[0]?.id != item.id ){
                                                         setallmessage([])
                                                     }
                                                    }
                                                 }
                                                  >
                                                    <div className="chat-media user-avatar">
                                                        {/* <span>{item?.title}</span> */}
                                                        <img src={item?.avatar} alt=""></img>
                                                        <span className="status dot dot-lg dot-success"></span>
                                                    </div>
                                                    <div className="chat-info">
                                                        <div className="chat-from">
                                                            <div className="name">{item.modalName}</div>
                                                            {/* <span className="time">4:49 AM</span> */}
                                                        </div>
                                                        <div className="chat-context">
                                                            <div className="text">
                                                                {/* <p>{item?.modaldescription}</p> */}
                                                            </div>
                                                            <div className="status unread">
                                                                <em className="icon ni ni-bullet-fill"></em>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                
                                            </li>
                                            )
                                        })
                                    }
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nk-chat-body ">
                        <div className="nk-chat-head">
                            <ul className="nk-chat-head-info">
                            
                                <li className="nk-chat-body-close">
                                    <a href="#" className="btn btn-icon btn-trigger nk-chat-hide ms-n1"><em className="icon ni ni-arrow-left"></em></a>
                                </li>
                                <li className="nk-chat-head-user">
                                    <div className="user-card">
                                        <div className="user-avatar bg-orange">
                                        <img src={showCurrectModalChat?.avatar} alt=""></img>
                                            {/* <span>{showCurrectModalChat?.title}</span> */}
                                        </div>
                                        <div className="user-info">
                                            <div className="lead-text">{showCurrectModalChat?.modalName}</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="nk-chat-head-tools">
                                <li className="d-none d-sm-block">
                                    <a className="btn btn-icon  text-primary">
                                    <svg  viewBox="0 0 24 24" width="24" height="24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM16.8201 17.0761C18.1628 15.8007 19 13.9981 19 12C19 8.13401 15.866 5 12 5C10.9391 5 9.9334 5.23599 9.03241 5.65834L10.0072 7.41292C10.6177 7.14729 11.2917 7 12 7C14.7614 7 17 9.23858 17 12H14L16.8201 17.0761ZM14.9676 18.3417L13.9928 16.5871C13.3823 16.8527 12.7083 17 12 17C9.23858 17 7 14.7614 7 12H10L7.17993 6.92387C5.83719 8.19929 5 10.0019 5 12C5 15.866 8.13401 19 12 19C13.0609 19 14.0666 18.764 14.9676 18.3417Z" fill="#FB7017"></path></svg> 
                                    </a>
                                </li>
                                <li className="d-none d-sm-block">
                                    <div className="dropdown">
                                        <a href="#" className="dropdown-toggle btn btn-icon btn-trigger text-primary" data-bs-toggle="dropdown"><em className="icon ni ni-setting-fill"></em></a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <ul className="link-list-opt no-bdr">
                                                <li><a className="dropdown-item" href="#"><em className="icon ni ni-archive"></em><span>Make as Archive</span></a></li>
                                                <li><a className="dropdown-item" href="#"><em className="icon ni ni-cross-c"></em><span>Remove Conversion</span></a></li>
                                                <li><a className="dropdown-item" href="#"><em className="icon ni ni-setting"></em><span>More Options</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="nk-chat-panel" data-simplebar>
                            <div className="chat is-you">
                                <div className="chat-avatar">
                                    <div className="user-avatar bg-orange">
                                        <img src={showCurrectModalChat?.avatar} alt=""></img>
                                        {/* <span>IH</span> */}
                                    </div>
                                </div>
                                <div className="chat-content">
                                    <div className="chat-bubbles">
                                        <div className="chat-bubble">
                                            <div className="chat-msg"> I found an issues when try to purchase the product. </div>
                                            <ul className="chat-msg-more">
                                                <li className="d-none d-sm-block"><a href="#" className="btn btn-icon btn-sm btn-trigger"><em className="icon ni ni-reply-fill"></em></a></li>
                                                <li>
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-icon btn-sm btn-trigger dropdown-toggle" data-bs-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                            <ul className="link-list-opt no-bdr">
                                                                <li className="d-sm-none"><a href="#"><em className="icon ni ni-reply-fill"></em> Reply</a></li>
                                                                <li><a href="#"><em className="icon ni ni-pen-alt-fill"></em> Edit</a></li>
                                                                <li><a href="#"><em className="icon ni ni-trash-fill"></em> Remove</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat is-me">
                                <div className="chat-content">
                                    {
                                     allmessage?.map((item ,index)=>{
                                            return (
                                            <div className="chat-bubbles" key={index}>
                                                <div className="chat-bubble">
                                                    <div className="chat-msg"> {item?.messageSended} </div>
                                                    <ul className="chat-msg-more">
                                                        <li className="d-none d-sm-block"><a href="#" className="btn btn-icon btn-sm btn-trigger"><em className="icon ni ni-reply-fill"></em></a></li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <a href="#" className="btn btn-icon btn-sm btn-trigger dropdown-toggle" data-bs-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                                                                <div className="dropdown-menu dropdown-menu-sm">
                                                                    <ul className="link-list-opt no-bdr">
                                                                        <li className="d-sm-none"><a href="#"><em className="icon ni ni-reply-fill"></em> Reply</a></li>
                                                                        <li><a href="#"><em className="icon ni ni-pen-alt-fill"></em> Edit</a></li>
                                                                        <li><a href="#"><em className="icon ni ni-trash-fill"></em> Remove</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                    
                                </div>
                            </div>
                            <div className="chat is-you">
                                <div className="chat-avatar">
                                    <div className="user-avatar bg-orange">
                                        <img src={showCurrectModalChat?.avatar} alt=""></img>
                                    </div>
                                </div>
                                <div className="chat-content">
                                    <div className="chat-bubbles">
                                        <div className="chat-bubble">
                                            <div className="chat-msg"> It’s perfect. Thanks for letting me know. </div>
                                            <ul className="chat-msg-more">
                                                <li className="d-none d-sm-block"><a href="#" className="btn btn-icon btn-sm btn-trigger"><em className="icon ni ni-reply-fill"></em></a></li>
                                                <li>
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-icon btn-sm btn-trigger dropdown-toggle" data-bs-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                            <ul className="link-list-opt no-bdr">
                                                                <li className="d-sm-none"><a href="#"><em className="icon ni ni-reply-fill"></em> Reply</a></li>
                                                                <li><a href="#"><em className="icon ni ni-pen-alt-fill"></em> Edit</a></li>
                                                                <li><a href="#"><em className="icon ni ni-trash-fill"></em> Remove</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nk-chat-editor">
                            <div className="nk-chat-editor-upload  ms-n1">
                                <a href="#" className="btn btn-sm btn-icon btn-trigger  toggle-opt" data-target="chat-upload">
                                    <svg viewBox="0 0 24 24" width="32" height="32"><path d="M18.5753 13.7114C19.0742 13.7114 19.4733 13.2873 19.4733 12.8134C19.4733 12.3145 19.0742 11.9155 18.5753 11.9155C18.0765 11.9155 17.6774 12.3145 17.6774 12.8134C17.6774 13.3123 18.0765 13.7114 18.5753 13.7114ZM14.1497 13.7114C14.6485 13.7114 15.0476 13.2873 15.0476 12.8134C15.0476 12.3145 14.6485 11.9155 14.1497 11.9155C13.6508 11.9155 13.2517 12.3145 13.2517 12.8134C13.2517 13.3123 13.6508 13.7114 14.1497 13.7114ZM20.717 18.7516C20.5942 18.8253 20.5205 18.9482 20.5451 19.1202C20.5451 19.1693 20.5451 19.2185 20.5696 19.2676C20.6679 19.6854 20.8643 20.349 20.8643 20.3736C20.8643 20.4473 20.8889 20.4964 20.8889 20.5456C20.8889 20.6685 20.7907 20.7668 20.6679 20.7668C20.6187 20.7668 20.5942 20.7422 20.5451 20.7176L19.0961 19.882C18.9978 19.8329 18.875 19.7837 18.7522 19.7837C18.6786 19.7837 18.6049 19.7837 18.5558 19.8083C17.8681 20.0049 17.1559 20.1032 16.3946 20.1032C12.7352 20.1032 9.78815 17.6456 9.78815 14.5983C9.78815 11.5509 12.7352 9.09329 16.3946 9.09329C20.0539 9.09329 23.001 11.5509 23.001 14.5983C23.001 16.2448 22.1168 17.7439 20.717 18.7516ZM16.6737 8.09757C16.581 8.09473 16.488 8.09329 16.3946 8.09329C12.2199 8.09329 8.78815 10.9536 8.78815 14.5983C8.78815 15.1519 8.86733 15.6874 9.01626 16.1975H8.92711C8.04096 16.1975 7.15481 16.0503 6.3425 15.8296C6.26866 15.805 6.19481 15.805 6.12097 15.805C5.97327 15.805 5.82558 15.8541 5.7025 15.9277L3.95482 16.9334C3.90559 16.958 3.85635 16.9825 3.80712 16.9825C3.65943 16.9825 3.53636 16.8599 3.53636 16.7127C3.53636 16.6391 3.56097 16.59 3.58559 16.5164C3.6102 16.4919 3.83174 15.6824 3.95482 15.1918C3.95482 15.1427 3.97943 15.0691 3.97943 15.0201C3.97943 14.8238 3.88097 14.6766 3.75789 14.5785C2.05944 13.3765 1.00098 11.5858 1.00098 9.59876C1.00098 5.94369 4.5702 3 8.95173 3C12.7157 3 15.8802 5.16856 16.6737 8.09757ZM11.5199 8.51604C12.0927 8.51604 12.5462 8.03871 12.5462 7.4898C12.5462 6.91701 12.0927 6.46356 11.5199 6.46356C10.9471 6.46356 10.4937 6.91701 10.4937 7.4898C10.4937 8.06258 10.9471 8.51604 11.5199 8.51604ZM6.26045 8.51604C6.83324 8.51604 7.28669 8.03871 7.28669 7.4898C7.28669 6.91701 6.83324 6.46356 6.26045 6.46356C5.68767 6.46356 5.23421 6.91701 5.23421 7.4898C5.23421 8.06258 5.68767 8.51604 6.26045 8.51604Z" fill="#FB7019"></path></svg>
                                </a>
                            </div>
                            <div className="nk-chat-editor-form">
                                <div className="form-control-wrap">
                                    <textarea className="form-control form-control-simple no-resize" rows="1" id="default-textarea" value={userMessages} 
                                    onChange={(e)=>handleMessage(e)} 
                                    onKeyPress={(e)=>{
                                        if(e.key == "Enter"){
                                            sendMessageHandle(showCurrectModalChat?.id) 
                                        }
                                    }}
                                    placeholder="Type your message..."></textarea>
                                </div>
                            </div>
                            <ul className="nk-chat-editor-tools g-2">
                                <li>
                                    <button disabled={userMessages == "" ? true : false} onClick={()=>{sendMessageHandle(showCurrectModalChat.id)}} className="btn btn-round btn-orange btn-icon"><em className="icon ni ni-send-alt"></em></button>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chatbox