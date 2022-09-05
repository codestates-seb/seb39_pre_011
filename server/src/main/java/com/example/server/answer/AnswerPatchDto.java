package com.example.server.answer;

public class AnswerPatchDto {
    private long answerId;
    private String content;

    public long getAnswerId() {
        return answerId;
    }
    public void setAnswerId(long answerId) {
        this.answerId = answerId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

}
