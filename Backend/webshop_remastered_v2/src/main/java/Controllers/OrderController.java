package Controllers;

import DTOs.OrderDTO;
import Entities.Order;
import Resources.OrderResource;
import Services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.time.LocalDate;
import java.time.LocalDateTime;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {
    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService){
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<OrderResource>> getOrders(){
        List<OrderResource> orders = orderService.getOrders();
        if(orders.size()>0) return new ResponseEntity<>(orders, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderResource> getOrderById(@PathVariable int id){
            Optional<OrderResource> searched = orderService.getOrderByID(id);
        return searched.map(productResource -> new ResponseEntity<>(productResource, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public OrderResource addOrder(@RequestBody OrderDTO order){
        return orderService.addOrder(order);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> editOrder(@PathVariable int id, @RequestBody Order order){
       return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Order> removeOrder(@PathVariable int id){
        return null;
    }

}
