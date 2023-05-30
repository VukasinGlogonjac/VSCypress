import { MONTHS } from "../fixtures/constants";

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = Object.values(MONTHS)[date.getMonth()];
const yesterday = date.getDate() - 1;

class DatePicker {
  get taskBodyTabs() {
    return cy
      .get('div[class="vs-c-modal__body-right el-col el-col-10"]')
      .find(".el-tabs");
  }

  get taskWorklog() {
    return this.taskBodyTabs.find(".el-tabs__item").eq(1);
  }

  get manageWorklog() {
    return cy.get('button[title="Manage Worklog"]');
  }

  get manageDateIcon() {
    return cy.get('i[class="el-input__icon el-icon-date"');
  }

  get datepicker() {
    return cy.get('div[class="el-picker-panel__content"]').find("tbody").eq(0);
  }

  get datepickerHeader() {
    return cy.get(".el-date-picker__header");
  }

  get dateInputField() {
    return cy.get('input[placeholder="Start date"]');
  }

  getFutureDate = (daysFromNow) => {
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysFromNow);

    let dd = targetDate.getDate();
    let mm = targetDate.getMonth();
    let yyyy = targetDate.getFullYear();

    if (dd < 10) {
      dd = `0${dd}`;
    }

    let dateString = `${dd} ${Object.values(MONTHS)[mm]} ${yyyy}`;

    return dateString;
  };

  omitZeroInFutureDate = (daysFromNow) => {
    let date = this.getFutureDate(daysFromNow);

    if (date[0] == 0) {
      return date.substring(1, 2);
    }
  };

  getDatePickerYear() {
    this.datepickerHeader
      .find("span")
      .first()
      .should(($span) => {
        expect($span.get(0).innerText.trim()).to.be.equal(
          currentYear.toString()
        );
      });
  }

  getDatePickerMonth() {
    this.datepickerHeader
      .find("span")
      .last()
      .should(($span) => {
        expect($span.get(0).innerText.trim()).to.be.equal(currentMonth);
      });
  }

  getDate(day, className, condition = "") {
    return this.datepicker
      .find("td")
      .contains(day)
      .should(`${condition}have.class`, className)
      .and(`${condition}have.css`, "background-color", "rgb(78, 174, 147)");
  }

  checkIfTodaysDateIsCorrect(className) {
    return this.datepicker
      .find("td")
      .contains(yesterday)
      .next()
      .should("contain", "Today")
      .and("have.class", className)
      .and("have.css", "background-color", "rgb(78, 174, 147)");
  }

  getfuturesDate(className, condition = "") {
    return this.datepicker
      .find("td")
      .get(".available")
      .contains(this.futureDate)
      .should(`${condition}have.class`, className)
      .and(`${condition}have.css`, "background-color", "rgb(78, 174, 147)");
  }

  datePickerSuccess() {
    let day = yesterday;
    // cy.log(yesterday)
    // cy.log(tommorowsDate)
    // cy.log(currentMonth)
    // cy.log(currentYear)

    // cy.log(fiveDaysFromNow)
    // cy.log(futureMonth)
    // cy.log(futureDate)
    this.taskWorklog.click();
    this.manageWorklog.click();
    this.manageDateIcon.click();
    this.checkIfTodaysDateIsCorrect("available today current");
    this.getDate(day, "available current", "not.").click();
    this.getDate(day, "available current");
    this.manageDateIcon.click();
    this.getDatePickerMonth();
    this.getDatePickerYear();
    // this.futuresDate(futureDate, 'available current', 'not.')
    this.dateInputField.clear().type();
    this.manageDateIcon.click();
    this.manageDateIcon.click();
    this.getfuturesDate("available current");
  }
}
export const datePicker = new DatePicker();
