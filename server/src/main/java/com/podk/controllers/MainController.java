package com.podk.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import io.swagger.annotations.Api;

@Controller
@Api(hidden = true)
public class MainController {

	@RequestMapping("/")
	@ResponseBody
	public String index() {
		return "A PodK production";
	}

}
