package com.example.server.question;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("question/post")
public class QuestionController {
    // 질문 작성
    @PostMapping
    public ResponseEntity postQuestion(@RequestParam("questionId") long questionId,
                                       @RequestParam("title") String title,
                                       @RequestParam("body") String body,
                                       @RequestParam("tags") String tags,
                                       @RequestParam("created_at") LocalDateTime created_at,
                                       @RequestParam("update_at") LocalDateTime update_at,
                                       @RequestParam("vote") int vote,
                                       @RequestParam("view") int view) {

        Map<String, Object> map = new HashMap<>();
        map.put("questionId", questionId);
        map.put("title", title);
        map.put("body", body);
        map.put("tags", tags);
        map.put("created_at", created_at);
        map.put("update_at", update_at);
        map.put("vote", vote);
        map.put("view", view);

        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    // 질문 수정
    @PatchMapping("/question/{question-id}")
    public ResponseEntity patchQuestion(@RequestParam("question-Id") long questionId,
                                        @RequestParam("title") String title,
                                        @RequestParam("body") String body,
                                        @RequestParam("tags") String tags,
                                        @RequestParam("created_at") LocalDateTime created_at,
                                        @RequestParam("update_at") LocalDateTime update_at,
                                        @RequestParam("vote") int vote,
                                        @RequestParam("view") int view) {
        Map<String, Object> map = new HashMap<>();
        map.put("questionId", questionId);
        map.put("title", title);
        map.put("body", body);
        map.put("tags", tags);
        map.put("created_at", created_at);
        map.put("update_at", update_at);
        map.put("vote", vote);
        map.put("view", view);

        return new ResponseEntity(map, HttpStatus.OK);
    }

    //질문 검색
    @GetMapping("/question/serch")
    public ResponseEntity getQuestion(@PathVariable("body") String body) {
        System.out.println("# body: " + body);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 질문 정렬
    @GetMapping
    public ResponseEntity getQuestion() {
        System.out.println("# get Question");

        return new ResponseEntity<>(HttpStatus.OK);
    }


    // 질문 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") long questionId) {

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}


