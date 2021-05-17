package Services;

import DTOs.UserDTO;
import Entities.User;
import Resources.UserResource;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.awt.*;
import java.lang.reflect.Array;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
    private ArrayList<User> users;
    private int userID = 1;

    @PostConstruct
    private void initializeTestData() {
        users = new ArrayList<>();
        userID = 1;
        users.add(new User(userID,"Max","Mustermann","Max_Mustermann@gmail.com", new ArrayList<>(), LocalDate.now()));
        userID++;
        users.add(new User(userID,"Hermine","Testhermine","Hermine_Testhermine@gmail.com",new ArrayList<>(),LocalDate.now()));
        userID++;
        users.add(new User(userID, "Nummer3", " Zachi", "Nummer3_Zachi@gmail.com",new ArrayList<>(),LocalDate.now()));
        userID++;
    }

    private UserResource userToUserResource(User user){
        UserResource instance = new UserResource();
        instance.setID(user.getID());
        instance.setCart(user.getCart());
        instance.setFirstname(user.getFirstname());
        instance.setLastname(user.getLastname());
        return instance;
    }

    public ArrayList<UserResource> getUsers(){
        return (ArrayList<UserResource>) users.stream().map(this::userToUserResource).collect(Collectors.toList());
    }

    private Optional<User> getUserByIDLocal(int id){
        return users.stream().filter(x -> x.getID() == id).findFirst();
    }

    public Optional<UserResource> getUserByID(int id){
        Optional<User> optionalUser = getUserByIDLocal(id);
        if(optionalUser.isPresent()){
            User user = optionalUser.get();
            return Optional.of(userToUserResource(user));
        }
        return Optional.empty();
    }

    public UserResource addUser(UserDTO userDTO){
        User user = new User(userID, userDTO.getFirstname(), userDTO.getLastname(), userDTO.getEmail(), userDTO.getCart()==null? new ArrayList<>() : userDTO.getCart(), LocalDate.now());
        users.add(user);
        return userToUserResource(user);
    }

    public Optional<UserResource> editUser(int id, UserDTO userDTO){
        Optional<User> optionalUser = getUserByIDLocal(id);
        if(optionalUser.isPresent()){
            User user = optionalUser.get();
            if(userDTO.getLastname() != null && !userDTO.getLastname().equals("")) user.setLastname(userDTO.getLastname());
            if(userDTO.getFirstname() != null && !userDTO.getFirstname().equals("")) user.setFirstname(userDTO.getFirstname());
            if(userDTO.getCart() != null) user.setCart(userDTO.getCart());
            if(userDTO.getEmail() != null && !userDTO.getEmail().equals("")) user.setEmail(userDTO.getEmail());
            return Optional.of(userToUserResource(user));
        }
        return Optional.empty();
    }

    public Optional<UserResource> removeUser(int id){
        Optional<User> optionalUser = getUserByIDLocal(id);
        if(optionalUser.isPresent()){
            User user = optionalUser.get();
            users.remove(user);
            return Optional.of(userToUserResource(user));
        }
        return Optional.empty();
    }
}
