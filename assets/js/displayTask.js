/* Height offset created by expansion of previous employee row */
let heightOffset = 0;

/* Object to hold task info for displaying */
function taskInfo(taskDiv, empRow, empName, start, end, height, length) {
    this.taskDiv = taskDiv;
    this.empRow = empRow;
    this.empName = empName
    this.start = start;
    this.end = end;
    this.height = height;
    this.length = length;
}

/* Sort task array by length of each task */
function compare(a, b) {
  if(parseInt(a.length, 10) < parseInt(b.length, 10)) { return 1;}
  if(parseInt(a.length, 10) > parseInt(b.length, 10)) { return -1;}
  return 0;
}

function displayTask(inputArry) {
  let divHeight = 0;
  let rowHeight = 0;
  let stackCount = 0;
  let countTemp = 0;
  let lastRow = [];

  /* If employee doesn't have any tasks, end */
  if(inputArry.length == 0) { return 0; }

  /* always print first task... first */
  divHeight = parseInt(inputArry[0].taskDiv.style.top, 10);
  divHeight += heightOffset;
  inputArry[0].taskDiv.style.top = divHeight + "px";
  document.getElementById(inputArry[0].empRow).appendChild(inputArry[0].taskDiv);

  for(let i = 1; i < inputArry.length; i++) {
    console.log(inputArry[i].taskDiv.innerHTML);
    for(let j = 0; j < i; j++) {
      if(j == 0) {
        divHeight = parseInt(inputArry[j].taskDiv.style.top, 10);
      }
      /* Skip tasks that are above current task */
      else if(parseInt(inputArry[j].taskDiv.style.top, 10) <= parseInt(inputArry[j-1].taskDiv.style.top, 10)) {
        continue;
      }

      /* If a task starts and ends on the same date for the same employee */
      /* [============]
         [============] */
      if((inputArry[i].start == inputArry[j].start && inputArry[i].end == inputArry[j].end)
         && (i != j)) {
        countTemp += 1;
        divHeight += 22;  // 22px below the div above
        console.log("1");
      }

      /* offset */
      /* [===============]
                 [===================] */
      else if(inputArry[i].start > inputArry[j].start && inputArry[i].start < inputArry[j].end
              && inputArry[i].end > inputArry[j].end) {
        countTemp += 1;
        divHeight += 22;  // 22px below the div above
        console.log("2");
      }

      /* offset */
      /*          [============]
            [============] */
      else if(inputArry[i].start < inputArry[j].start && inputArry[i].end > inputArry[j].start
              && inputArry[i].end < inputArry[j].end) {
        countTemp += 1;
        divHeight += 22;  // 22px below the div above
        console.log("3");
      }

      /* offset */
      /*[========================]
            [============] */
      else if(inputArry[i].start > inputArry[j].start && inputArry[i].end < inputArry[j].end) {
        countTemp += 1;
        divHeight += 22;  // 22px below the div above
        console.log("4");
      }

      /* offset */
      /*    [===============]
                  [=========] */
      else if(inputArry[i].start > inputArry[j].start && inputArry[i].end == inputArry[j].end) {
        countTemp += 1;
        divHeight += 22;  // 22px below the div above
        console.log("5");
      }

      /* offset */
      /*    [============]
            [=======] */
      else if(inputArry[i].start == inputArry[j].start && inputArry[i].end < inputArry[j].end) {
        countTemp += 1;
        divHeight += 22;  // 22px below the div above
        console.log("6");
      }

      /* offset */
      /*    [============]
                         [=======] */
      else if(inputArry[i].start > inputArry[j].start && inputArry[i].start == inputArry[j].end) {
        countTemp += 1;
        divHeight += 22;  // 22px below the div above
        console.log("7");
      }

      /* offset */
      /*    [============]
      [=====] */
      else if(inputArry[i].start < inputArry[j].start && inputArry[i].end == inputArry[j].start) {
        countTemp += 1;
        divHeight += 22;  // 22px below the div above
        console.log("8");
      }

      /* offset */
      /*    [============]
        [===================] */
      else if(inputArry[i].start < inputArry[j].start && inputArry[i].end > inputArry[j].end) {
        countTemp += 1;
        divHeight += 22;  // 22px below the div above
        console.log("9");
      }

      /* If the new tast doesn't overlap any previous tasks */
      else if(parseInt(inputArry[j].taskDiv.style.top, 10) <= divHeight) {
        console.log("10");
        inputArry[i].taskDiv.style.top = divHeight + "px";
        document.getElementById(inputArry[i].empRow).appendChild(inputArry[i].taskDiv);
        /* To find the max amount of stacks for height to fit all on row */
        if(countTemp > stackCount) { stackCount = countTemp; }
        break;
      }

      // else {
      //   divHeight = parseInt(inputArry[j].taskDiv.style.top, 10);
      //   divHeight += 22;
      //   console.log("11");
      // }

      inputArry[i].taskDiv.style.top = divHeight + "px";
      document.getElementById(inputArry[i].empRow).appendChild(inputArry[i].taskDiv);
      /* To find the max amount of stacks for height to fit all on row */
      if(countTemp > stackCount) { stackCount = countTemp; }
    }
    /* Calculate and set height of the employee row */
    rowHeight += 40 + (22 * stackCount);
    countTemp = 0;
    if(rowHeight > document.getElementById(inputArry[i].empRow).offsetHeight) {
      document.getElementById(inputArry[i].empRow).style.height = rowHeight + "px";
      document.getElementById(inputArry[i].empName).style.height = rowHeight + "px";
    }
    divHeight = 0;
    rowHeight = 0;
    stackCount = 0;
  }
  /* get height of row before */
  heightOffset += document.getElementById(inputArry[0].empRow).offsetHeight - 40;
}

