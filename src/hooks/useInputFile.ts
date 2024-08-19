import { ChangeEvent, useState } from "react";

function useInputImage() {
  const [imageFile, setImageFile] = useState<string>();

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageFile(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }

  return { imageFile, handleImageChange };
}

export default useInputImage;
