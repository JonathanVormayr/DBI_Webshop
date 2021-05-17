package Controllers;

import DTOs.UserDTO;
import Resources.UserResource;
import Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<ArrayList<UserResource>> getUsers(){
        ArrayList<UserResource> users = userService.getUsers();
        if(users.size()>0) return new ResponseEntity<>(users, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResource> getUserById(@PathVariable int id){
            Optional<UserResource> searched = userService.getUserByID(id);
            return searched.map(userResource -> new ResponseEntity<>(userResource, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public UserResource addUser(@RequestBody UserDTO user){
        return userService.addUser(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResource> editUser(@PathVariable int id, @RequestBody UserDTO user){
        Optional<UserResource> optionalUserResource = userService.editUser(id, user);
        return optionalUserResource.map(userResource -> new ResponseEntity<>(userResource, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<UserResource> removeUser(@PathVariable int id){
        Optional<UserResource> removedUser = userService.removeUser(id);
        return removedUser.map(userResource -> new ResponseEntity<>(userResource, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));
    }


}
