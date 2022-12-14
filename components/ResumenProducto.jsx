import Image from "next/image";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

const ResumenProducto = ({ producto }) => {
    const { handleEditarCantidades, handleEliminarProducto } = useQuiosco();

    return (
        <div className="shadow p-5 flex gap-10 items-center">
            <div className="md:w-1/6">
                <Image
                    width={300}
                    height={400}
                    alt={`Imagen producto ${producto.nombre}`}
                    src={`/assets/img/${producto.imagen}.jpg`}
                />
            </div>
            <div className="md:w-3/6">
                <p className="text-3xl font-bold">{producto.nombre}</p>
                <p className="text-xl font-bold mt-2">Cantidad: {producto.cantidad}</p>
                <p className="text-xl font-bold text-amber-400 mt-2">Precio: {formatearDinero(producto.precio)}</p>
                <p className="text-2xl font-bold text-amber-500 mt-2">Subtotal: {formatearDinero(producto.precio * producto.cantidad)}</p>
            </div>
            <div className="md:w-1/6">
                <button
                    className="bg-sky-700 flex gap-2 px-2 py-2 w-50 text-white text-center rounded-md font-bold uppercase shadow-md w-full"
                    onClick={() => handleEditarCantidades(producto.id)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    Editar
                </button>
                <button
                    className="bg-red-700 flex gap-2 px-2 py-2 mt-3 w-50 text-white text-center rounded-md font-bold uppercase shadow-md w-full"
                    onClick={() => handleEliminarProducto(producto.id)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default ResumenProducto