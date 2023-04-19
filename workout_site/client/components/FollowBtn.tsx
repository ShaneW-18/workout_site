import React, { useState } from 'react';
import { AiOutlineUserAdd, AiOutlineUserDelete } from 'react-icons/ai';

export default function FollowBtn({userId, targetUserId, isFollowing=false, showText=true}){

    const [following, setFollowing] = useState(isFollowing);

    const handleClick = async () => {
        if(!following){
            //follow
        } else {
            //unfollow
        }

        setFollowing(!following);
    }

    if (!following){
        return (
            <button className='border-2 border-primary text-primary font-semibold px-2 py-1 flex items-center gap-2' onClick={handleClick}>
                <AiOutlineUserAdd />
                {showText && 'Follow'}      
            </button>
        );
    }

    return (
        <button className='--bg bg-primary hover:bg-primary-h text-white font-semibold px-2 py-1 flex items-center gap-2' onClick={handleClick}>
            <AiOutlineUserDelete />
            {showText && 'Unfollow'}
        </button>
    );
}