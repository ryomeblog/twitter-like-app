import React, { useEffect, useState } from 'react';
import Summary from '../components/Summary';
import { useParams } from 'react-router-dom';
import { CssBaseline, TextField, Button, Box } from '@mui/material';
import BottomMenu from '../components/BottomMenu';

const styles = {
  container: {
    backgroundColor: '#E8F5FE',
    height: '100vh',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '80px'  // 返信入力フォームとBottomMenuのためのスペース
  },
  header: {
    marginBottom: '1rem',
  },
  content: {
    overflowY: 'auto',
    flex: 1,
    width: '100%',
    maxWidth: '600px',
  },
  replyForm: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',  // テキストフィールドとボタンの間のスペース
    marginTop: '10px',
    width: '100%',
    maxWidth: '600px'
  },
};

const SummaryDetails = () => {
  const { id } = useParams();
  const mainTweet = { id: 'hogehoge', replyToId: '', username: 'user1', content: 'Hello, this is my first tweet!', likes: 5, retweets: 3 };
  const [mockReplies, setMockReplies] = useState([
    // このモックデータは例です。実際のデータ構造や内容に合わせて調整してください。
    { id: 'ooo', replyToId: 'hogehoge', username: 'user4', content: 'Great tweet!', likes: 5, retweets: 3, timestamp: '2023/10/15 14:00:00.000' },
    { id: 'aaa', replyToId: 'hogehoge', username: 'user5', content: 'Thanks for sharing!', likes: 5, retweets: 3, timestamp: '2023/10/15 12:00:00.000' },
    { id: 'ddd', replyToId: 'fugafuga', username: 'user5', content: 'Thanks for sharing!', likes: 5, retweets: 3, timestamp: '2023/10/15 13:00:00.000' },
    { id: 'sss', replyToId: 'hogehoge', username: 'user5', content: 'Thanks for sharing!', likes: 5, retweets: 3, timestamp: '2023/10/15 12:00:00.000' },
    { id: 'asa', replyToId: 'fugafuga', username: 'user5', content: 'Thanks for sharing!', likes: 5, retweets: 3, timestamp: '2023/10/15 13:00:00.000' },
    { id: 'dddw', replyToId: 'hogehoge', username: 'user5', content: 'Thanks for sharing!', likes: 5, retweets: 3, timestamp: '2023/10/15 12:00:00.000' },
    { id: 'ert', replyToId: 'fugafuga', username: 'user5', content: 'Thanks for sharing!', likes: 5, retweets: 3, timestamp: '2023/10/15 13:00:00.000' },
    { id: 'qwe', replyToId: 'hogehoge', username: 'user5', content: 'Thanks for sharing!', likes: 5, retweets: 3, timestamp: '2023/10/15 12:00:00.000' },
    { id: 'qwweer', replyToId: 'fugafuga', username: 'user5', content: 'Thanks for sharing!', likes: 5, retweets: 3, timestamp: '2023/10/15 13:00:00.000' }
  ]);
  const [sortedReplies, setSortedReplies] = useState([]);
  const [replyContent, setReplyContent] = useState('');

  const handleReplySubmit = () => {
    // 新しい返信をmockRepliesに追加
    setMockReplies([...mockReplies, {
      id: new Date().toISOString(), // 一意のIDとしてISO文字列を使用
      replyToId: id,
      username: 'currentUser', // 現在のユーザー名、適切な値に変更する必要があります
      content: replyContent,
      likes: 0,
      retweets: 0,
      timestamp: new Date().toISOString().replace('T', ' ').split('.')[0]
    }])
    setReplyContent(''); // テキストエリアをクリア
  };

  useEffect(() => {
    // repliesをtimestampに基づいて昇順ソート
    setSortedReplies(mockReplies
      .filter(reply => reply.replyToId === id)
      .sort((a, b) => b.timestamp.localeCompare(a.timestamp)))
    console.log(mockReplies);
  }, [mockReplies]);

  return (
    <div style={styles.container}>
      <CssBaseline />
      <h1 style={styles.header}>投稿詳細</h1>
      <Summary {...mainTweet} />
      <div style={styles.content}>
        {sortedReplies.map(reply => (
          <Summary key={reply.id} {...reply} />
        ))}
      </div>
      <Box style={styles.replyForm}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="返信内容"
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          style={{ flex: 1 }}  // テキストフィールドが残りのスペースを取るように
        />
        <Button variant="contained" color="primary" onClick={handleReplySubmit}>
          返信
        </Button>
      </Box>
      <BottomMenu />
    </div>
  );
}

export default SummaryDetails;
