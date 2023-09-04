import { chat } from "../demoData/chat"

export function Chat() {
    return (
        <>
            
            <div class="nk-chat-body profile-shown">
                <div class="nk-chat-head">
                    <ul class="nk-chat-head-info">
                        <li class="nk-chat-body-close">
                            <a href="#" class="btn btn-icon btn-trigger nk-chat-hide ms-n1"><em class="icon ni ni-arrow-left"></em></a>
                        </li>
                        <li class="nk-chat-head-user">
                            <div class="user-card">
                                <div class="user-avatar bg-purple">
                                    <span>IH</span>
                                </div>
                                <div class="user-info">
                                    <div class="lead-text">Iliash Hossain</div>
                                    <div class="sub-text"><span class="d-none d-sm-inline me-1">Active </span> 35m ago</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="nk-chat-head-tools">
                        <li><a href="#" class="btn btn-icon btn-trigger text-primary"><em class="icon ni ni-call-fill"></em></a></li>
                        <li><a href="#" class="btn btn-icon btn-trigger text-primary"><em class="icon ni ni-video-fill"></em></a></li>
                        <li class="d-none d-sm-block">
                            <div class="dropdown">
                                <a href="#" class="dropdown-toggle btn btn-icon btn-trigger text-primary" data-bs-toggle="dropdown"><em class="icon ni ni-setting-fill"></em></a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                        <li><a class="dropdown-item" href="#"><em class="icon ni ni-archive"></em><span>Make as Archive</span></a></li>
                                        <li><a class="dropdown-item" href="#"><em class="icon ni ni-cross-c"></em><span>Remove Conversion</span></a></li>
                                        <li><a class="dropdown-item" href="#"><em class="icon ni ni-setting"></em><span>More Options</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="me-n1 me-md-n2"><a href="#" class="btn btn-icon btn-trigger text-primary chat-profile-toggle"><em class="icon ni ni-alert-circle-fill"></em></a></li>
                    </ul>
                    <div class="nk-chat-head-search">
                        <div class="form-group">
                            <div class="form-control-wrap">
                                <div class="form-icon form-icon-left">
                                    <em class="icon ni ni-search"></em>
                                </div>
                                <input type="text" class="form-control form-round" id="chat-search" placeholder="Search in Conversation" />
                            </div>
                        </div>
                    </div>
                </div>
                {chat.map((item,i)=>(<div class="nk-chat-panel" data-simplebar>
                    <div class="chat is-you">
                        <div class="chat-avatar">
                            <div class="user-avatar bg-purple">
                                <span>IH</span>
                            </div>
                        </div>
                        <div class="chat-content">
                        {console.log("item>>>",item)}
                            <div class="chat-bubbles">
                                <div class="chat-bubble">
                                    <div class="chat-msg"> Hello! </div>
                                    <ul class="chat-msg-more">
                                        <li class="d-none d-sm-block"><a href="#" class="btn btn-icon btn-sm btn-trigger"><em class="icon ni ni-reply-fill"></em></a></li>
                                        <li>
                                            <div class="dropdown">
                                                <a href="#" class="btn btn-icon btn-sm btn-trigger dropdown-toggle" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                    <ul class="link-list-opt no-bdr">
                                                        <li class="d-sm-none"><a href="#"><em class="icon ni ni-reply-fill"></em> Reply</a></li>
                                                        <li><a href="#"><em class="icon ni ni-pen-alt-fill"></em> Edit</a></li>
                                                        <li><a href="#"><em class="icon ni ni-trash-fill"></em> Remove</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="chat-bubble">
                                    <div class="chat-msg"> I found an issues when try to purchase the product. </div>
                                    <ul class="chat-msg-more">
                                        <li class="d-none d-sm-block"><a href="#" class="btn btn-icon btn-sm btn-trigger"><em class="icon ni ni-reply-fill"></em></a></li>
                                        <li>
                                            <div class="dropdown">
                                                <a href="#" class="btn btn-icon btn-sm btn-trigger dropdown-toggle" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                    <ul class="link-list-opt no-bdr">
                                                        <li class="d-sm-none"><a href="#"><em class="icon ni ni-reply-fill"></em> Reply</a></li>
                                                        <li><a href="#"><em class="icon ni ni-pen-alt-fill"></em> Edit</a></li>
                                                        <li><a href="#"><em class="icon ni ni-trash-fill"></em> Remove</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul class="chat-meta">
                                <li>Iliash Hossain</li>
                                <li>29 Apr, 2020 4:28 PM</li>
                            </ul>
                        </div>
                    </div>
                    <div class="chat is-me">
                        <div class="chat-content">
                            <div class="chat-bubbles">
                                <div class="chat-bubble">
                                    <div class="chat-msg"> Thanks for inform. We just solved the issues. Please check now. </div>
                                    <ul class="chat-msg-more">
                                        <li class="d-none d-sm-block"><a href="#" class="btn btn-icon btn-sm btn-trigger"><em class="icon ni ni-reply-fill"></em></a></li>
                                        <li>
                                            <div class="dropdown">
                                                <a href="#" class="btn btn-icon btn-sm btn-trigger dropdown-toggle" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                <div class="dropdown-menu dropdown-menu-sm">
                                                    <ul class="link-list-opt no-bdr">
                                                        <li class="d-sm-none"><a href="#"><em class="icon ni ni-reply-fill"></em> Reply</a></li>
                                                        <li><a href="#"><em class="icon ni ni-pen-alt-fill"></em> Edit</a></li>
                                                        <li><a href="#"><em class="icon ni ni-trash-fill"></em> Remove</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul class="chat-meta">
                                <li>Abu Bin Ishtiyak</li>
                                <li>29 Apr, 2020 4:12 PM</li>
                            </ul>
                        </div>
                    </div>
                    <div class="chat-sap">
                        <div class="chat-sap-meta"><span>12 May, 2020</span></div>
                    </div>
                </div>))}
                <div class="nk-chat-editor">
                    <div class="nk-chat-editor-upload  ms-n1">
                        <a href="#" class="btn btn-sm btn-icon btn-trigger text-primary toggle-opt" data-target="chat-upload"><em class="icon ni ni-plus-circle-fill"></em></a>
                        <div class="chat-upload-option" data-content="chat-upload">
                            <ul class="">
                                <li><a href="#"><em class="icon ni ni-img-fill"></em></a></li>
                                <li><a href="#"><em class="icon ni ni-camera-fill"></em></a></li>
                                <li><a href="#"><em class="icon ni ni-mic"></em></a></li>
                                <li><a href="#"><em class="icon ni ni-grid-sq"></em></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="nk-chat-editor-form">
                        <div class="form-control-wrap">
                            <textarea class="form-control form-control-simple no-resize" rows="1" id="default-textarea" placeholder="Type your message..."></textarea>
                        </div>
                    </div>
                    <ul class="nk-chat-editor-tools g-2">
                        <li>
                            <a href="#" class="btn btn-sm btn-icon btn-trigger text-primary"><em class="icon ni ni-happyf-fill"></em></a>
                        </li>
                        <li>
                            <button class="btn btn-round btn-primary btn-icon"><em class="icon ni ni-send-alt"></em></button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}