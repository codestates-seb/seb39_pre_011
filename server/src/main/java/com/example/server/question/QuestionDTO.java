package com.example.server.question;

import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;


public class QuestionDTO {
    private long questionId;
    private String title;
    private String body;
    private String tags;
    private LocalDateTime created_at;
    private LocalDateTime update_at;
    private int vote;
    private int view;

    public long getQuestionId() {
        return questionId;
    }

    public String getTitle() {
        return title;
    }

    public String getBody() {
        return body;
    }

    public String getTags() {
        return tags;
    }
    public LocalDateTime getCreated_at() {
        return created_at;
    }
    public LocalDateTime getUpdate_at() {
        return update_at;
    }
    public int getVote() {
        return vote;
    }
    public int getView() {
        return view;
    }
}
