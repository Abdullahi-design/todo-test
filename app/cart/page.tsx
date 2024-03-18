'use client'

import { IoMdClose } from "react-icons/io";
import { FaBowlRice, FaCheck, FaRegImage } from "react-icons/fa6";
import { FiLoader } from "react-icons/fi";
import { MdRemoveShoppingCart } from "react-icons/md";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCart } from '../hooks/use-cart'
import Checkout from "@/components/Checkout";

const Page = () => {
    const { items, removeItem, updateItemQuantity } = useCart()
    const [isLoading, setIsLoading] = useState(false)

    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (id: string, newQuantity: number) => {
        // Ensure new quantity is not less than 1
        if (newQuantity < 1) {
            newQuantity = 1;
        }
        // Update local state to reflect the change
        setQuantities({ ...quantities, [id]: newQuantity });
        // Update quantity in the cart
        updateItemQuantity(id, newQuantity);
    };

  // const router = useRouter()

  // const { mutate: createCheckoutSession, isLoading } =
  //   trpc.payment.createSession.useMutation({
  //     onSuccess: ({ url }) => {
  //       if (url) router.push(url)
  //     },
  //   })

  // const productIds = items.map(({ food }) => food.id)
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0); 

  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cartTotal = items.reduce(
    (total, { food, quantity }) => total + (food.price * quantity),
    0
  );  

  const fee = 300;

  return (
    <div className='bg-white mt-4'>
      <div className='mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Transaction Break Down
        </h1>

        <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16'>
          <div
            className={'lg:col-span-7 rounded-lg border-2 border-dashed border-zinc-200 p-12'}>
            <h2 className='sr-only'>
              Items in your shopping cart
            </h2>

            {isMounted && items.length === 0 ? (
              <div className='flex h-full flex-col items-center justify-center space-y-1'>
                <div
                  aria-hidden='true'
                  className='relative mb-4 h-fit w-fit text-muted-foreground'>
                  <MdRemoveShoppingCart className="w-20 h-20" />
                </div>
                <h3 className='font-semibold text-2xl'>
                  Your cart is empty
                </h3>
                <p className='text-muted-foreground text-center'>
                  Whoops! Nothing to show here yet.
                </p>
              </div>
            ) : null}

            <ul
              className={'divide-y divide-gray-200 border-b border-t border-gray-200'}>
              {isMounted &&
                items.map(({ food, quantity }: { food: any, quantity: number }) => {
                  // const label = PRODUCT_CATEGORIES.find(
                  //   (c) => c.value === food.category
                  // )?.label

                  // const { image } = food.coverImage

                  return (
                    <li
                      key={food.id}
                      className='flex py-6 sm:py-10'>
                        <span className=''><FaBowlRice className='w-12 h-12 text-center mx-auto text-orange-600' /></span>

                        <div className='ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
                            <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                                <div>
                                    <div className='flex justify-between'>
                                    <h3 className='text-sm'>
                                        <Link
                                        href={`/food/${food.id}`}
                                        className='font-medium text-gray-700 hover:text-gray-800'>
                                        {food.name}
                                        </Link>
                                    </h3>
                                    </div>

                                    {/* <div className='mt-1 flex text-sm'>
                                    <p className='text-muted-foreground'>
                                        Category: {label}
                                    </p>
                                    </div> */}

                                    <p className='mt-1 text-sm font-medium text-gray-900'>
                                    ₦{food.price}
                                    </p>
                                    {/* <p className='mt-1 text-sm font-medium text-gray-900'>
                                    <span className=" font-normal">quantity:</span> {quantity}
                                    </p> */}
                                    <div className="flex mt-1 text-sm font-medium text-gray-900">
                                        <label className="font-normal mt-1">Quantity:</label>
                                        <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => handleQuantityChange(food.id, parseInt(e.target.value))}
                                        className="form_input"
                                        />
                                    </div>
                                </div>

                                <div className='mt-4 sm:mt-0 sm:pr-9 w-20'>
                                    <div className='absolute right-0 top-0'>
                                    <button
                                        aria-label='remove food'
                                        onClick={() =>
                                        removeItem(food.id)
                                        }
                                        className='w-fit px-4 py-2 border border-primary-orange hover:text-white hover:bg-primary-orange rounded-md font-satoshi text-xl text-gray-700'
                                        >
                                        <IoMdClose
                                        className='h-5 w-5'
                                        aria-hidden='true'
                                        />
                                    </button>
                                    </div>
                                </div>
                            </div>

                            {food.status == 'Active' && (
                            <p className='mt-4 flex space-x-2 text-sm text-gray-700'>
                                <FaCheck className='h-5 w-5 flex-shrink-0 text-green-500' />

                                <span>
                                Eligible for instant delivery
                                </span>
                            </p>
                            )}
                        </div>
                    </li>
                  )
                })}
            </ul>
          </div>

          <section className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
            <h2 className='text-lg font-medium text-gray-900'>
              Order summary
            </h2>

            <div className='mt-6 space-y-4'>
              <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-600'>
                  Subtotal
                </p>
                <p className='text-sm font-medium text-gray-900'>
                  {isMounted ? (
                    cartTotal
                  ) : (
                    <FiLoader className='h-4 w-4 animate-spin text-muted-foreground' />
                  )}
                </p>
              </div>

              <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <span>Delivery Fee</span>
                </div>
                <div className='text-sm font-medium text-gray-900'>
                  {isMounted ? (
                    <span>₦{fee}</span>
                  ) : (
                    <FiLoader className='h-4 w-4 animate-spin text-muted-foreground' />
                  )}
                </div>
              </div>
              <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <span>Quantity</span>
                </div>
                <div className='text-sm font-medium text-gray-900'>
                  {isMounted ? (
                    <span>{totalQuantity}</span>
                  ) : (
                    <FiLoader className='h-4 w-4 animate-spin text-muted-foreground' />
                  )}
                </div>
              </div>

              <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                <div className='text-base font-medium text-gray-900'>
                  Order Total
                </div>
                <div className='text-base font-medium text-gray-900'>
                  {isMounted ? (
                    <span>₦{(cartTotal + fee)}</span>
                  ) : (
                    <FiLoader className='h-4 w-4 animate-spin text-muted-foreground' />
                  )}
                </div>
              </div>
            </div>

            <div className='mt-6'>
              <Checkout cartTotal={cartTotal} fee={fee} items={items} />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Page
