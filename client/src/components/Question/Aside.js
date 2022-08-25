import React from "react";
import styled from "styled-components";

function Aside() {
  return (
    <Container>
      <div className="filter">
        <div>Custom Filter</div>
        <div>Create a custom filter</div>
      </div>
      <div className="watch_tags">
        <div>Watched Tags</div>
        <div>
          <div>🔍</div>
          <div>Watch tags to curate your list of questions.</div>
          <button>
            <span>👀</span>Watch a tag
          </button>
        </div>
      </div>
      <div className="ignore_tags">
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

  .filter {
    border: 1px solid beige;
    border-radius: 3px;
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);

    > div:nth-child(1) {
      padding: 12px 15px;
      background-color: beige;
      border-bottom: 1px solid beige;
    }
    > div:nth-child(2) {
      padding: 15px 15px;
    }
  }
  .watch_tags {
    border: 1px solid beige;
    border-radius: 3px;
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);

    > div:nth-child(1) {
      padding: 12px 15px;
      background-color: beige;
      border-bottom: 1px solid beige;
    }
    > div:nth-child(2) {
      padding: 15px 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      text-align: center;
    }
  }
  .ignore_tags {
    border: 1px solid beige;
    border-radius: 3px;
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);

    > div:nth-child(1) {
      padding: 12px 15px;
      background-color: beige;
      border-bottom: 1px solid beige;
    }
    > div:nth-child(2) {
      padding: 15px 15px;
      text-align: center;
    }
  }
  .tags {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > h4 {
      margin: 16px 0;
    }
  }
`;

export default Aside;
