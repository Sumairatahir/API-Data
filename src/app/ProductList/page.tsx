"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const ProductList = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const parsedResponse: Product[] = await response.json();
        setData(parsedResponse);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
      {data.map((product) => (
        <div
          key={product.id}
          className="flex flex-col gap-5 border-2 border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <p className="text-gray-800 font-semibold">Id: {product.id}</p>
          <p className="text-lg font-bold text-blue-600">Title: {product.title}</p>
          <p className="text-green-600 font-medium">Price: ${product.price}</p>
          <p className="text-gray-600 text-sm">Description: {product.description}</p>
          <p className="text-purple-500 font-medium">Category: {product.category}</p>
          <div>
            <strong className="block text-gray-700">Image:</strong>
            
            
            <Image
              src={product.image}
              alt={`Image of ${product.title}`}
              width={200}
              height={200}
              className="w-full h-48 object-contain mt-3 rounded-md border border-gray-200"
            />
          </div>
          <p className="text-yellow-500">
            <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
