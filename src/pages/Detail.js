import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import './Detail.css';

function Detail() {
    let { id } = useParams();

    return (
        <div className='detail-product d-flex flex-column justify-content-center align items-center my-5'>
            <Link className='back-btn' to={"/product"}><i className="fa-solid fa-circle-arrow-left mx-5"></i></Link>
            <ItemDetailContainer id={id} />
        </div>
    )
}

export default Detail;