import { chatList } from "../demoData/chatList";
import { Chat } from "./chat";

export function ChatList() {
    return (
        <>
            {/* Chat List Start here */}
            <div class="nk-content ">
                <div class="container-fluid">
                    <div class="nk-content-inner">
                        <div class="nk-content-body">
                            <div class="nk-chat">
                                <div class="nk-chat-aside">
                                    <div class="nk-chat-aside-head">
                                        <div class="nk-chat-aside-user">
                                            <div class="dropdown">
                                                <a href="#" class="dropdown-toggle dropdown-indicator" data-bs-toggle="dropdown">
                                                    <div class="user-avatar">
                                                        <img src="./images/avatar/b-sm.jpg" alt="" />
                                                    </div>
                                                    <div class="title">Chats</div>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <ul class="link-list-opt no-bdr">
                                                        <li><a href="#"><span>Contacts</span></a></li>
                                                        <li><a href="#"><span>Channels</span></a></li>
                                                        <li class="divider"></li>
                                                        <li><a href="#"><span>Help</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nk-chat-aside-body" data-simplebar>
                                        <div class="nk-chat-aside-panel nk-chat-fav">
                                            {/* <h6 class="title overline-title-alt">Favorites</h6> */}
                                        </div>
                                        <div class="nk-chat-list">
                                            <h6 class="title overline-title-alt">Messages</h6>
                                            <ul class="chat-list">
                                                {chatList.map((item, i) => (
                                                    <>
                                                        {(item.initials && !item.profilePicture || (!item.initials && item.profilePicture)) && <li class="chat-item" key={i}>
                                                            <a class="chat-link chat-open" href="#">
                                                                <div class="chat-media user-avatar">
                                                                    {(item.initials && !item.profilePicture) && <span>{item.initials}</span>}
                                                                    {(!item.initials && item.profilePicture) && <img src={item.profilePicture} alt="" />}
                                                                </div>
                                                                <div class="chat-info">
                                                                    <div class="chat-from">
                                                                        <div class="name">{item.name}</div>
                                                                        <span class="time">{item.time}</span>
                                                                    </div>
                                                                    <div class="chat-context">
                                                                        <div class="text">
                                                                            <p>{item.message}</p>
                                                                        </div>
                                                                        <div class="status sent">
                                                                            <em class="icon ni ni-check-circle"></em>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div class="chat-actions">
                                                                <div class="dropdown">
                                                                    <a href="#" class="btn btn-icon btn-sm btn-trigger dropdown-toggle" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt no-bdr">
                                                                            <li><a href="#">Mute</a></li>
                                                                            <li class="divider"></li>
                                                                            <li><a href="#">Hide</a></li>
                                                                            <li><a href="#">Delete</a></li>
                                                                            <li class="divider"></li>
                                                                            <li><a href="#">Mark as Unread</a></li>
                                                                            <li><a href="#">Ignore Messages</a></li>
                                                                            <li><a href="#">Block Messages</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>}
                                                        {(item.initials && item.profilePicture) && <li class="chat-item" key={i}>
                                                            <a class="chat-link chat-open" href="#">
                                                                <div class="chat-media user-avatar user-avatar-multiple">
                                                                    <div class="user-avatar">
                                                                        <img src="./images/avatar/c-sm.jpg" alt="" />
                                                                    </div>
                                                                    <div class="user-avatar">
                                                                        <span>{item.initials}</span>
                                                                    </div>
                                                                </div>
                                                                <div class="chat-info">
                                                                    <div class="chat-from">
                                                                        <div class="name">{item.name}</div>
                                                                        <span class="time">{item.time}</span>
                                                                    </div>
                                                                    <div class="chat-context">
                                                                        <div class="text">
                                                                            <p>{item.message}</p>
                                                                        </div>
                                                                        <div class="status sent">
                                                                            <em class="icon ni ni-check-circle"></em>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div class="chat-actions">
                                                                <div class="dropdown">
                                                                    <a href="#" class="btn btn-icon btn-sm btn-trigger dropdown-toggle" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt no-bdr">
                                                                            <li><a href="#">Mute</a></li>
                                                                            <li class="divider"></li>
                                                                            <li><a href="#">Hide</a></li>
                                                                            <li><a href="#">Delete</a></li>
                                                                            <li class="divider"></li>
                                                                            <li><a href="#">Mark as Unread</a></li>
                                                                            <li><a href="#">Ignore Messages</a></li>
                                                                            <li><a href="#">Block Messages</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>}
                                                    </>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <Chat />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* chat list end here */}
        </>
    )
}