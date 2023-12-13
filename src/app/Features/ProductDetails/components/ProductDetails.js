import React from "react";
import useFetchDetails from "../hooks/useFetchDetails";
import Image from "next/image";
function ProductDetails({ productId }) {
  const { productDetails } = useFetchDetails(productId);
  return (
    <div className="h-full flex flex-col  border border-primary-red mt-6">
      <div className="  flex  gap-5 justify-between  ">
        <Image
          src={productDetails[0]?.image}
          height={500}
          width={500}
          alt={`image for ${productDetails[0]?.name}`}
        />
        <div className="flex flex-col gap-5 ">
          <h1 className=" text-3xl font-bold">{productDetails[0]?.name}</h1>

          <div className="flex flex-col">
            <h1 className="">Description :</h1>
            <p className="leading-5 text-sm text-gray-400">
              {productDetails[0]?.desc}
            </p>
          </div>
        </div>
      </div>
      <div>
        <span>&#8377;{productDetails[0]?.price}</span>
        <button
          // onClick={handleAddItem}
          className=" text-sm bg-primary-red text-white px-2 py-1 rounded-lg font-medium "
        >
          Add +
        </button>
      </div>
      <div>
        <h1>Nutrition (per serving)</h1>
        {productDetails[0]?.nutrition?.map((list) => (
          <div
            className="leading-5 text-sm"
            dangerouslySetInnerHTML={{ __html: list }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
