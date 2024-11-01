import Image from 'next/image';
import { FC } from 'react';
import { Data, Link } from '../../types';

const LinkCard: FC<Link> = ({ title, href, image }) => {
  return (
    <a
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center shadow-md p-2 w-full rounded-sm hover:scale-105 transition-all  bg-gray-100  max-w-2xl"
    >
      <div className="flex text-center w-full ">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-full"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center text-2xl font-semibold w-full text-gray-700 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
};

export default LinkCard;
