import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import FourOFour from '../../assets/404.png'

const Index = (props) => {
    return (
        <div className="four-o-four" style={{ marginTop: props.mt ? props.mt : 0 }}>
            <div className="text-center px-4">
                <img src={FourOFour} className="img-fluid" alt="Page not found" />
                <p>What are you looking for ? Page not found !</p>
                <Link to="/">
                    <button
                        className='btn btn-primary border-0'
                        style={{ padding: "8px 30px" }}
                    >
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Index;