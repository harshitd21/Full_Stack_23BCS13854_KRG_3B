import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;


// -------------------- COMPONENT --------------------
@Component
class MessageFormatter {

    public String format(String name) {
        return "User: " + name;
    }
}


// -------------------- REPOSITORY --------------------
@Repository
class UserRepository {

    public void save(String formattedName) {
        System.out.println("Saving to database: " + formattedName);
    }
}


// -------------------- SERVICE --------------------
@Service
class UserService {

    @Autowired
    private MessageFormatter formatter;

    @Autowired
    private UserRepository repository;

    public String addUser(String name) {
        String formatted = formatter.format(name); // using component
        repository.save(formatted);               // using repository
        return formatted;
    }
}


// -------------------- CONTROLLER --------------------
@RestController
@RequestMapping("/user")
class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/add")
    public String createUser(@RequestParam String name) {
        return service.addUser(name);
    }
}
