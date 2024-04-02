import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface FormPros {
  setPassword: Dispatch<SetStateAction<string>>;
}

export default function ClientPasswordForm({ setPassword }: FormPros) {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
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
                Password Protected Page
              </h2>
            </div>
            <form className="mt-8 space-y-3" action="#" method="POST">
              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Password
                </label>
                <input
                  className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="password"
                  name="password"
                  placeholder="Provide Password"
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setPassword(input)}
                  className="my-5 w-full flex justify-center bg-red-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
}
