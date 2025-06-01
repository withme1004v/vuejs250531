package com.cafe.config;


//Swagger-UI 확인
//http://localhost/vue/swagger-ui/index.html

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        info = @Info(
                title = "VUE CAFE API 명세서",
                description = "<h3>CAFE API Reference for Developers</h3>Swagger를 이용한 VUE API<br><img src=\"/vue/img/mmcafe.png\" width=\"150\">",
                version = "v1",
                contact = @Contact(
                        name = "hissam",
                        email = "hissam@cafe.com",
                        url = "http://vue.cafe.com"
                )
        )
)
@Configuration
public class SwaggerConfiguration {

//	@Bean
//	public OpenAPI openAPI() {
//		Info info = new Info().title("VUE CAFE API 명세서").description(
//				"<h3>CAFE API Reference for Developers</h3>Swagger를 이용한 VUE API<br><img src=\"/assets/img/mmcafe.png\" width=\"150\">")
//				.version("v1").contact(new io.swagger.v3.oas.models.info.Contact().name("hissam")
//						.email("hissam@cafe.com").url("http://vue.cafe.com"));
//
//		return new OpenAPI().components(new Components()).info(info);
//	}

    @Bean
    public GroupedOpenApi allApi() {
        return GroupedOpenApi.builder().group("cafe-all").pathsToMatch("/**").build();
    }

    @Bean
    public GroupedOpenApi boardApi() {
        return GroupedOpenApi.builder().group("cafe-board").pathsToMatch("/board/**").build();
    }

    @Bean
    public GroupedOpenApi userApi() {
        return GroupedOpenApi.builder().group("cafe-user").pathsToMatch("/user/**").build();
    }

    @Bean
    public GroupedOpenApi mapApi() {
        return GroupedOpenApi.builder().group("cafe-map").pathsToMatch("/map/**").build();
    }

}
