// src/components/Image.js
import React, { useState } from 'react';
import {storage} from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Image = () => {
  const [files, setfile] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setfile(filesArray);

      const urls = filesArray.map((file) => URL.createObjectURL(file));
      setImageUrls(urls);
    }
  };

  const handleUpload = () => {
    if (!files || files.length === 0) {
      alert('Please upload at least one image!');
      return;
    }
  
    files.forEach((file) => {
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        'state_changed',
        (snapshot) => {
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log('File uploaded successfully:', url);
          });
        }
      );
    });
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload file</button>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Uploaded ${index}`} />
      ))}
    </div>
  );
};

export default Image;
