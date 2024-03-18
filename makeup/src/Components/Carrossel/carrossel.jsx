import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './CarouselComponent.css'; 
 
const CarouselComponent = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
  
    fetchData();
  }, []);

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
              <h3>{product.name}</h3>
                <p>Marca: {product.brand}</p>
                <p>Preço: $ {product.price} {product.currency}</p>
                <p>Descrição: {product.description}</p>
              <img
                className="d-block w-100"
                src={product.image_link}
                alt={product.name}
              />
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
          <Button variant="primary" onClick={handleNextProduct}>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CarouselComponent;
