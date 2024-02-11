import { Avatar } from "flowbite-react";
import React from "react";
import { FaStar } from "react-icons/fa6";
import profileImage from "../assets/Book_Images/profile_image.jpg";
export default function ReviewUsable() {
  return (
    <div
      className="flex flex-col items-start space-y-6 mb-10 bg-gray-200 p-6 rounded-lg text-center hover:bg-white hover:transition-all hover:shadow-md
    hover:shadow-black/75"
    >
      <div className="text-amber-500 flex gap-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="mt-6 text-left">
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          molestiae numquam sequi unde repellat distinctio accusantium maxime
          accusamus inventore voluptatibus id, animi debitis facilis ipsam
          deleniti dicta eum eveniet molestias.
        </p>
        <div className="flex items-center mb-4 gap-3">
          <Avatar
            alt="avatar of Jese"
            img={profileImage}
            rounded
            className="w-10 mr-2"
          />
          <div>
            <h5 className="text-lg font-medium">Naya Ping</h5>
            <p className="text-base">CEO, ABC Company</p>
          </div>
        </div>
      </div>
    </div>
  );
}
