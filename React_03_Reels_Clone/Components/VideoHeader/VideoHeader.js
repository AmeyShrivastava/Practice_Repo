import React from 'react'
import './VideoHeader.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltIconOutlined from '@mui/icons-material/CameraAltOutlined';

export default function VideoHeader() {
    return (
        <div className="videoHeader">
            <ArrowBackIosIcon />
            <h2>Reels</h2>
            <CameraAltIconOutlined />
        </div>
    )
}
