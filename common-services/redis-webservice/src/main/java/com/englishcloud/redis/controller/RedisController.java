package com.englishcloud.redis.controller;

import com.englishcloud.redis.common.service.RedisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author Trung Bui Thanh
 */
@Controller
@RequestMapping("/redis")
public class RedisController {

    @Autowired
    private RedisService redisService;

    @RequestMapping({"/home", "/"})
    public ModelAndView welcome() {
        return new ModelAndView("home");
    }

    @RequestMapping("/about")
    public ModelAndView about(Model model) {
        model.addAttribute("am", "About me: ");
        return new ModelAndView("about");
    }

    @RequestMapping("/getRedisServers")
    public ModelAndView getRedisServers(Model model) {
        String redisServers = redisService.getRedisServers();
        model.addAttribute("am", "Redis Servers: " + redisServers);
        return new ModelAndView("about");
    }
}
