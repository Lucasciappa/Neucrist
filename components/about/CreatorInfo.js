import React from "react";

const CreatorInfo = () => {
    return (
        <>
            <section className="grid lg:grid-cols-2 sm:grid-cols-2">
                <div className="flex flex-col justify-center items-center m-5">
                    <img
                        className="h-40 rounded-full"
                        src="/images/transparentes/fotovacia.webp"
                    />
                    <p
                        className="text-primary-red font-semibold text-lg">
                        Micaela Rosillo
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center m-5">
                    <img
                        className="h-40 rounded-full"
                        src="/images/transparentes/rocket.png"
                    />
                    <p
                        className="text-primary-red font-semibold text-lg">
                        Nacidos en 2020
                    </p>
                </div>
            </section>
        </>
    )
}

export default CreatorInfo;