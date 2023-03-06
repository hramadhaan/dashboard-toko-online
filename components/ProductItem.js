import FormatCurrency from "@/utils/FormatCurrency";
import Link from "next/link";
import React from "react";
import { FiBook, FiEdit, FiShoppingBag, FiTrash2 } from "react-icons/fi";

/**
 *
 * @param {Object} props
 * @param {String} [props.name]
 * @param {Number} [props.price]
 * @param {String} [props.category]
 * @param {Number} [props.stock]
 * @param {String} [props.status]
 * @param {String} [props.productId]
 * @returns
 */

function ProductItem(props) {
  return (
    <div className="flex flex-row items-center justify-between bg-white py-2 rounded-md">
      <div>
        <label className="p-1 bg-[#DADEFA] rounded-md text-sm font-normal text-[#475BE8]">
          {FormatCurrency(props.price)}
        </label>
        <p className="font-semibold text-[#11142D] mt-1">{props.name}</p>
        <div className="flex flex-row items-center gap-x-2 mb-2">
          <div className="flex flex-row items-center">
            <FiShoppingBag color="#808191" />
            <label className="ml-1 text-[#808191]">{props.category}</label>
          </div>
          <div className="flex flex-row items-center">
            <FiBook color="#808191" />
            <label className="ml-1 text-[#808191]">{props.stock} stock</label>
          </div>
        </div>
        <span className="text-[#11142D] font-semibold">
          Status: {props.status}
        </span>
      </div>
      <div className="flex flex-row items-center gap-x-2">
        <Link
          href={{
            pathname: `/products/${props.productId}`,
            query: { name: props.name },
          }}
        >
          <div className="px-4 py-2 bg-[#475BE8] rounded-md cursor-pointer">
            <FiEdit size={16} color="white" />
          </div>
        </Link>
        <div className="px-4 py-2 bg-[#F45252] rounded-md cursor-pointer">
          <FiTrash2 size={16} color="white" />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
