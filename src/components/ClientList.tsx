import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/clients.css";
import { Link } from "react-router-dom";
import { ClientProps } from "../utils/interfaces";

interface ClientData {
  client: ClientProps;
}
const ClientList = ({ client }: ClientData) => {
  const [password, setPassword] = useState("");
  const [showContent, setShowContent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === client.password) {
      setShowContent(true);
    } else {
      alert("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  return (
    <Link to={`/clients-albums/${client.id}`}>
      <motion.div
        className="guides-list-tab-01-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {showContent ? (
          <form onSubmit={handleSubmit}>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="flex w-full justify-center relative">
            <div className="absolute bottom-0 w-full z-20">
              <div className="flex justify-center">
                <h1 className="font-Expert md:text-5xl text-4xl">
                  {client.name} - {client.albumImageUrls.length}pcs
                </h1>
              </div>
            </div>

            <div className="relative w-fit h-fit ">
              <img
                src="/assets/images/frame.png"
                alt="photoframe"
                className="md:w-[40vw] w-[80vw]"
              />
              <div
                className="absolute w-[87%] h-[74%] top-[5%] bottom-auto left-[5%] right-auto bg-cover bg-center"
                style={{
                  background: `url(${client.coverImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        )}
      </motion.div>
    </Link>
  );
};

export default ClientList;
