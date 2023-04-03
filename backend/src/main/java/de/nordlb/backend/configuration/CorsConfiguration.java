package de.nordlb.backend.configuration;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.List;

@Configuration
public class CorsConfiguration {


    @Value("${ALLOWED_ORIGINS}")
    private String allowedOrigins;

    @Bean
    public CorsFilter corsFilter() {

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        org.springframework.web.cors.CorsConfiguration config = new org.springframework.web.cors.CorsConfiguration();
        // setAllowCredentials(true) is important, otherwise:
        // The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.
        config.setAllowCredentials(true);
        Arrays.asList(allowedOrigins.split(",")).forEach(config::addAllowedOrigin);
        config.addAllowedMethod("*");
        config.setAllowedHeaders(Arrays.asList("Access-Control-Allow-Origin", "Authorization", "Accept", "Content-Type"));
        config.setExposedHeaders(List.of("Access-Control-Allow-Origin"));
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