$(document).ready(function() {
  $('#Task Bar').remove();

  let empArry = [];
  let dateArry = [];
  let empTaskArry = [];
  let empTask = new taskInfo();
  let employee;
  let startIndex;
  let endIndex;
  let taskLength;
  let taskHeight = 0;
  let divTask;

  /* Pulls all dates and stores in array */
  var dates = document.querySelectorAll("[class='dTableDates days']");
  for(var i = 0; i < dates.length; i++) {
    dateArry.push(dates[i].innerText);
  }

  /* Populate array with all employee information */
  for(let i = 0; i < localStorage.length; i++) {
    empArry.push(localStorage.key(i));
  }

  /* Find the start and end position of the task */
  for(let i = 0; i < empArry.length; i++) {
    employee = JSON.parse(localStorage.getItem(empArry[i]));
    if ("Task" in employee) {
      for (let taskIndex = 0; taskIndex < employee.Task.length; taskIndex++) {
        for(let j = 0; j < dateArry.length; j++) {
          if (employee.Task[taskIndex]["Task Start Date"] == dateArry[j]) {
            startIndex = j;
          }
          if (employee.Task[taskIndex]["Task End Date"] == dateArry[j]) {
            endIndex = j;
          }
        }

        /* Format of the task bar on the table */
        // 140 is length of one cell on the Table
        // 40 is height of one cell on the table
        taskLength = ((((endIndex - startIndex) + 1) * 140) - 4) + "px";
        divTask = document.createElement("div");
        divTask.setAttribute("class", "dTask");
        divTask.style.width = taskLength;
        divTask.style.top = (50 + (40 * i)) + "px";   // 50 is to push task down from top away from fixed header
        taskHeight = divTask.style.top;
        divTask.style.left = (142 + (140 * startIndex)) + "px";   // 142 is to line task up with the first cell of each row
        divTask.style.backgroundColor = employee["Employee Color"];
        divTask.innerHTML += employee.Task[taskIndex]["Task Name"];
        divTask.id = "Task Bar";

        /* Change color of text of the div text */
        var rgb = employee["Employee Color"];
        var colr;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(rgb)) {
          colr = rgb.substring(1).split('');
          if (colr.length == 3) {
            colr = [colr[0], colr[0], colr[1], colr[1], colr[2], colr[2]];
          }
          colr = '0x' + colr.join('');
          var rgb = [(colr >> 16) & 255, (colr >> 8) & 255, colr & 255].join(',') + ',1'
        }
        bgroundColor = Math.round(((parseInt(rgb[0]) * 299) +
        (parseInt(rgb[1]) * 587) +
        (parseInt(rgb[2]) * 114)) / 2);
        var newTextColor = (bgroundColor > 125) ? 'black' : 'white';
        divTask.style.color = newTextColor;

        /* Save and push to task info array for position checking */
        empTask = new taskInfo(divTask, "emp0-" + i, "emp-" + i, startIndex, endIndex, taskHeight, taskLength);
        empTaskArry.push(empTask);
        //document.getElementById("emp0-" + i).appendChild(divTask);
      }
      empTaskArry.sort(compare)
      displayTask(empTaskArry);
      empTaskArry = [];
    }
  }
});
