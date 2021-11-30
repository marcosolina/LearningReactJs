import React, { useRef } from 'react';
import { AppState } from './store/AppState';
import { useSelector } from 'react-redux';

const PostDisplay = React.memo(() => {
    const renderCount = useRef(0);
    console.log("renders PostDisplay", renderCount.current++);
    const post = useSelector((state: AppState) => state.post);
});