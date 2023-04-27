import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { useState } from 'react'
import styles from './ProductPage.css';
import useStyles from './styles';

const ProductPage = ({product}) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const classes = useStyles();

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  return (

        
    <div className="main-container">
    <div>
        <img src='https://cdn.chec.io/merchants/19661/assets/tv2wubQUhhbW1qAl|Screenshot 2020-11-25 at 10.56.41.png'></img>
        <div className="cmttitle"><h1>Kettle</h1><h1>$250</h1></div>
    </div>
      <div className="comment-flexbox">
        <h3 className="comment-text">Comment</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />
        <button onClick={onClickHandler} className="comment-button">
          Submit
        </button>
      </div>
      {comments.map((text) => (
        <div className="cmt">
        <img className="cmtimg" src="/user.png" alt="img"></img>
        <div className="comment-container">{text}</div>
        </div>
      ))}
    </div>

  )
}

export default ProductPage
