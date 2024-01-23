import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { QuantityInput } from "../../Components/QuantityInput";
const Order = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        phone: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };
    const [view, setView] = useState("checkout");
    const context = useContext(ShoppingCartContext);
    console.log(context.account);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
    if (index === "last") index = context.order?.length - 1;
    if (index === "checkout") index = context.cartProducts;
    const [checkout, setCheckout] = useState(context.checkout);
    useEffect(() => {
        setCheckout(context.checkout);
    }, [context.checkout]);
    const renderView = () =>
        view == "checkout" ? (
            <>
                <Link to="/my-orders" className="absolute left-2">
                    <ChevronLeftIcon className="h-6 w-6"></ChevronLeftIcon>
                </Link>
                <div className="flex flex-col p-5">
                    {context.checkout
                        ? checkout.products.map((product, index) => (
                              <div
                                  className="flex border-b border-gray-300 pb-3 m-1"
                                  key={index}
                              >
                                  <div>
                                      <img
                                          className="w-20 h-20"
                                          src={product.image}
                                          alt={product.name}
                                      />
                                  </div>
                                  <div className="px-3 py-1 w-[100%] flex justify-between">
                                      <div>
                                          <div className="font-bolder text-sm mb-2">
                                              {product.title}
                                          </div>
                                          <p className="text-gray-600 text-base">
                                              $ {product.price}
                                          </p>
                                      </div>
                                      <QuantityInput product={product} />
                                  </div>
                              </div>
                          ))
                        : ""}
                    <div className="flex flex-col justify-end items-end">
                        <div className="flex flex-col">
                            Subtotal:{" "}
                            <p className="text-nutri">
                                $ {checkout.totalPrice}
                            </p>
                        </div>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-indigo-600 h-5 w-5"
                            />
                            <span className="ml-2 text-gray-700">
                                acepto términos y condiciones
                            </span>
                        </label>
                        <button
                            className="bg-nutri text-white border-lg p-3"
                            onClick={() => setView("postCheckout")}
                        >
                            Continuar
                        </button>
                    </div>
                    {context.order?.[index]?.products.map((order) => (
                        <OrderCard
                            key={order.id}
                            title={order.title}
                            imageUrl={order.image}
                            price={order.price}
                        />
                    ))}
                </div>
            </>
        ) : (
            <div class="flex flex justify-center items-center">
                <div className="flex flex-col items-end m-1">
                    <h6 class="text-gray"> Información de Énvio </h6>
                    <form className="mt-8" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={context.account.name !== undefined ? context.account.name : formData.name}
                                    onChange={handleChange}
                                    className="w-full border p-2"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName">Apellido</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={context.account.lastname !== undefined ? context.account.lastname : formData.lastname}
                                    onChange={handleChange}
                                    className="w-full border p-2"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="address">Dirección</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={context.account.address !== undefined ? context.account.address : formData.address}
                                onChange={handleChange}
                                className="w-full border p-2"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="city">Ciudad</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={context.account.commune_id !== undefined ? context.account.commune_id : formData.city}
                                    onChange={handleChange}
                                    className="w-full border p-2"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone">
                                    Nro. de Telefono
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={context.account.phone !== undefined ? context.account.phone : formData.phone}
                                    onChange={handleChange}
                                    className="w-full border p-2"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mt-2">
                            <div className="border border-gray-500 p-4 m-1 text-gray flex">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-indigo-600 p-5"
                                />
                                <img
                                    src="https://s3.amazonaws.com/bsalemarket/imagenes/pago_mercado-pago.png"
                                    className="w-40"
                                    alt="Mercado Pago"
                                />
                            </div>
                            <div className="border p-4 border-gray-500 text-gray m-1">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                />
                                &nbsp; Transferencia bancaria
                                <div className="w-[50%]">
                                    <p>Nombre: Juan Pérez</p>
                                    <p>Número de cuenta: 1234567890</p>
                                    <p> Banco: Banco Patogonia</p>
                                    <p> email: juanperez@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button
                                type="submit"
                                className="bg-nutri text-white p-4 rounded-lg"
                            >
                                ENVIAR
                            </button>
                        </div>
                    </form>
                </div>
                <div className="pl-10">
                    {context.checkout
                        ? checkout.products.map((product, index) => (
                              <div
                                  className="flex border-b border-gray-300"
                                  key={index}
                              >
                                  <div className="p-4">
                                      <p> {product.cant}</p>
                                  </div>
                                  <div>
                                      <img
                                          className="w-20 h-20"
                                          src={product.image}
                                          alt={product.name}
                                      />
                                  </div>
                                  <div className="px-3 py-1 w-[100%] flex justify-between">
                                      <div>
                                          <div className="font-bolder text-sm mb-2">
                                              {product.title}
                                          </div>
                                          <p className="font-md text-base text-nutri">
                                              $ {product.price * product.cant}
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          ))
                        : ""}
                    <div className="flex flex-col justify-end items-end">
                        <div className="flex flex-col">
                            Subtotal:{" "}
                            <p className="text-nutri">
                                $ {checkout.totalPrice}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    return (
        <Layout>
            <div className="flex flex-col justify-center w-full">
                <div className="flex items-center justify-center relative m-5">
                    <h1 className="font-medium text-2xl uppercase dark-green flex justify-center items-center">
                        MI ORDEN
                    </h1>
                </div>
                {renderView()}
            </div>
        </Layout>
    );
};

export default Order;
