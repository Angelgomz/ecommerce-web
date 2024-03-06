import { ChevronRightIcon } from '@heroicons/react/24/solid';
/* eslint-disable react/prop-types */
const OrdersCard = (props) => {
  const { totalPrice, totalProducts, products, address,name,phone, date } = props;

  return (
    <div className="bg-white p-2 rounded-md shadow-md mb-2">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Order #{totalPrice}</h3>
        <div>
        <p className="text-gray-300">Fecha: {date}</p>
        <p> Estado: por entregar </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-md font-semibold mb-2">Información</h4>
          <p>{name}</p>
          <p>{phone}</p>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-2">Dirección</h4>
          <p>{address}</p>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-md font-semibold mb-2">Productos</h4>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={'storage/'+product.image}
                  alt={product.name}
                  className="w-8 h-8 mr-2"
                />
                <span>{product.name}</span>
              </div>
              <span className='text-nutri'>${product.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex justify-end">
        <p className="text-md font-semibold">Total: ${totalPrice}</p>
      </div>
    </div>
  );
};

export {OrdersCard};