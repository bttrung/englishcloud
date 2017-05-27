package com.utils.crawler.service.impl;

import com.utils.crawler.json.JsonUtils;
import com.utils.crawler.model.SubjectDetails;
import com.utils.crawler.model.SubjectLink;
import com.utils.crawler.service.WebCrawlerService;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 *
 * @author user
 */
public class WebCrawlerServiceImpl implements WebCrawlerService {

    private static final String SUBJECT_LINK = "C:\\Users\\user\\Desktop\\Development\\english-assistance\\json\\subject-link.json";
    private static final String SUBJECT_DETAILS = "C:\\Users\\user\\Desktop\\Development\\english-assistance\\json\\subject-details.json";

    private Set<String> links = new HashSet<>();
    private List<SubjectLink> subjects = new ArrayList<>();

    @Override
    public void getSubjects(String URL) {
        if (!links.contains(URL)) {
            try {
                if (links.add(URL)) {
                    System.out.println(URL);
                }
                //2. Fetch the HTML code
                Document root = Jsoup.connect(URL).get();
                //3. Parse the HTML to extract links to other URLs
                Elements linksOnPage = root.select("a[href^=/useful-english-expressions/example\"]");

                for (Element page : linksOnPage) {
                    String href = page.attr("abs:href");
                    String subject = page.ownText();
                    subjects.add(new SubjectLink(subject, href));
                }

                JsonUtils.writeToFile(subjects, SUBJECT_LINK);

            } catch (IOException e) {
                System.err.println("For '" + URL + "': " + e.getMessage());
            } catch (InstantiationException | IllegalAccessException ex) {
                Logger.getLogger(WebCrawlerServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    public void getSubjectDetails(String path) throws IOException, InstantiationException, IllegalAccessException {
        List<SubjectLink> subjectLinks = JsonUtils.readFromFile(path);
        List<SubjectDetails> subjectDetails = new ArrayList<>();
        Iterator<SubjectLink> iterator = subjectLinks.iterator();
        while (iterator.hasNext()) {
            SubjectLink subjectLink = iterator.next();
            SubjectDetails details = new SubjectDetails();

            System.out.println(subjectLink.getLink());
            Document page = Jsoup.connect(subjectLink.getLink()).get();
            String description = page.select("meta[name=description]").get(0).attr("content");
            Elements orderLists = page.select("ol");
            Elements expressions = orderLists.get(0).select("li");

            for (Element element : expressions) {
                details.getExpressions().add(element.ownText());
            }

            Elements howToLists = orderLists.get(1).select("li");
            for (Element element : howToLists) {
                details.getExplanation().add(element.ownText());
            }

            details.setSubject(subjectLink.getSubject());
            details.setLink(subjectLink.getLink());
            details.setDescription(description);

            subjectDetails.add(details);
        }

        JsonUtils.writeToFile(subjectDetails, SUBJECT_DETAILS);
    }

    public static void main(String[] args) throws IOException, InstantiationException, IllegalAccessException {
        WebCrawlerServiceImpl webCrawlerServiceImpl = new WebCrawlerServiceImpl();
        //webCrawlerServiceImpl.getSubjects("https://www.ihbristol.com/useful-english-expressions/");
        webCrawlerServiceImpl.getSubjectDetails(SUBJECT_LINK);
    }
}
