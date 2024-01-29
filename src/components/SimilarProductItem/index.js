// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {title, brand, imageUrl, rating, price} = productDetails

  return (
    <li className="similar-product-item">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="similar-image"
      />
      <p className="similar-title">{title}</p>
      <p className="similar-brand">{brand}</p>
      <div className="rating-price-container">
        <p className="similar-price">Rs {price}</p>
        <div className="rating-star-container">
          <p className="similar-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="similar-star-img"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
