import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router'

const ProductDetailPage = () => {
  const { id } = useParams()

  const [product, setProduct] = useState()

  const navigate = useNavigate()

  // TODO: Imprimir los datos del producto(ej. title, descripción, price, thumbnail y marca) en el return de este producto

  const getProduct = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    // const response = await fetch('https://dummyjson.com/products/' + id) // ❌ No es seguro

    return await response.json()
  }

  useEffect(() => {
    getProduct(id)
      .then(data => setProduct(data))
  }, [])

  const handleBackProductsPage = () => {
    // TODO: Redirigir al listado de productos
    navigate('/products')
  }

  return (
    <main>
      <Link to="/products">Regresar al listado de productos</Link>

      <button onClick={handleBackProductsPage}>Regresar al listado de productos</button>

      <ul>
        <li className="font-bold">ID: {id}</li>
        <li className="font-bold">{product?.title}</li>
        <li>{product?.description}</li>
        <li>S/ {product?.price}</li>
        <li>Marca: {product?.brand}</li>
        <li><img src={product?.thumbnail} /></li>
      </ul>

      <pre>{JSON.stringify(product, null, 2)}</pre>
    </main>
  )
}

export default ProductDetailPage