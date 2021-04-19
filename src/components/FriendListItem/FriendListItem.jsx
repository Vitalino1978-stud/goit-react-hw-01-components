import React from 'react';
import PropTypes from 'prop-types'
import css from './FriendListItem.module.css'
import noImage from './noImage.png'


const FriendListItem = ({ avatar, name, isOnline }) => {
   return (
    <>
      <span className={isOnline ? css.online : css.offline}></span>
       <img className={css.avatar} src={avatar} alt={name} width="48" />
       <p className={css.name}>{ name}</p>
    </>
  )
}

FriendListItem.defaultProps = {
  avatar: noImage
}

FriendListItem.propTypes = {
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string
    
}


export default FriendListItem;

