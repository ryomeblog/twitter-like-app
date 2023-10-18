import React, {useState} from 'react';
import Summary from '../components/Summary';
import { CssBaseline } from '@mui/material';
import BottomMenu from '../components/BottomMenu';

const mockPosts = [
  { id: 'hogehoge', replyToId: '', username: 'user1', content: 'Hello, this is my first tweet!', likes: 5, retweets: 3 },
  { id: 'fugafuga', replyToId: '', username: 'user2', content: 'React is awesome!', likes: 20, retweets: 10 },
  { id: 'fugafuga2', replyToId: '', username: 'user3', content: 'Working with react-router v6.', likes: 7, retweets: 2 },
  { id: 'fugafuga', replyToId: '', username: 'user2', content: 'React is awesome!', likes: 20, retweets: 10 },
  { id: 'fugafuga2', replyToId: '', username: 'user3', content: 'Working with react-router v6.', likes: 7, retweets: 2 },
  { id: 'fugafuga', replyToId: '', username: 'user2', content: 'React is awesome!', likes: 20, retweets: 10 },
  { id: 'fugafuga2', replyToId: '', username: 'user3', content: 'Working with react-router v6.', likes: 7, retweets: 2 },
  { id: 'fugafuga', replyToId: '', username: 'user2', content: 'React is awesome!', likes: 20, retweets: 10 },
  { id: 'fugafuga2', replyToId: '', username: 'user3', content: 'Working with react-router v6.', likes: 7, retweets: 2 },
  // ... 他のダミーツイートデータ
];

const styles = {
  container: {
    backgroundColor: '#E8F5FE',
    height: '100vh',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    marginBottom: '1rem',
  },
  content: {
    overflowY: 'auto',
    flex: 1,
    width: '100%',
    maxWidth: '600px',
    paddingBottom: '60px'
  }
};


const HomePage = () => {
  return (
    <div style={styles.container}>
      <CssBaseline />
      <h1 style={styles.header}>ホーム</h1>
      <div style={styles.content}>
        {mockPosts.map((contents, index) => (
          <Summary key={index} {...contents} />
        ))}
      </div>
      <BottomMenu /> 
    </div>
  );
};


export default HomePage;
