import { useState } from "react";

function TwitterFollowCard({ children, userName,  initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    

    const text = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = isFollowing 
    // ClassName is-following to change the style in each state
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)

    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt= "avatar of Sebastian" 
                src={`https://unavatar.io/${userName}`}/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-unfollow">Unfollow</span>
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard