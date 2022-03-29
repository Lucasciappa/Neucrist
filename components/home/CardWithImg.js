import React from "react";
import Button from "../Button";
import Image from "next/image";

const CardWithImg = ({
  title,
  body,
  image,
  textColor,
  background,
  btnDark,
  btnMsg
}) => {
  return (
    <section className="py-6 lg:py-2 lg:m-2">
      <div className="grid grid-rows-1 lg:mx-3 lg:py-3 lg:grid-rows-none lg:grid-cols-2">
        {image.left && (
          <div
            data-testid="image-left"
            className="hidden lg:block bg-white h-72 lg:h-full lg:w-full relative"
          >
            <Image
              src={image.url}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div
          className="bg-no-repeat bg-fixed bg-cover bg-top lg:h-auto"
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <div
            className={`px-5 py-8 md:py-16 lg:py-20 md:px-8 ${background} bg-opacity-90 lg:h-auto`}
          >
            <div className={`flex flex-col justify-center h-full md:mx-7`}>
              <p
                className={`${textColor} text-3xl leading-tight font-semibold py-2`}
              >{`${title}`}</p>
              {body.map((data, i) => {
                return (
                  <p
                    key={i}
                    className={`${textColor} text-md leading-snug py-3`}
                  >
                    {data}
                  </p>
                );
              })}
              <div className="py-5 pt-10">
                {/* <Link href="/ventajas" passHref> */}
                {btnDark ? (
                  <Button
                    link="/ventajas"
                    title={`${btnMsg}`}
                    background="bg-primary-black"
                  />
                ) : (
                  <Button
                    link="/ventajas"
                    title={`${btnMsg}`}
                    background="bg-primary-red"
                  />
                )}
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>

        {image.left && (
          <div className="lg:hidden bg-white h-72 lg:h-full lg:w-full object-center relative">
            <Image
              src={image.url}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        {!image.left && (
          <>
            <div className="lg:hidden bg-white h-72 lg:h-full lg:w-full row-span-2 lg:row-auto object-center relative">
              <Image
                src={image.url}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="hidden lg:block max-h-full object-center relative">
              <Image
                src={image.url}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CardWithImg;