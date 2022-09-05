package com.example.server.answer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/answer/{answer-id}")
public class AnswerController {

    // 답변 작성
    @PostMapping
    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerPatchDto) {
        return new ResponseEntity<>(answerPatchDto, HttpStatus.CREATED);
    }

    // 답변 수정
    @PatchMapping("/answer/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answerId") long answerId,
                                      @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        answerPatchDto.setContent("content");

        return new ResponseEntity<>(answerPatchDto, HttpStatus.OK);
    }

    // 답변 삭제
    @DeleteMapping("answer/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId) {

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
