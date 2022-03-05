package com.aaa.mappy;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class RestGatewayApplication {

	public static void main(String[] args) {
		Logger logger = LoggerFactory.getLogger(RestGatewayApplication.class);
		SpringApplication.run(RestGatewayApplication.class, args);

		logger.info("Starting mapper server");

		// FileInputStream fileInputStream =  new FileInputStream("");

		// BufferedInputStream fileStream = new BufferedInputStream(fileInputStream);
	}
	
	
	

}
