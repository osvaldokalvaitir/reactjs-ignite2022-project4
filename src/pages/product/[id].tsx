import { useRouter } from 'next/router';

import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum illo possimus nesciunt dignissimos consequuntur distinctio accusantium temporibus explicabo totam. Consequuntur, quam saepe eos facilis blanditiis ab eaque odit asperiores possimus.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}