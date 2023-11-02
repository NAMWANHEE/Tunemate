package com.example.tunemateuserservice.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseAuth {
    private String accessToken;
    private String refreshToken;
    private String userId;
}
