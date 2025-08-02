import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContextValue"
import Title from "./Title";
import type { ProductType } from "../assets/assets";
import ProductItems from "./ProductItems";


const LatestCollction = () => {
    const {products} = useContext(ShopContext)!;
    const [latestProduct, setLatestProduct] = useState<ProductType[]>([])

    useEffect(() => {
        setLatestProduct(products.slice(0,10))
    },[products])
  return (
    <div className="my-10">
        <div className="text-center py-8 text-3xl">
            <Title text1={"LATEST"} text2={"COLLECTION"}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sint nobis tempore, expedita pariatur dolorum alias possimus ab assumenda sunt dolor libero natus ipsam eligendi doloremque voluptate quis, ipsa voluptatem?
            </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {latestProduct.map((item,index) => (
                <ProductItems key={index} id ={item.id} image={item.image} name={item.name}  price={item.price}/>
            ))}
        </div>
    </div>
  )
}

export default LatestCollction