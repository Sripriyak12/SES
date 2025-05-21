package com.smartsplit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontendController {

    @RequestMapping(value = "/{[path:[^\\.]*}")
    public String redirect() {
        // This forwards all paths that don't contain a dot (i.e., not a file like .css or .js) to index.html
        return "forward:/index.html";
    }
}
