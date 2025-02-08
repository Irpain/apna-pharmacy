package com.stackroute.productservice.serviceImpl;

import com.stackroute.productservice.config.Producer;
import com.stackroute.productservice.config.ProductDTO;
import com.stackroute.productservice.entity.Product;
import com.stackroute.productservice.exception.IdNotFoundException;
import com.stackroute.productservice.exception.ProductNotFoundException;
import com.stackroute.productservice.repository.ProductRepository;
import com.stackroute.productservice.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class ProdcutServiceImpl implements ProductService {

    @Autowired
    ProductRepository Repository;

    @Autowired
    Producer producer;

    @Override
    public Product addProduct(Product product) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setProductId(product.getProductId());
        productDTO.setProductImage(product.getProductImage());
        productDTO.setProductBrand(product.getProductBrand());
        productDTO.setProductName(product.getProductName());
        productDTO.setProductCategory(product.getProductCategory());
        productDTO.setProductDescription(product.getProductDescription());
        productDTO.setSellerEmail(product.getSellerEmail());
        productDTO.setProductPrice(product.getProductPrice());
        producer.sendMessageToRabbitMq(productDTO);
        Product savedProduct = Repository.save(product);
        return savedProduct;
    }

//        boolean x = Repository.existsByProductId(productId);
//        Product productfromRepo = null;
//        if (!x) {
//            try {
//                throw new ProductNotFoundException("product not found");
//            } catch (ProductNotFoundException e) {
//                throw new RuntimeException(e);
//            }
//        } else {
//            // productfromRepo = productRepository.findByProductName(productName);
//            productfromRepo = Repository.findById(productId).get();
//            try {
//                log.info("In Service Class for Add Method for adding Image");
//                productfromRepo.setProductImage(new Binary(BsonBinarySubType.BINARY, multipartFile.getBytes()));
//                Repository.save(productfromRepo);
//                log.info("In Service Class for Add Method for adding Image sucessfull");
//
//            } catch (IOException e) {
//                throw new RuntimeException(e);
//            }
//
//        }
//        return productfromRepo;
//    }

    @Override
    public List<Product> getAllProduct() {
        return Repository.findAll();
    }
    @Override
    public Product getProductById(String productId) {
        Optional<Product> productFromRepo = Repository.findById(productId);
        if (productFromRepo.isPresent()) {
            return productFromRepo.get();
        } else {
            throw new IdNotFoundException("SERVICE.PRODUCT_NOT_FOUND");
        }
    }
    @Override
    public String deleteProductById(String productId) {
        if (!Repository.existsById(productId)) {
            throw new IdNotFoundException("SERVICE.PRODUCT_NOT_FOUND");
        }
        Repository.deleteById(productId);
        return "Product deleted successfully";
    }
    @Override
    public List<Product> getProductBySellerEmail(String sellerEmail) {
        return Repository.findBySellerEmail(sellerEmail);
    }

    @Override
    public Product updateProductById(Product product) {
        Optional<Product> productDb = Repository.findById(product.getProductId());
        Product updatedProduct = null;
        if (productDb.isPresent()) {
            Product productFromRepo = productDb.get();
            productFromRepo.setProductName(product.getProductName());
            productFromRepo.setSellerEmail(product.getSellerEmail());
            productFromRepo.setProductPrice(product.getProductPrice());
            productFromRepo.setProductCategory(product.getProductCategory());
            productFromRepo.setProductDescription(product.getProductDescription());
            productFromRepo.setProductBrand(product.getProductBrand());

            updatedProduct = Repository.save(productFromRepo);
        } else {
            throw new IdNotFoundException("SERVICE.PRODUCT_NOT_FOUND");
        }

        return updatedProduct;
    }


}

