package com.aaa.mappy.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoggingController {

	
	@RequestMapping("/")
	public String defaultMapping() {
		Logger logger = LoggerFactory.getLogger(LoggingController.class);
		logger.debug("Hi called");
		return "welcome ";
	}
}
