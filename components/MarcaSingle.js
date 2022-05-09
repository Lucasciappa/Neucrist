import Image from 'next/image'
import React from 'react'

const MarcaSingle = ({data}) => {
    return (
        <div className="px-5 opacity-70 py-10">
            <Image
                src={`/marcas/${data}.png`}
                alt={`Marca ${data}`}
                width={630}
                height={180}
            />
        </div>
    )
}

export default MarcaSingle