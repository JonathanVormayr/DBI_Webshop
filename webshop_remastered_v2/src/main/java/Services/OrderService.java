package Services;

import DTOs.OrderDTO;
import Entities.Order;
import Resources.OrderResource;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {
    private ArrayList<Order> orders;
    private int orderID;

    public OrderService(){
        orders = new ArrayList<>();
        orderID = 1;
        initializeTestData();
    }

    private void initializeTestData() {
        orders.add(new Order(orderID, LocalDateTime.now(), 1, new ArrayList<>(), LocalDate.now()));
        orderID++;
        orders.add(new Order(orderID, LocalDateTime.now(), 3, new ArrayList<>(), LocalDate.now()));
        orderID++;
        orders.add(new Order(orderID, LocalDateTime.now(), 2, new ArrayList<>(), LocalDate.now()));
        orderID++;
    }

    private OrderResource orderToOrderResource(Order order){
        OrderResource instance = new OrderResource();
        instance.setID(order.getID());
        instance.setOrderDate(order.getOrderDate());
        instance.setOrderProducts(order.getOrderProducts());
        instance.setUser_ID(order.getUser_ID());
        return instance;
    }

    private Optional<Order> getOrderByIDLocal(int id){
        return orders.stream().filter(x -> x.getID()==id).findFirst();
    }

    public List<OrderResource> getOrders(){
        return orders.stream().map(this::orderToOrderResource).collect(Collectors.toList());
    }

    public Optional<OrderResource> getOrderByID(int id){
        Optional<Order> optionalOrder = getOrderByIDLocal(id);
        if(optionalOrder.isPresent()){
            return Optional.of(orderToOrderResource(getOrderByIDLocal(id).get()));
        }
        return Optional.empty();
    }

    public OrderResource addOrder(OrderDTO orderDTO){
        Order order = new Order(orderID, orderDTO.getOrderDate(), orderDTO.getUser_ID(), orderDTO.getOrderProducts(), LocalDate.now());
        orders.add(order);
        return orderToOrderResource(order);
    }


}
