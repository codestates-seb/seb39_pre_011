package com.example.server.question;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@Entity


public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "questionId")
    private long id;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user_id")
//    private User user;

    @Column
    private String title;

    @Column
    private String body;

    @Column
    private String tags;

    @Column
    @CreatedDate
    private LocalDateTime create_at;

    @Column
    @LastModifiedDate
    private LocalDateTime update_at;

    @Column
    private int vote;

    @Column
    private int view;
}
