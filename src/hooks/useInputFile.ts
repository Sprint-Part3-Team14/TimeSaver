import { ChangeEvent, useState } from "react";

function useInputImage(apiCallback?: ({ file }: { file: File }) => void) {
  const [imageUrl, setImageUrl] = useState<string>();
  const [imageFile, setImageFile] = useState<string>();

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      if (apiCallback) {
        apiCallback({ file });
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }

  function handleSetFile(fileUrl: string) {
    setImageFile(fileUrl);
  }

  function handleSetUrl(imageUrl: string) {
    setImageUrl(imageUrl);
  }

  return { imageUrl, handleImageChange, imageFile, handleSetFile, handleSetUrl };
}

export default useInputImage;
