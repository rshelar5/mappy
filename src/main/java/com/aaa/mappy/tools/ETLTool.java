package com.aaa.mappy.tools;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.InputStream;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Scanner;

import com.opencsv.CSVReader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ETLTool {

    public static void main(String[] args) {
        Logger logger = LoggerFactory.getLogger(ETLTool.class);
        
        try{

            logger.info("Starting ETL tool");
    
            System.out.println("Provide path to csv");
            Scanner scanner = new Scanner(System.in);
    
            //String filepath = scanner.next();
            String filepath = "/Users/rohanshelar/Desktop/Untitled.csv";
            File file = new File(filepath);
        
            logger.info("Selected file : " +filepath);
            logger.info("File exists " + file.exists());

            FileReader reader = new FileReader(file);
            CSVReader csvreader = new CSVReader(reader);
            
            List<String[]> records = csvreader.readAll();

            for (String[] record : records) {
                for (String stringsEntry : record) {
                    System.out.print(stringsEntry + " ");
                }
            }
        }
        catch(Exception e){
            logger.error("error occured in ETL Tool", e);
            
        }
    }
}