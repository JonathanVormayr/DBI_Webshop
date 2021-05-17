package Controllers;

import Entities.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;

@RestController
@RequestMapping("/orders")
public class OrderController {


    @GetMapping
    public ResponseEntity<ArrayList<Order>> getOrders(){
        if(orders.size()>0) return new ResponseEntity<>(orders, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable int id){
        try{
            Order searched = orders.get(id);
            return new ResponseEntity<>(searched, HttpStatus.OK);
        }catch(Exception ex){
         return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Order> addOrder(@RequestBody Order order){
        if(order != null && order.getOrderDate() != null && order.getUser_ID() != 0){
            order.setID(orderID);
            orderID++;
            orders.add(order);
            return new ResponseEntity<>(order, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_ACCEPTABLE);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> editOrder(@PathVariable int id, @RequestBody Order order){
        Order searched = getOrderById(id).getBody();
        if(searched != null && order != null){
            if(order.getOrderDate() != null) searched.setOrderDate(order.getOrderDate());
            if(order.getOrderProducts() != null && order.getOrderProducts().size()>0) searched.setOrderProducts(order.getOrderProducts());
            if(order.getUser_ID() != 0) searched.setUser_ID(order.getUser_ID());
            return new ResponseEntity<>(searched, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Order> removeOrder(@PathVariable int id){
        Order searched = getOrderById(id).getBody();
        if(searched != null){
            orders.remove(searched);
            return new ResponseEntity<>(searched, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


}
