package com.cafe.board.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Schema(title = "BoardListDto : 게시글 목록 & 페이지 정보", description = "게시글 목록과 현재 페이지와 전체 페이지 정보를 나타낸다.")
public class BoardListDto {

    @Schema(description = "글목록")
    private List<BoardDto> articles;
    @Schema(description = "현재 페이지번호")
    private int currentPage;
    @Schema(description = "전체 페이지 수")
    private int totalPageCount;

}
