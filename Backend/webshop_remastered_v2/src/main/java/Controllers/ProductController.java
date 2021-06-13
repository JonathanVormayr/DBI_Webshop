package Controllers;

import DTOs.ProductDTO;
import Entities.Product;
import Resources.ProductResource;
import Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;


@RestController
@RequestMapping("/products")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService){
        this.productService = productService;
    }

    //Requests
    @GetMapping
    public ResponseEntity<List<ProductResource>> getProducts(){
        List<ProductResource> products = productService.getProducts();
        if(products.size()>0) return new ResponseEntity<>(products, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductResource> getProductWithID(@PathVariable int id){
        Optional<ProductResource> optionalProductResource = productService.getProductByID(id);
        return optionalProductResource.map(productResource -> new ResponseEntity<>(productResource, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ProductResource addProduct(@RequestBody ProductDTO product){
        return productService.addProduct(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductResource> editProduct(@PathVariable int id, @RequestBody ProductDTO product){
        Optional<ProductResource> toEdit = productService.editProduct(id, product);
        return toEdit.map(productResource -> new ResponseEntity<>(productResource, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ProductResource> removeProduct(@PathVariable int id){
        Optional<ProductResource> removedProduct = productService.removeProduct(id);
        return removedProduct.map(productResource -> new ResponseEntity<>(productResource, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

}
