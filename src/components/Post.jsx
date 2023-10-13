import React from 'react'
import "./css/Post.css"
import { Avatar, Button } from '@mui/material'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutline, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons'

function Post() {
    return (
        <div className="post">
            <div className="post__info">
                <Avatar />
                <h4>UserName</h4>
                <small>Timestamp</small>
            </div>
            <div className="post__body">
                <div className="post__question">
                    <p>This is a test question</p>
                    {/* <Button /> */}
                    <button className="post__btnAnswer">Answer</button>
                </div>
                <div className="post__footer">
                    <div className="post__footerAction">
                        <ArrowUpwardOutlined />
                        <ArrowDownwardOutlined />
                    </div>
                    <RepeatOneOutlined />
                    <ChatBubbleOutline />
                    <div className="post__footerLeft">
                        <ShareOutlined />
                        <MoreHorizOutlined />
                    </div>
                </div>
                <p style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: "12px", fontWeight: "bold", margin: "10px 0px" }}>1 Answer</p>
                <div style={{ margin: "5px 0px 0px 0px", padding: "5px 0px 0px 20px", borderTop: "1px solid lightgray" }} className="post__answer">
                    <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "10px 5px", borderTop: "1px solid lightgray" }} className="post-answer-container">
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", fontSize: "12px", fontWeight: "600", color: "#888" }} className="post-answered">
                            <Avatar />
                            <div style={{ margin: "0px 10px" }} className="post-info">
                                <p>UserNAme</p>
                                <span>Timestamp</span>
                            </div>
                        </div>
                        <div className="post-answer">
                            This is test answer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post