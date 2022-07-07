import React from 'react';

interface ILoadImage {
  image: string | undefined;
}

export function LoadImage({ image }: ILoadImage) {
  return (
    <div>
      {image !== '' ? (
        <div className="pb-4 md:max-w-[559px] ">
          <img src={image} alt="" className="shadow-smnp rounded-[4px]" />
        </div>
      ) : (
        <div className=" hidden" />
      )}
    </div>
  );
}
