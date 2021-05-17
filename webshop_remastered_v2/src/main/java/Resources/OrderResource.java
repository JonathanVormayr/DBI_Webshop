package Resources;

import Entities.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OrderResource {
    private int ID;
    private LocalDateTime orderDate;
    private int user_ID;
    private ArrayList<Product> orderProducts;
}