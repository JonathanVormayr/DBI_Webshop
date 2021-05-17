package Controllers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "/Services, /Controllers")
public class MainService {
    public static void main(String[] args){
        SpringApplication.run(MainService.class, args);
    }
}
