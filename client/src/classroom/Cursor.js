import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import {useRef} from 'react';
import './App.css';
import getImage from './assets/util/getImage';
import './Link';

const Cursor=()=> {
    const delay = 18;
    const dot = useRef(null);
    const dotOutline = useRef(null);

    const cursorVisible = useRef(true);
    const cursorEnlarged = usefRef(false);

    const endX= useRef(window.innerWidth /2);
    const edY = useRef(window.innerHeight /2);
    const _x = useRef(0);
    const _y = useRef(0);

    const requestRef = useRef(null);

    useEffect(()) => {
        document.addEventListener('mousedown', mouseOverEvent);
        document.addEventListener('mouseup', mouseOutEvent);
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);
        
        animateDotOutline();

        return() =>
        {
            document.addEventListener('mousedown', mouseOverEvent);
            document.addEventListener('mouseup', mouseOutEvent);
            document.addEventListener('mousemove', mouseMoveEvent);
            document.addEventListener('mouseenter', mouseEnterEvent);
            document.addEventListener('mouseleave', mouseLeaveEvent);
            
            cancelAnimationFrame(requestsRef.current);
        };
    }, []);

    const toggleCursorVisibility = () => {

        if(cursorVisible.current){
            dot.current.style.opacity = 1;
            dotOutline.current.style.opacity = 1;
        }
        else{
            dot.current.style.opacity = 0;
            dotOutline.current.style.quality = 0;
        }
    }

    const toggleCursorVisibility=()=>{

        if(cursorEnlarged.current)
        {
            dot.current.style.transform = 'translate(-50%,50%_ scale(0,75)';
            dotOutline.current.style.transform = 'translate(-50%,50%_ scale(0,75)';
        }
        else
        {
            dot.current.style.transform = 'translate(-50%,50%_ scale(1)';
            dot.current.style.transform = 'translate(-50%,50%_ scale(1)';
        }
    };

    const mouseOverEvent=()=>
    {
        cursorEnlarged.current = true;
        toggleCursorSize();
    };

    const mouseOverEvent = () =>
    {
        cursorVisible.current = true
        toggleCursorVisibility();
    };

    const mouseLeaveEvent =() =>
    {
        cursorVisible.current = false;
        toggleCursorVisibility();
    };

    const mouseOverEvent = e=>
    {
        cursorVisible.current = true;
        toggleCursorVisibility();

        endX.current = e.pageX;
        endY.current = e.pageY;

        dot.current.style.top = endY.current = 'px';
        dot.current.style.left = endX.current + 'px';
    };

    const animateDotOutline = () =>
    {

        _x.current += (endX.current - _x.current)/ delay;
        _y.current += (endY.current - _y.current)/delay;

        dotOutline.current.style.top = _y.current +'px';
        dotOutline.current.style.top = _x.current +'px';

        requestRef.current = requestAnimationFrame(aniimatedDotOutline);
    }

    return(
        <>
        <div ref={dotOutline} className="cursor-dot"> </div>
        <div ref={dot} className="cursor-dot-outline"> </div>

        <div calssName="link-container">
            {[...Array(2).keys{}].map(i=>(
                <Link key={i} mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent} src={getImage(i+1)} />
            ))}
        </div>
        </>
    );

};