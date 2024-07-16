import { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css"; // カレンダーのcss

export default function MyCalender() {
  const [value, setValue] = useState<Date | string>("");

  return (
    <>
      <CalendarContainer>
        <Calendar
          locale="ja-JP"
          value={value}
          onClickDay={(e) => setValue(e)}
        />
      </CalendarContainer>
      <div>{value.toString()}</div>
    </>
  );
}

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
  background-color: #d4f7d4;
  padding: 10px;
  border-radius: 3px;

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
      color: black;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
      color: black;
    }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
    color: black;
  }
  .react-calendar__month-view__days {
    text-align: center;
    color: black;
  }
  /* 土曜日だけ青色にする */
  .react-calendar
    .react-calendar__month-view__days__day--weekend:nth-child(7n-1) {
    color: #00f;
  }

  /* active時の文字の色（選択後の日付の色） */
  .react-calendar__tile--active {
    color: white !important;
  }

  /* 土曜を全部青色にしても今月以外は灰色にする */
  .react-calendar .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575 !important;
  }
`;
