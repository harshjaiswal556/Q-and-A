import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
    return (
        <div className="sidebarOptions">
            <div className="sidebarOption">
                <img
                    src="https://th.bing.com/th/id/OIP.pusOkCnj8G8lLQG5lgoWPwHaEC?pid=ImgDet&rs=1"
                    alt=""
                />
                <p>History</p>
            </div>

            <div className="sidebarOption">
                <img
                    src="https://th.bing.com/th/id/OIP.nCwP2IE7R18efcP2nMp-QAHaDh?pid=ImgDet&rs=1"
                    alt=""
                />

                <p>Business</p>
            </div>
            <div className="sidebarOption">
                <img
                    src="https://www.psypost.org/wp-content/uploads/2020/12/brain-thinking-image.jpg"
                    alt=""
                />
                <p>Psychology</p>
            </div>

            <div className="sidebarOption">
                <img
                    src="https://th.bing.com/th/id/OIP.37LSWAXu8bnglq83Kp4HBQAAAA?pid=ImgDet&rs=1"
                    alt=""
                />
                <p>Cooking</p>
            </div>

            <div className="sidebarOption">
                <img
                    src="https://th.bing.com/th/id/R.0b87e7a886b3c3e27c26d7a263d52578?rik=3izFWkN63pIXdw&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31000000%2fMusic-music-31055637-1920-1200.jpg&ehk=8%2bqf3CxkEt0t976kDpbYH6IqX5WilP6OZ5GJE711%2fkA%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                />
                <p>Music</p>
            </div>

            <div className="sidebarOption">
                <img
                    src="https://th.bing.com/th/id/OIP.zcYerwnlNSLIYU-hDpsRnQHaE8?pid=ImgDet&rs=1"
                    alt=""
                />
                <p>Science</p>
            </div>

            <div className="sidebarOption">
                <img
                    src="https://th.bing.com/th/id/OIP.D0eERNr_YiVTNOueUpXsogHaEK?pid=ImgDet&rs=1"
                    alt=""
                />
                <p>Health</p>
            </div>

            <div className="sidebarOption">
                <img
                    src="https://th.bing.com/th/id/OIP.cFGWYq7U5uO9p4nl4hSnSgHaE_?pid=ImgDet&rs=1"
                    alt=""
                />
                <p>Movies</p>
            </div>

            <div className="sidebarOption">
                <img
                    src="https://th.bing.com/th/id/OIP.89uvk8TA6-reQ7koKTfAwwHaEX?pid=ImgDet&rs=1"
                    alt=""
                />
                <p>Technology</p>
            </div>

            <div className="sidebarOption">
                <img
                    src="https://lerablog.org/wp-content/uploads/2017/12/grtgrgrey.jpg"
                    alt=""
                />
                <p>Education</p>
            </div>
            <div className="sidebarOption">
                <Add />
                <p className="text">Discover Spaces</p>
            </div>
        </div>
    );
}

export default SidebarOptions;