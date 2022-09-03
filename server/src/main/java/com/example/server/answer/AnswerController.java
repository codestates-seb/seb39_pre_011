package com.example.server.answer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("answer")
public class AnswerController {

    // 답변 작성
    @PostMapping
    public ResponseEntity postAnswer(@RequestParam("answerId") long answerId,
                                     @RequestParam("userId") long userId,
                                     @RequestParam("questionId") long questionId,
                                     @RequestParam("content") String content,
                                     @RequestParam("vote") int vote) {

        Map<String, Object> body = new HashMap<>();
        body.put("answerId", answerId);
        body.put("userId", userId);
        body.put("questionId", questionId);
        body.put("content", content);
        body.put("vote", vote);


        return new ResponseEntity<Map>(body, HttpStatus.CREATED);

    }


    // 답변 수정
    @PatchMapping("/answer/{answer-id}")
    public ResponseEntity patchAnswer(@RequestParam("answerId") long answerId,
                                      @RequestParam("userId") long userId,
                                      @RequestParam("questionId") long questionId,
                                      @RequestParam("content") String content,
                                      @RequestParam("vote") int vote) {
        Map<String, Object> body = new HashMap<>();
        body.put("answerId", answerId);
        body.put("userId", userId);
        body.put("questionId", questionId);
        body.put("content", content);
        body.put("vote", vote);


        return new ResponseEntity<Map>(body, HttpStatus.OK);
    }

    // 답변 삭제
    @DeleteMapping("answer/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId) {

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
