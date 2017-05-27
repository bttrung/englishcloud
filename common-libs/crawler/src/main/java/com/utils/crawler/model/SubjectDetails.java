package com.utils.crawler.model;

import java.util.ArrayList;
import java.util.List;
import lombok.Data;

/**
 *
 * @author Trung Bui Thanh
 */
@Data
public class SubjectDetails {

    private String subject;
    private String description;
    private String link;
    private List<String> expressions = new ArrayList<>();
    private List<String> explanation = new ArrayList<>();
}
