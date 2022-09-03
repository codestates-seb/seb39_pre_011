package com.example.server.answer;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity

public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answerId")
    private Long id;

    @JoinColumn(name = "userId")
    private Long user_id;

    @JoinColumn(name = "questionId")
    private long question_id;

    @Column
    private String content;

    @Column
    private int vote;
}
