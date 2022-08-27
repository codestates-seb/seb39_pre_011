import React from "react";
import styled from "styled-components";

function Aside() {
  return (
    <Container>
      <div className="filter">
        <div>Custom Filter</div>
        <div>Create a custom filter</div>
      </div>
      <div className="filter_tags">
        <div>Watched Tags</div>
        <div>
          <div className="icon">🔍</div>
          <div>Watch tags to curate your list of questions.</div>
          <button>
            <span>👀</span>Watch a tag
          </button>
        </div>
      </div>
      <div className="filter_tags">
        <div>Ignored Tags</div>
        <div>
          <button>Add an ignored tag</button>
        </div>
      </div>
      <div className="tags">
        <h4>Related Tags</h4>
        <div>
          <span>javascript</span>
          <span> x 241552</span>
        </div>
        <div>
          <span>javascript</span>
          <span> x 241552</span>
        </div>
        <div>
          <span>javascript</span>
          <span> x 241552</span>
        </div>
        <div>
          <span>javascript</span>
          <span> x 241552</span>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
  font-size: 13px;

  .filter {
    border: 1px solid #d6d9dc;
    border-radius: 3px;
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);

    > div:nth-child(1) {
      padding: 12px 15px;
      border-bottom: 1px solid #d6d9dc;
      background-color: #f8f9f9;
      color: #525960;
    }
    > div:nth-child(2) {
      padding: 15px 15px;
    }
  }
  .filter_tags {
    border: 1px solid #d6d9dc;
    border-radius: 3px;
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);

    > div:nth-child(1) {
      padding: 12px 15px;
      border-bottom: 1px solid #d6d9dc;
      background-color: #f8f9f9;
      color: #525960;
    }
    > div:nth-child(2) {
      padding: 15px 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      text-align: center;
    }
    button {
      background-color: #b3d3ea;
      border: 1px solid #7aa7ce;
      border-radius: 3px;
      padding: 10px;
      color: rgb(44, 88, 199);
      font-size: 12px;
    }
  }
  .tags {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h4 {
      margin: 16px 0;
      font-size: 20px;
    }
    span:nth-child(1) {
      color: #39739d;
      background-color: #e1ecf4;
      padding: 4px 6px;
      border-radius: 3px;
    }
    span:nth-child(2) {
      color: rgb(106, 115, 124);
      font-size: 12px;
    }
  }
  .icon {
    font-size: 40px;
    margin: 10px 0;
  }
`;

export default Aside;
