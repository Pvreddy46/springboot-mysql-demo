package com.spring.db.demo.exceptionhandle;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.util.CollectionUtils;
import org.springframework.web.client.RestTemplate;


@Configuration
public class RestClientConfig {
 
    @Bean
    public RestTemplate restTemplate() {
    	 System.out.println("===========================request begin RestClientConfig================================================");
         
        RestTemplate restTemplate = new RestTemplate();
 
        List<ClientHttpRequestInterceptor> interceptors
          = restTemplate.getInterceptors();
        if (CollectionUtils.isEmpty(interceptors)) {
            interceptors = new ArrayList<>();
        }
        interceptors.add(new RequestResponseLoggingInterceptor());
        restTemplate.setInterceptors(interceptors);
        return restTemplate;
    }
}