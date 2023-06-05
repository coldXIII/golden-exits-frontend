import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import { selectIsAuth } from '@/redux/slices/auth';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import axios from '@/utils/axios';
import styles from './EditPost.module.scss';
import 'easymde/dist/easymde.min.css';

export const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const inputFileRef = useRef(null);

  const isEditing = Boolean(id);

  const handleImage = (event) => {
    const file = event.target.files[0];
    setFileToBase64(file);
  };

  const setFileToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const removeImage = () => {
    setImage('');
  };

  const addText = useCallback((value) => {
    setText(value);
  }, []);

  useEffect(() => {
    if (id) {
      axios
        .get(`/posts/${id}`)
        .then(({ data }) => {
          setTitle(data.title);
          setText(data.text);
          setImage(data.imageUrl);
        })
        .catch((err) => {
          console.error(err);
          alert(err.message);
        });
    }
  }, [id]);

  const onSubmit = async () => {
    try {
      const { data } = await axios.post('/upload', { image });
      const values = {
        title,
        text,
        imageUrl: data.url,
      };
      await axios.patch(`/posts/${id}`, values);
      navigate(`/blog`);
    } catch (err) {
      console.warn(err);
      alert(err.message);
    }
  };

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Content of Your Post',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Container maxWidth="lg" style={{ padding: '2rem 0' }}>
      <Paper style={{ padding: 30 }}>
        <Button
          onClick={() => inputFileRef.current.click()}
          variant="outlined"
          size="large"
          style={{ marginBottom: '0.5rem' }}
        >
          Download Picture
        </Button>
        <input ref={inputFileRef} type="file" onChange={handleImage} hidden />
        {image && (
          <>
            <Button
              variant="contained"
              color="error"
              size="large"
              onClick={removeImage}
              style={{ marginLeft: '0.5rem', marginBottom: '0.5rem' }}
            >
              Delete
            </Button>
            <img
              className={styles.image}
              src={image}
              alt="Uploaded"
            />
          </>
        )}
        <br />
        <br />
        <TextField
          classes={{ root: styles.title }}
          variant="standard"
          placeholder="Post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <SimpleMDE
          className={styles.editor}
          value={text}
          onChange={addText}
          options={options}
        />
        <div className={styles.buttons}>
          <Button onClick={onSubmit} size="large" variant="contained">
            {isEditing ? 'Save' : 'Publish'}
          </Button>
          <a href="/">
            <Button size="large">Cancel</Button>
          </a>
        </div>
      </Paper>
    </Container>
  );
};
