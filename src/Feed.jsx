import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import {Firestore, collection, getDocs} from 'firebase/firestore';


function Feed () {
    const [input, setInput] = useState('') // input is a variable and setInput is a function to change the value of input
    const [posts, setPosts] = useState([])

    useEffect(() => {
        
        // db.collection("posts").onSnapshot((snapshot) =>
        //     setPosts(
        //         snapshot.docs.map((doc) => ({
        //             id: doc.id,
        //             data: doc.data(),
        //         }))
        //     )
        // )
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "posts"));
            const posts = querySnapshot.docs.map(doc => {
                return {id: doc.id, data:doc.data()}
            })
            setPosts(posts)
        }

        console.log(db)
    }, [])

    const sendPost = e => {
        e.preventDefault();
        db.collection("posts").add({
            name: 'Bharat Chandran',
            description: 'This is a test',
            message: 'Wow this worked',
            photoUrl: '',
            timestamp: Firestore.FieldValue.serverTimestamp(),
        })

        
    }
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
            </div>
        </div>
        {/* Posts */}
        {posts.map(({id, data:{name, descroption, message, photoUrl}}) => (
            <Post key={id} name={name} description={descroption} message={message} photoUrl={photoUrl} />
        ))}
        
    </div>
  )
}

export default Feed;