import { useContext, useEffect, useState } from "react"
import { ShopContext, type ShopContextType } from "../context/ShopContextValue"
import Title from "./Title"
import ProductItems from "./ProductItems"
import type { ProductType } from "../assets/assets"
type RelatedProductsType ={
    category : string
    subCategory : string
}
const RelatedProducts = ({ category, subCategory } : RelatedProductsType) => {

    const { products } = useContext(ShopContext) as ShopContextType
    const [related, setRelated] = useState<ProductType[]>([])

    useEffect(() => {

        if (products.length > 0) {
            let productsCopy : ProductType[] = products.slice()
            productsCopy = productsCopy.filter((item) => category === item.category)
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)

            setRelated(productsCopy.slice(0,5))
        }

    }, [products])
    return (
        <div className="my-24">
            <div className="text-center text-3xl py-2">
                <Title text1="RELATED" text2="PRODUCTS"/>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {related.map((item,index) => (
                    <ProductItems key={index} id={item.id} name={item.name} price={item.price} image={item.image}/>
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts