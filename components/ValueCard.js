import react from "react";
import Image from "next/image";

const ValueCard = ({ id, image, title, alt, desc }) => {
    const valuesImages = [
        <Image
            src={image}
            width={150}
            height={150}
            alt={alt}
            key={id}
        />
    ]

    return (
        <article className="mx-auto max-w-sm bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
            <div className="flex justify-center items-center">
                {valuesImages}
            </div>
            <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                {title}
            </h2>
            <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                {desc}
            </p>
        </article>
    )
}

export default ValueCard;