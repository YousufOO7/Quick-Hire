"use client";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Category } from "@/app/types/categories";

const ExploreByCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/categories.json");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-semibold mb-4">
          Explore by <span className="text-blue-500">Category</span>
        </h2>
        <p className="text-blue-500 text-[16px]">Show all jobs</p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p>Loading categories...</p>
        ) : (
          categories.map((category, index) => (
            <CategoryCard key={index} categories={category} />
          ))
        )}
      </div>
    </div>
  );
};

export default ExploreByCategory;
