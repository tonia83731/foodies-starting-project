'use client'
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null)
  const imageInput = useRef()
  const handlePickClick = () => {
    imageInput.current.click()
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if(!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image post yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="The image selected by the user" fill/>}
        </div>
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name }
          className={classes.input}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button className={classes.button} type="button" onClick={handlePickClick}>Pick a image</button>
      </div>
    </div>
  );
}
