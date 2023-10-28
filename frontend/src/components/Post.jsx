import React, { useState } from 'react'
import "./css/Post.css"
import { Avatar } from '@mui/material'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutline, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons'
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-responsive-modal'
import "react-responsive-modal/styles.css"
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser'
import { format } from 'date-fns'

function Post(post) {
    // console.log(post.post.createdAt);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [answer, setAnswer] = useState([])
    const Close = <CloseIcon />;
    // console.log(post.post.allAnswer[0].answer);

    const handleQuill = (answer) => {
        setAnswer(answer)
    }
    if (post.post.allAnswer.length > 0) {
        console.log(post.post.allAnswer[0].answer);
    }
    const handleSubmit = async () => {
        if (post.post._id && answer !== "") {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const body = {
                answer: answer,
                questionId: post.post._id
            }
            await axios.post("/api/answer", body, config).then((res) => {
                console.log(res.data);
                alert('Answer added');
                window.location.href = "/"
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <div className="post">
            <div className="post__info">
                <Avatar />
                <h4>UserName</h4>
                <small>{format(new Date(post.post.createdAt), 'MMM d, yyyy HH:mm')}</small>
            </div>
            <div className="post__body">
                <div className="post__question">
                    <p>{post.post.questionTitle}</p>
                    {/* <Button /> */}
                    <button onClick={() => setIsModalOpen(true)} className="post__btnAnswer">Answer</button>
                    <Modal open={isModalOpen} closeIcon={Close} onClose={() => setIsModalOpen(false)} closeOnEsc center closeOnOverlayClick={false} styles={{ overlay: { height: 'auto' } }}>
                        <div className="modal__question">
                            <h1>{post.post.questionTitle}</h1>
                            <p>Asked by {" "} <span className="name">Username</span>{" "}on{" "} <span className='name'>{new Date(post.post.createdAt).toLocaleString()}</span>  </p>
                        </div>
                        <div className="modal__answer">
                            <ReactQuill value={answer} onChange={handleQuill} placeholder='Enter your answer' />
                        </div>
                        <div className="modal__buttons">
                            <button className='cancel' onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button className='add' onClick={handleSubmit} type='submit'>Add Answer</button>
                        </div>
                    </Modal>
                </div>
                {post.post.questionUrl !== "" && <img src={post.post.questionUrl} alt="Error" />
                }
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
                <p style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: "12px", fontWeight: "bold", margin: "10px 0px" }}>{post.post.allAnswer.length} Answers</p>
                <div style={{ margin: "5px 0px 0px 0px", padding: "5px 0px 0px 20px", borderTop: "1px solid lightgray" }} className="post__answer">
                    <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "10px 5px", borderTop: "1px solid lightgray" }} className="post-answer-container">
                        {
                            post.post.allAnswer?.map((ans) => (
                                <>
                                    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", fontSize: "12px", fontWeight: "600", color: "#888" }} className="post-answered">
                                        <Avatar />
                                        <div style={{ margin: "0px 10px" }} className="post-info">
                                            <p>UserNAme</p>
                                            <span>Timestamp</span>
                                        </div>
                                    </div>
                                    <div className="post-answer">
                                        {ReactHtmlParser(ans.answer)}
                                    </div>
                                </>
                            ))
                            // post.post.allAnswer.length > 0 && post.post.allAnswer[0].answer
                        }




                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post