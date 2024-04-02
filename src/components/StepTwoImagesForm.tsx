import React, { ChangeEvent, useState } from "react";

export default function StepTwoImageForm({ goToNext }: any) {
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleNext = () => {
    goToNext(files);
  };

  return (
    <>
      <div
        className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
          <div className="text-center">
            <h2 className="mt-5 text-3xl font-bold text-gray-900 font-HeadingFont">
              Step 2: Album Images
            </h2>
            <p className="mt-2 text-sm text-gray-400 font-inter">
              upload Images
            </p>
          </div>
          <form className="mt-8 space-y-3" action="#" method="POST">
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Album Images
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                  <div className="h-full w-full text-center flex flex-col items-center justify-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-red-400 group-hover:text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="pointer-none text-gray-500 ">
                      <span className="text-sm">Drag and drop</span> files here{" "}
                      <br /> or
                      <input
                        type="file"
                        accept="image/*"
                        name="file"
                        required
                        multiple
                        onChange={handleChange}
                      />
                    </p>
                  </div>

                  <input
                    className="hidden"
                    type="file"
                    accept="image/*"
                    name="file"
                    required
                    multiple
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              <span>File type: images</span>
            </p>

            <div className="max-w-6xl mx-auto duration-1000 delay-300">
              <ul className="grid grid-cols-2 gap-5 lg:grid-cols-5">
                {files &&
                  files.map((file, index) => (
                    <li key={index}>
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`file-${index}`}
                        className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                      />
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <button
                type="button"
                onClick={handleNext}
                className="my-5 w-full flex justify-center bg-red-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
