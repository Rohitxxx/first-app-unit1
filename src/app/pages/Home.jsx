import React, { useContext, useEffect } from 'react'
import classes from '../assets/css/mystyle.module.css'
import { UserContext } from '../context/MyContext';

const Home = (props) => {
    const { user, setUser, fetchData } = useContext(UserContext)
    const { bg, color } = props; //object destructuring
    const changeName = () => {
        setUser({ ...user, name: 'abc' })
        fetchData()
    }
    return (
        <>
            <div style={{ backgroundColor: bg, color: color }} className={classes['home-container']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vero cupiditate culpa consectetur mollitia quo nostrum! Libero nulla amet enim aliquid architecto! Consequatur blanditiis adipisci aspernatur, corporis dicta doloribus dolores.
                <p className={classes['p']}>
                    item {user.name} {user.id}
                </p>
                <button onClick={changeName}>change the name</button>
            </div>
            <div>

            </div>
        </>
    )
}

export default Home