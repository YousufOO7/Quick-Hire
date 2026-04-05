"use client";
import { Category } from "@/app/types/categories";
import Image from "next/image";

type CategoryCardProps = {
  categories: Category;
};

const CategoryCard = ({ categories }: CategoryCardProps) => {
  return (
    <div className="p-4 border bg-white">
      <Image
        width={48}
        height={48}
        src={categories?.logo}
        alt={categories.title}
        className="w-16 h-16 object-contain"
      />
      <div>
        <h3 className="text-xl font-semibold">{categories.title}</h3>
        <p className="text-gray-500">
          {categories.text} <span>{categories.arrow}</span>
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
