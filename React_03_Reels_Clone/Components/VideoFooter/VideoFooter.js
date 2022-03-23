import React from "react";
import "./VideoFooter.css";

import { Button, Avatar } from "@mui/material";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Ticker from "react-ticker";

function VideoFooter({ channel, likes, shares, avatarSrc, song }) {
    return (
        <div className="videoFooter">
            {/* text */}
            <div className="videoFooter__text">
                <Avatar src={avatarSrc} />
                <h3>{channel}<Button>Follow</Button>
                </h3>
            </div>
            {/* ticker */}
            <div className="videoFooter__ticker">
                <MusicNoteRoundedIcon className="videoFooter__icon" />
                <Ticker mode='smooth'>
                    {({ index }) => (
                        <>
                            <h1>{song}</h1>
                        </>
                    )}
                </Ticker>
            </div>
            {/* actions */}
            <div className="videoFooter__actions">
                <div className="videoFooter__actionsLeft">
                    <FavoriteIcon fontSize="small" />
                    <ModeCommentIcon fontSize="small" />
                    <SendIcon fontSize="small" />
                    <MoreHorizIcon fontSize="small" />
                </div>
                <div className="videoFooter__actionsRight">
                    <div className="videoFooter__stat">
                        <FavoriteIcon fontSize="small" />
                        <p>{likes}</p>
                    </div>
                    <div className="videoFooter__stat">
                        <ModeCommentIcon fontSize="small" />
                        <p>{shares}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoFooter;
