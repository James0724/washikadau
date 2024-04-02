import React, { Dispatch, SetStateAction } from "react";
import { UploadData } from "../utils/interfaces";

interface StepPropData {
  children: React.ReactNode;
  currentIndex: number;
  // onNextStepOne: (stepData: UploadData) => void;
  // onNextStepTwo: (files: File[]) => void;
  onNext: (stepData: UploadData | File[]) => void;
  onFinish: (finalData: UploadData) => void;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  albumData: UploadData;
}

export default function AddClientAlbum({
  children,
  setCurrentIndex,
  currentIndex,
  onNext,
  albumData,
  onFinish,
}: StepPropData) {
  const goToNext = (stepData: UploadData | File[]) => {
    const childrenCount = React.Children.count(children);

    if (currentIndex < childrenCount - 1) {
      setCurrentIndex((currentIndex) => currentIndex + 1);
    } else {
      onFinish(albumData);
    }
    onNext(stepData);
  };

  const currentchild = React.Children.toArray(children)[currentIndex];

  return (
    <div>
      {React.isValidElement(currentchild)
        ? React.cloneElement(currentchild as React.ReactElement, {
            goToNext,
            albumData,
          })
        : currentchild}
    </div>
  );
}
