import { DownloadSimple } from 'phosphor-react';
import React from 'react';

interface ISelectImage {
  setImage: (image: string | undefined) => void;
}

export function SelectImage({ setImage }: ISelectImage) {
  function getBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result as string);
      console.log(reader.result);
    };
  }

  return (
    <fieldset className="relative">
      <div className="btn-primary flex h-14 cursor-pointer items-center shadow-sm md:w-[190px]">
        <DownloadSimple size={21} className="mr-2" />
        <div>Carregar imagem</div>
        <input
          type="file"
          accept=".png, .jpeg, .jpg, .gif"
          className="absolute left-0 top-0 h-14 w-full cursor-pointer opacity-0"
          required
          onChange={(event: React.FormEvent) => {
            const target = event.target as HTMLInputElement;
            const file: File = (target.files as FileList)[0];
            getBase64(file);
          }}
        />
      </div>
    </fieldset>
  );
}
