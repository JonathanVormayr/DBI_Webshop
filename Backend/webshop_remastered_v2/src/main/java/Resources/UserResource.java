package Resources;

import Entities.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserResource{
    private int ID;
    private String firstname;
    private String lastname;
    private String email;
    private ArrayList<Product> cart;
}