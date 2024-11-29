package com.uok.se.backend_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//Indicates that this class is a Spring MVC controller and that the return values of methods should be automatically serialized to JSON.
@RestController
@CrossOrigin(origins = "http://localhost:3000")
//Allows cross-origin requests from a specific frontend, which is important for enabling the frontend running on a different port to communicate with the backend.
public class ProductController {

    private ProductRepository productRepository;

    @Autowired //Automatically injects dependencies
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/products")
    public List<Product> getAllProducts() {

        return productRepository.findAll();

    }

    @GetMapping("/products/{id}")
    public Optional<Product> getProduct(@PathVariable("id") int id){//pp

        return productRepository.findById(id);

    }


    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product) { //Binds the request body of an HTTP request to a method parameter

        productRepository.save(product);

        return product;

    }

    @PutMapping("/product/{id}")
    public Product editProduct(@PathVariable("id") int id,  @RequestBody Product product) throws Exception {

        Product exitproduct = productRepository.findById(id).orElseThrow(() -> new Exception("Product not found with id: " + id));

        if(exitproduct == null){
            return null;
        }

        exitproduct.setName(product.getName());
        exitproduct.setDescription(product.getDescription());
        exitproduct.setPrice(product.getPrice());

        productRepository.save(exitproduct);

        return exitproduct;
    }

    //todo: try to follow the same approach and create the OrderController.
    // add new order, edit order, change the status of an order

    //todo: try to create a frontend e-commerce application for this using react.

}
