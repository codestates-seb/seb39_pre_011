package com.example.server.answer;

public class AnswerPostDto {
    private long answerId;
    private long userId;
    private long questionId;
    private String content;
    private int vote;

    public long getAnswerId() {
        return answerId;
    }

    public long getUserId() {
        return userId;
    }

    public long getQuestionId() {
        return questionId;
    }

    public String getContent() {
        return content;
    }

    public int getVote() {
        return vote;
    }
}

