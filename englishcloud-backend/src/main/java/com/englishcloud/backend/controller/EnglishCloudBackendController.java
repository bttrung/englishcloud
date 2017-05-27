package com.englishcloud.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author Trung Bui Thanh
 */
@Controller
@RequestMapping("/ec")
public class EnglishCloudBackendController {

    @RequestMapping({"/home", "/"})
    public ModelAndView welcome() {
        return new ModelAndView("home");
    }

    @RequestMapping("/about")
    public ModelAndView about(Model model) {
        model.addAttribute("am", "About me: ");
        return new ModelAndView("about");
    }

}
