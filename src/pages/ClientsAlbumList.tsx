import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ClientList from "../components/ClientList";
import useClientPhotography from "../hooks/useClientPhotography";
import { ClientProps } from "../utils/interfaces";

function ClientsAlbumList() {
  const [ClientData, setClientData] = useState<ClientProps[]>([]);

  const {
    clientsAlbums: { isLoading, error, data },
  } = useClientPhotography();

  useEffect(() => {
    if (data) {
      setClientData(data);
    }
  }, [data]);
  console.log("data:", data);

  return (
    <div className="client-hero bg-black">
      <div className="shop-hero-script-w">
        <motion.div
          className="shop-hero-script text-6xl font-Expert text-center my-20 text-white"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Client Photography Albums
        </motion.div>
        <div className="home-services__cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pb-10">
          {error && <h1>Error</h1>}
          {isLoading && <h1>loading...</h1>}
          {ClientData?.map((album) => {
            return <ClientList key={album.id} client={album} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ClientsAlbumList;
