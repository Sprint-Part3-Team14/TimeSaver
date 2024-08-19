import { ChangeEvent, useState } from "react";

function useInputImage(apiCallback?: ({ file }: { file: File }) => void) {
  const [imageUrl, setImageUrl] = useState<string>();
  const [imageFile, setImageFile] = useState<File>();

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      if (apiCallback) {
        apiCallback({ file });
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }

  return { imageUrl, handleImageChange, imageFile };
}

export default useInputImage;
