"use client";
import { Category } from "@/app/types/categories";
import Image from "next/image";

type CategoryCardProps = {
  categories: Category;
};

const CategoryCard = ({ categories }: CategoryCardProps) => {
  return (
   <div className="p-4 border bg-white hover:bg-blue-600 hover:text-white 
                flex items-center justify-between lg:block">

  {/* LEFT (image + content) */}
  <div className="flex items-center gap-3 lg:block">
    
    {/* Image */}
    <Image
      width={38}
      height={38}
      src={categories?.logo}
      alt={categories.title}
      className="w-9 h-8 object-contain lg:w-16 lg:h-16"
    />

    {/* Text Content */}
    <div className="">
      <h3 className="text-base lg:text-xl font-semibold">
        {categories.title}
      </h3>
      <p className="text-gray-500 text-sm md:text-base flex justify-between">
        {categories.text} <span className="hidden md:block">{categories.arrow}</span>
      </p>
    </div>
  </div>

  {/* RIGHT (arrow for sm/md) */}
  <div className="md:hidden">
    {categories.arrow}
  </div>
</div>
  );
};

export default CategoryCard;
