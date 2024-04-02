import React, { useState } from "react";

export default function Gallery({ clientData }: any) {
  const images = clientData;
  const [selectedImage, setSelectedImage] = useState<string>("");

  const openFullscreen = (image: string) => {
    setSelectedImage(image);
  };

  const closeFullscreen = () => {
    setSelectedImage("");
  };

  return (
    <div className="bg-black p-10 pb-1">
      {images.map((image: any) => (
        <>
          <img
            key={image}
            src={image.src}
            alt=""
            className="cursor-pointer"
            onClick={() => openFullscreen(image)}
          />
        </>
      ))}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
          <div className="max-w-screen-xl w-full h-full flex justify-center items-center">
            <button
              className="absolute top-4 right-4 text-white z-50 bg-transparent border-none"
              onClick={closeFullscreen}
            >
              Close
            </button>
            <img src={selectedImage} alt="" className="max-w-full max-h-full" />
          </div>
        </div>
      )}

      {!selectedImage && (
        <ul className="grid grid-cols-2 gap-5 lg:grid-cols-5 p-5 md:p-10 my-16 border-2 border-red-600 rounded-lg">
          {images.map((image: any) => (
            <li key={image}>
              <img
                onClick={() => openFullscreen(image)}
                src={image}
                alt=""
                className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
