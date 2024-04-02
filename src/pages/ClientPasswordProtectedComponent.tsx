import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/clients.css";
import { useParams } from "react-router-dom";
import { ClientProps } from "../utils/interfaces";
import useClientPhotography from "../hooks/useClientPhotography";
import ClientPasswordForm from "../components/ui/ClientPasswordForm";
import Gallery from "../components/ui/Gallery";

const ClientPasswordProtectedComponent = () => {
  const { client } = useParams<{ client: string }>();

  // TO DO handle wrong password UI and loading fetchClientAlbum: { data, isLoading, error }
  const {
    fetchClientAlbum: { data },
  } = useClientPhotography({ client });
  const [showContent, setShowContent] = useState(false);
  const [password, setPassword] = useState("");
  const [clientData, setClientData] = useState<ClientProps | null>(null);

  useEffect(() => {
    if (data) {
      setClientData(data);
    }
  }, [data]);

  useEffect(() => {
    if (clientData && password === clientData.password) {
      setShowContent(true);
    } else {
      setPassword("");
    }
  }, [password, clientData]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {!showContent ? (
        <ClientPasswordForm setPassword={setPassword} />
      ) : (
        clientData && <Gallery clientData={clientData.albumImageUrls} />
      )}
    </motion.div>
  );
};

export default ClientPasswordProtectedComponent;
