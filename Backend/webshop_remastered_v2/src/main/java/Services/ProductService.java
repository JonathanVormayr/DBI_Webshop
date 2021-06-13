package Services;

import DTOs.ProductDTO;
import Entities.Product;
import Resources.ProductResource;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    //Klassenvariablen
    private ArrayList<Product> products;
    private int productID;

    //Konstruktor
    public ProductService(){
        products = new ArrayList<>();
        productID = 1;
        initializeTestData();
    }

    @PostConstruct
    private void initializeTestData(){
        products.add(new Product(productID,"testProductOne",20.1, LocalDate.now()));
        productID++;
        products.add(new Product(productID,"testProductTwo",11.0, LocalDate.now()));
        productID++;
        products.add(new Product(productID,"testProductThree",32.21, LocalDate.now()));
        productID++;
    }

    private ProductResource productToProductResource(Product product){
        ProductResource instance = new ProductResource();
        instance.setID(product.getID());
        instance.setProductPrice(product.getProductPrice());
        instance.setProductName(product.getProductName());
        return instance;
    }

    private Optional<Product> getProductByIdLocal(int id){
        return products.stream().filter(x -> x.getID()==id).findFirst();
    }

    public List<ProductResource> getProducts(){
        return products.stream().map(this::productToProductResource).collect(Collectors.toList());
    }

    public Optional<ProductResource> getProductByID(int id){
        Optional<Product> optionalProduct = getProductByIdLocal(id);
        if(optionalProduct.isPresent()){
            Product product = optionalProduct.get();
            return Optional.of(productToProductResource(product));
        }
        return Optional.empty();
    }

    public ProductResource addProduct(ProductDTO product){
       Product instance = new Product(productID, product.getProductName(), product.getProductPrice(), product.getCreationDate());
       productID++;
       products.add(instance);
       return productToProductResource(instance);
    }

    public Optional<ProductResource> editProduct(int id, ProductDTO productDTO){
        Optional<Product> optionalProduct = getProductByIdLocal(id);
        if(optionalProduct.isPresent()){
            Product product = optionalProduct.get();
            if(productDTO.getProductPrice()!=0) product.setProductPrice(productDTO.getProductPrice());
            if(productDTO.getProductName()!= null && !productDTO.getProductName().equals("")) product.setProductName(productDTO.getProductName());
            if(productDTO.getCreationDate()!=null) product.setCreationDate(productDTO.getCreationDate());
            return Optional.of(productToProductResource(product));
        }
        return Optional.empty();
    }

    public Optional<ProductResource> removeProduct(int id){
        Optional<Product> optionalProduct = getProductByIdLocal(id);
        if(optionalProduct.isPresent()){
            Product product = optionalProduct.get();
            products.remove(product);
            return Optional.of(productToProductResource(product));
        }
        return Optional.empty();
    }
}
