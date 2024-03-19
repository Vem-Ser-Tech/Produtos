import React, { useState, useEffect, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './CarouselComponent.css'; 
import CardProdutos from '../Card/Card';
import ProductsContext from '../../Contexts/ProductsContext ';
 
const CarouselComponent = () => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const {products} = useContext(ProductsContext);

  useEffect(() => {
    console.log('products: ',products);
    console.log('showModal: ',showModal);
  }, [products, showModal]);

  const handleOpenModal = (index) => {
    setSelectedProductIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePreviousProduct = () => {
    setSelectedProductIndex((prevIndex) => {
      if (prevIndex === 0) {
        return products.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNextProduct = () => {
    setSelectedProductIndex((prevIndex) => {
      if (prevIndex === products.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <>
      <div className="carousel-container"> 
        <Carousel className="custom-carousel" interval={null}> 
          {products.map((product, index) => (
            <Carousel.Item key={index} onClick={() => handleOpenModal(index)}> 
              <CardProdutos product={product}></CardProdutos>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>  
    
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{products[selectedProductIndex]?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="d-block w-100"
            src={products[selectedProductIndex]?.image_link}
            alt={products[selectedProductIndex]?.name}
          />
          <p>{products[selectedProductIndex]?.description}</p>
          <p>$ {products[selectedProductIndex]?.price}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePreviousProduct}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <Button variant="secondary" onClick={handleNextProduct}>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CarouselComponent;
