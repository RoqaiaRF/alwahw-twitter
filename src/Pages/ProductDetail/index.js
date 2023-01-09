import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon, StarIcon } from "@heroicons/react/solid";
import Spinner from "../../Components/Spinner";
import { useProduct } from "../../Context/ProductContext";
import { useCart } from "../../Context/CartContext";
import { useFavorite } from "../../Context/FavoriteContext";
import styles from "./styles.module.css";
import SimpleImageSlider from "react-simple-image-slider";

import { AiOutlineWhatsApp } from "react-icons/ai";



const ProductDetail = () => {
 
  const { addToCart, items } = useCart();
  // const { addToFavorite, favoriteItems } = useFavorite();
  const { product, loading, setProductID } = useProduct();

  const findCartItem = items.find((item) => item.id === product.id);
  // const findFavoriteItem = favoriteItems.find((item) => item.id === product.id);

  const { product_id } = useParams();

  const whatssapNumber = ()=> {
    if (product_id == "4"){
    return "962779243364"
  } else {
    return "96279590409"
  }
}
  useEffect(() => {
    setProductID(product_id);
  }, []);

  return (
    <>
      {!loading && product?.id ? (
        <div className="flex flex-wrap max-w-7xl mx-auto my-4">
          <div className="w-full sm:w-2/2 md:w-2/2 xl:w-5/5 p-4 flex flex-wrap">
            {/* <img alt="ecommerce" className={styles.image} src={product.image} /> */}

            <SimpleImageSlider
              showNavs="true"
              showBullets={true}
              width={350}
              height={400}
              images={product.images}
              style={{ margin: "0 auto", marginTop: "50px" }}
            />

            <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 my-auto">
              <h1 className="text-gray-900 text-2xl font-bold tracking-tight mb-1">
                {product.title}
              </h1>
              <div className={styles.rating} title={product?.rating?.rate}>
                {[...Array(Math.round(product?.rating?.rate))].map((e, i) => (
                  <StarIcon
                    key={`star-${i}`}
                    className={styles.starIcon}
                    aria-hidden="true"
                  />
                ))}
                {[...Array(5 - Math.round(product?.rating?.rate))].map(
                  (e, i) => (
                    <StarIcon
                      key={`empty-star-${i}`}
                      className={styles.emptyStarIcon}
                      aria-hidden="true"
                    />
                  )
                )}
                <p className="text-xs ml-1 font-light mt-0.5">
                  ({product?.rating?.count})
                </p>
              </div>

              <div className="block ml-auto my-auto mt-0">
                  {/* زر الطلب بالواتساب 
                  https://api.whatsapp.com/send?phone=962799849386&text=%F0%9F%A4%A9%F0%9F%A4%A9r3rc
                  
                  */}
                   {}
                  <a
                    aria-label="ارسل طلبك بالواتساب<"
                    href={
                      "https://api.whatsapp.com/send/?phone=962779243364" +"&text=" +
                      " مرحبا  أرغب بشراء " +
                      encodeURIComponent(product.title)+ "+&type=phone_number&app_absent=0"
                    }
                  >
                    <button className={styles.whatssappButton}>

                      <div className="flex flex-col self-center"></div>
                      <span className={styles.buttonText}>
                        {" "}
                        أرسل طلبك بالواتساب
                      </span>
                      <AiOutlineWhatsApp />

                    </button>

                    {/* <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.png" />  */}
                  </a>
                </div>

                
              <p
                className={styles.productDetailText}
                white-space="pre-line"
                vertical-align="bottom"
              >
                {product.description}
              </p>
              <div className="flex-col">
                <div className="my-auto">
                  <span>دينار </span>
                  <span className="font-extralight text-2xl inline-block align-middle mt-2 my-auto">
                    {product.price}
                  </span>
                </div>
                <div className="block ml-auto my-auto mt-0">
                  {/* زر الطلب بالواتساب 
                  https://api.whatsapp.com/send?phone=962799849386&text=%F0%9F%A4%A9%F0%9F%A4%A9r3rc
                  
                  */}
                   {}
                  <a
                    aria-label="ارسل طلبك بالواتساب<"
                    href={
                      "https://api.whatsapp.com/send/?phone=962779243364" +"&text=" +
                      " مرحبا أرغب بشراء " +
                      encodeURIComponent(product.title)+ "+&type=phone_number&app_absent=0"
                    }
                  >
                    <button className={styles.whatssappButton}>

                      <div className="flex flex-col self-center"></div>
                      <span className={styles.buttonText}>
                        {" "}
                        أرسل طلبك بالواتساب
                      </span>
                      <AiOutlineWhatsApp />

                    </button>

                    {/* <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.png" />  */}
                  </a>
                </div>
                {/* <div className="block ml-auto my-auto mt-0">
                  {" "}
                  <div className={styles.addToCart}>
                    <button
                      className={styles.addToCartButton}
                      onClick={() => addToCart(product, findCartItem)}
                    >


                      <div className="flex flex-col self-center">
                        <span className={styles.buttonText}>
                          {findCartItem ? "حذف من السلة" : "اضافة للسلة"}
                        </span>
                      </div>
                      <ShoppingCartIcon
                        className={styles.shoppingCartIcon}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div> */}



                {/* <div className="block my-auto">
                   <button
                      className={
                        !findFavoriteItem
                          ? styles.favButton
                          : styles.removeFavButton
                      }
                      onClick={() => {
                        addToFavorite(product, findFavoriteItem);
                      }}
                    >
                      <HeartIcon className={styles.heartIcon} />
                    </button> 
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ProductDetail;
