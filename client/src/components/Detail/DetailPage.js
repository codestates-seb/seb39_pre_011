import React from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import { Tag } from "../ui/Tag";
import { ReactComponent as ArrowTop } from "./../../assets/arrowtop.svg";
import { ReactComponent as ArrowBottom } from "./../../assets/arrowbottom.svg";
import { ReactComponent as BookMark } from "./../../assets/bookmark.svg";
import { ReactComponent as Time } from "./../../assets/time.svg";
import { updatePostData } from "../../api/postApi";
import usePostStore from "../../store/postStore";

function DetailPage() {
  const { singlePost, setSinglePost } = usePostStore();

  const handleUp = () => {
    let count = singlePost.vote;
    count++;
    let modified = { ...singlePost, ...{ vote: count } };
    updatePostData(singlePost.id, modified).then(() => setSinglePost(modified));
  };
  const handleDown = () => {
    let count = singlePost.vote;
    if (count > 0) {
      count--;
    }
    let modified = { ...singlePost, ...{ vote: count } };
    updatePostData(singlePost.id, modified).then(() => setSinglePost(modified));
  };

  return (
    <Container>
      <Side>
        <ArrowTop onClick={handleUp} />
        <span>{singlePost.vote}</span>
        <ArrowBottom onClick={handleDown} />
        <BookMark />
        <Time />
      </Side>
      <Content>
        <p>{singlePost.body}</p>
        <div className="content_tags">
          {singlePost.tags
            ? singlePost.tags.map((el, idx) => (
                <Tag className="tag" key={idx}>
                  {el}
                </Tag>
              ))
            : null}
        </div>
        <div className="content_footer">
          <div>
            <button>Share</button>
            <button>Edit</button>
            <button>Follow</button>
          </div>
          <UserInfo />
        </div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 16px;

  svg {
    cursor: pointer;
    fill: rgb(186, 191, 196);
  }

  button {
    border: none;
    background-color: #ffffff;
    cursor: pointer;
    color: rgb(131, 140, 149);
    margin: 5px;
  }
`;

const Side = styled.div`
  width: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Content = styled.div`
  width: calc(100% - 50px);

  > p {
    font-size: 15px;
    color: #232629;
    line-height: 22.5px;

    /* > pre {
      white-space: pre-wrap;
    } */
  }

  > .content_tags {
    margin: 24px 0 12px 0;

    .tag {
      margin-right: 3px;
    }
  }
  > .content_footer {
    display: flex;
    justify-content: space-between;

    button {
      font-size: 13px;
    }
  }
`;

export default DetailPage;
