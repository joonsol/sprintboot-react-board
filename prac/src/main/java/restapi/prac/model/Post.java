package restapi.prac.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    // 생성자는 lombok이 생성해주므로 아래는 제거
    // public Post(){}
    // public Post(String title, String content){
    //     this.title=title;
    //     this.content=content;
    // }

    // getter/setter도 Lombok이 생성하므로 제거
}
