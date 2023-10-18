import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';  // いいねアイコン
import RepeatIcon from '@mui/icons-material/Repeat';  // リツイートアイコン
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';  // チャットアイコン
import { useNavigate } from "react-router-dom";

const styles = {
  tweetContainer: (replyToId) => {
    return {
      position: 'relative',  // 追加
      display: 'flex',
      marginBottom: '1rem',
      alignItems: 'center',
      width: '600px',
      marginLeft: !replyToId ? '' : '3rem',
    };
  },
  avatar: {
    position: 'absolute',  // 追加
    top: '1rem',  // 追加
    left: '1rem',  // 追加
    marginRight: '1rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: '4rem'  // 追加: Avatarの幅と左マージンを考慮したマージンを追加
  },
  interaction: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: '0.5rem',
    color: '#657786',
  }
};

const Summary = ({ id, username, content, likes, retweets, replyToId }) => {
  const navigate = useNavigate();
  // チャットアイコンをクリックしたときのアクション
  const handleChatClick = () => {
    navigate(`/summary/${id}`);
  };

  return (
    <Card variant="outlined" style={styles.tweetContainer(replyToId)}>
      <Avatar style={styles.avatar}>U</Avatar>
      <CardContent style={styles.content}>
        <Typography variant="h6">{username}</Typography>
        <Typography variant="body1">{content}</Typography>
        <Box style={styles.interaction}>
          <Box display="flex" alignItems="center">
            <ChatBubbleOutlineIcon fontSize="small" onClick={handleChatClick} style={{ cursor: 'pointer' }} />
          </Box>
          <Box display="flex" alignItems="center">
            <RepeatIcon fontSize="small" />
            <Typography variant="body2" style={{ marginLeft: '0.5rem' }}>{retweets}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <FavoriteBorderIcon fontSize="small" />
            <Typography variant="body2" style={{ marginLeft: '0.5rem' }}>{likes}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Summary;
