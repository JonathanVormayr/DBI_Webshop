package Entities;

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
public class User {
    private int ID;
    private String firstname;
    private String lastname;
    private String email;
    private ArrayList<Product> cart;
    private LocalDate creationDate;
}
