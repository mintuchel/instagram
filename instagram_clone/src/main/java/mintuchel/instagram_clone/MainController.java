package mintuchel.instagram_clone;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@Slf4j
public class MainController {

    @GetMapping("/")
    String loginPage(){
        log.info("login page");
        return "html/loginForm";
    }

    @PostMapping("/main")
    String feedPage(@RequestParam("user_id") String userId, Model model){
        log.info("main page");
        log.info("userId: {}", userId);
        model.addAttribute("userId", userId);
        return "html/mainForm";
    }
}
