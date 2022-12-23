import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import Dropzone from 'react-dropzone';
import styles from './UploadVideo.module.scss';
import axios from '../../utils/axios';

export const UploadVideo = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.data);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoName, setVideoName] = useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeGenre = (event) => {
    setGenre(event.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === '' || genre === '' || videoUrl === '') {
      return alert('Please first fill all the fields');
    }

    const fields = {
      user: userData._id,
      title: title,
      url: videoUrl,
      genre: genre,
      likes: {},
    };

    axios.post('/videos', fields).then((response) => {
      try {
        alert('video Uploaded Successfully');
        navigate('/video');
      } catch (error) {
        alert(error.message);
      }
    });
  };

  const onDrop = async (files) => {
    try {
      const formData = new FormData();
      const file = files[0];
      formData.append('file', file);
      const { data } = await axios.post('/uploadvideo', formData);
      setVideoUrl(data.url);
      setVideoName(data.fileName);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.UploadVideo}>
      <form onSubmit={onSubmit}>
        <div className={styles.left}>
          <h1>Upload your Video</h1>
          <Dropzone onDrop={onDrop} multiple={false} maxSize={8000000000}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '500px',
                    height: '340px',
                    border: '1px solid #d0af51',
                  }}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {!videoName && <AiOutlinePlus style={{ fontSize: '2rem' }} />}
                  {videoName && <p>{videoName}</p>}
                </div>
              </section>
            )}
          </Dropzone>
        </div>

        <div className={styles.right}>
          <label>Title</label>
          <input onChange={handleChangeTitle} value={title} />
          <label>Genre</label>
          <input onChange={handleChangeGenre} value={genre} />
          <button type="submit" size="large">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
