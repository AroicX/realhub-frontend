import React, { useState, useCallback } from "react";
import Formheader from "@/components/dashboard/formheader";
import { useDropzone } from "react-dropzone";
import SVG from "react-inlinesvg";
import axios from "axios";
import Toastr from "toastr";
import classes from "./button.module.css";

let counter = 0;
let links = [];
export default function StepThree({ currentStep, setStep, propagate }) {
  const [files, setFiles] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    let parent = document.getElementById("image-grid");
    let _images = [];

    setFiles(acceptedFiles);
    acceptedFiles.forEach((key, i) => {
      _images.push({
        name: key.name,
        value: window.URL.createObjectURL(key),
      });

      setTimeout(() => {
        setImagePreview(_images);
        window.scrollBy(0, 50);
        parent.click();
      }, 100);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const uploadFiles = () => {
    setIsLoading(true);
    Toastr.info("Please wait while uploading...");
    files.forEach((file) => {
      upload(file);
    });
  };
  const upload = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "realhub_listing");

    try {
      axios
        .post("https://api.cloudinary.com/v1_1/aroicx/image/upload", formData)
        .then((response) => {
          if (counter < files.length) {
            counter++;
            links.push({
              images: { image: response.data.url },
            });
          }
          if (counter === files.length) {
            propagate({ images: JSON.stringify(links) });
            setIsLoading(false);
            setStep(currentStep + 1);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const remove = (data) => {
    console.log(data);

    let arr = [];
    let arrPreview = [];
    files.filter((file) => {
      if (file.name !== data.name) {
        arr.push(file);
      }
    });
    imagePreview.filter((file) => {
      if (file.name !== data.name) {
        arrPreview.push(file);
      }
    });

    setFiles(arr);
    setImagePreview(arrPreview);
  };

  return (
    <>
      <Formheader title="Upload Images" back={() => setStep(currentStep - 1)} />
      <div className="sm:pl-8 sm:pr-8 pr-4 pl-4">
        <div className="mt-8 font-15 text-gray-900 w-70 mb-10 w-auto">
          We’d love to see some images of your listing. <br /> You can upload as
          much as 30 Images.
        </div>

        {/* image-preview */}
        <div
          className="grid md:grid-cols-3 justify-center gap-x-5 gap-y-8"
          id="image-grid"
        >
          {imagePreview?.map((img, i) => (
            <div className="relative maxh-80" key={i + 1}>
              <img src={img.value} alt="*" />
              <img
                onClick={() => remove(img)}
                className="absolute top-0 right-0 cursor-pointer"
                src="/svg/cancel.svg"
                alt="*"
              />
            </div>
          ))}
        </div>
        {/* image-preview */}

        <div className="w-full bg-ash sm:pt-20 pt-10 items-center flex flex-col">
          <div
            className="items-center flex flex-col cursor-pointer max-h-60 w-100 p-5 hover:bg-black hover:text-white hover-svg rounded"
            {...getRootProps()}
          >
            <SVG
              className="mb-5"
              src="/svg/gallery.svg"
              alt="image"
              width={50}
              height={50}
            />

            <input
              {...getInputProps()}
              accept="image/jpg, image/jpeg, image/png"
            />
            {isDragActive ? (
              <p className="text-lg mb-10 text-center ml-2 mr-2">
                Drop the files here ...
              </p>
            ) : (
              <p className="text-lg mb-10 text-center ml-2 mr-2">
                Drag 'n' drop some files here, or click to select files
              </p>
            )}
          </div>
          <button
            // onClick={() => setStep(4)}
            className="bg-darkgreen text-white pt-3 pb-3 pl-8 pr-8 mb-10 sm:mb-20"
          >
            Click Here to upload from your device
          </button>
        </div>

        <button
          onClick={() => uploadFiles()}
          className={`w-full bg-black sm:pl-10 pr-5 pl-5 pt-3 pb-3 sm:pr-10 sm:pb-5 sm:pt-5 text-white mt-14 mb-12 relative ${
            isLoading ? classes.LoadingState : ""
          }`}
        >
          <span
            className={isLoading ? classes.RemoveText : classes.DisplayText}
          >
            Continue
          </span>
        </button>
      </div>
    </>
  );
}
