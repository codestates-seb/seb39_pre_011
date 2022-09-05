import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../ui/Button";

function QuestionFilter() {
  return (
    <Container>
      <Select>
        <fieldset>
          <legend>Filter by</legend>
          <div>
            <input type="checkbox" />
            <label>No answers</label>
          </div>
          <div>
            <input checked disabled type="checkbox" />
            <label>No accepted answer</label>
          </div>
          <div>
            <input checked disabled type="checkbox" />
            <label>Has bounty</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Sorted by</legend>
          <div>
            <input name="SortedBy" type="radio" id="Newest" />
            <label for="Newest">Newest</label>
          </div>
          <div>
            <input disabled name="SortedBy" type="radio" id="activity" />
            <label for="activity">Recent activity</label>
          </div>
          <div>
            <input disabled name="SortedBy" type="radio" id="score" />
            <label for="score">Highest score</label>
          </div>
          <div>
            <input disabled name="SortedBy" type="radio" id="frequent" />
            <label for="frequent">Most frequent</label>
          </div>
          <div>
            <input disabled name="SortedBy" type="radio" id="Bounty" />
            <label for="Bounty">Bounty ending soon</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Tagged with</legend>
          <div>
            <input name="Tagged" type="radio" id="watched" />
            <label for="watched">My watched tags</label>
          </div>
          <div>
            <input name="Tagged" type="radio" id="following" />
            <label for="following">The following tags</label>
          </div>
        </fieldset>
      </Select>
      <FilterBtns>
        <ButtonPrimary padding={"9px"} width={"auto"} height={"auto"}>
          Apply filter
        </ButtonPrimary>

        <ButtonPrimary
          padding={"9px"}
          width={"auto"}
          height={"auto"}
          hoverbackground={"#b3d3ea"}
          background={"hsl(205,46%,92%)"}
          color={"hsl(205,47%,42%)"}
        >
          Save custom filter
        </ButtonPrimary>
      </FilterBtns>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #e3e6e8;
  border-radius: 3px;
  margin-bottom: 12px;
  font-size: 15px;
  background-color: hsl(210, 8%, 95%);
`;

const Select = styled.div`
  display: flex;

  > fieldset {
    margin: 16px;

    > legend {
      font-weight: 600;
      margin: 8px 0;
    }

    > div {
      display: flex;
      gap: 5px;
      margin: 10px 0;
    }
  }
`;

const FilterBtns = styled.div`
  border-top: 1px solid #e3e6e8;
  padding: 12px;
  display: flex;
  gap: 3px;
`;

export default QuestionFilter;
