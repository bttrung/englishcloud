package com.englishcloud.redis.webservice;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Trung Bui Thanh
 */
@Service
@RequestMapping("/ws")
public class RedisWebservice {

    @ResponseBody
    @RequestMapping("/")
    public String home() {
        return "Home";
    }

    @ResponseBody
    @RequestMapping(value = "/sayHello", method = RequestMethod.GET)
    public String sayHello() {
        return "Hello Spring MVC";
    }

    @ResponseBody
    @RequestMapping("/sayGoodbye")
    public String sayGoodbye() {
        return "Goodbye... :D";
    }
}
