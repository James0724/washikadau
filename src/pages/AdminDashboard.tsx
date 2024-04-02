import React, { useState } from "react";
import AddClientAlbum from "../components/AddClientAlbum";
import StepOneDataForm from "../components/StepOneDataForm";
import StepTwoImageForm from "../components/StepTwoImagesForm";
import useClientPhotography from "../hooks/useClientPhotography";
import { UploadData } from "../utils/interfaces";
import StepThreeUploadForm from "../components/StepThreeUploadForm";

export default function AdminDashboard() {
  const [albumData, setAlbumData] = useState<UploadData>({
    name: "",
    password: "",
    coverImage: undefined,
    files: [],
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const { addClientAlbum } = useClientPhotography();

  const onNext = (stepData: UploadData | File[]) => {
    const filesRecord: File[] = [];

    if (Array.isArray(stepData)) {
      stepData.forEach((file) => {
        filesRecord.push(file);
      });

      setAlbumData((prevAlbumData) => ({
        ...prevAlbumData,
        files: filesRecord,
      }));
    } else {
      setAlbumData((prevAlbumData) => ({
        ...prevAlbumData,
        ...stepData,
      }));
    }
  };

  const onFinish = () => {
    addClientAlbum.mutate(albumData, {
      onSuccess: () => {
        console.log("success");
      },
      onError: () => {
        console.log("error");
      },
    });
  };

  return (
    <AddClientAlbum
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      albumData={albumData}
      onNext={onNext}
      onFinish={onFinish}
    >
      <StepOneDataForm />
      <StepTwoImageForm />
      <StepThreeUploadForm onFinish={onFinish} />
    </AddClientAlbum>
  );
}
