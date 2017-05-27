package com.utils.crawler.json;

import com.utils.crawler.model.SubjectLink;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

/**
 *
 * @author user
 */
public class JsonUtils {

    public static void writeToFile(Map<String, String> maps, String filepath) throws InstantiationException, IllegalAccessException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(new File(filepath), maps);
    }

    public static void writeToFile(List lists, String filepath) throws InstantiationException, IllegalAccessException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(new File(filepath), lists);
    }

    public static List<SubjectLink> readFromFile(String filePath) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        List<SubjectLink> subjectLinks = mapper.readValue(new File(filePath),new TypeReference<List<SubjectLink>>(){});
        return subjectLinks;
    }
}
