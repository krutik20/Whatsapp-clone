import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

export const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="sidebar_header">
            <Avatar src='https://avatars0.githubusercontent.com/u/57250170?s=40&v=4'/>
            <div className="sidebar_headerRight">
                <IconButton>
                   <DonutLargeIcon />
                </IconButton>
                <IconButton>
                   <ChatIcon />
                </IconButton>
                <IconButton>
                   <MoreVertIcon />
                </IconButton>
                
            </div>
        </div>
        <div className="sidebar_search">
            <div className="sidebar_searchContainer">
                <SearchOutlined />
                <input placeholder="Search or start new chat" type="text" />

            </div>

        </div>
        <div className="sidebar_chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
        </div>
    )
}
