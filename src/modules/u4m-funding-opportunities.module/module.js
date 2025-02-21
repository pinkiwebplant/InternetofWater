window.addEventListener("DOMContentLoaded", function () {
  let getLIstingWrap = document.querySelector(".main-listing");

  setTimeout(function () {
    getLIstingWrap.classList.add("loaddedList");
  });
});

var filterlabeln = document.querySelectorAll(".filter_label");


document.body.addEventListener("click", function () {
  document.querySelectorAll(".selctArrow").forEach((selctArrow) => {
    selctArrow.classList.remove("dropdownopen");
  });
});

document.querySelectorAll(".filter_label").forEach((filterLabel) => {
  filterLabel.addEventListener("click", function () {
    let selctArrow = this.parentElement;
    let siblings = Array.from(selctArrow.parentElement.children).filter(
      (child) => child !== selctArrow
    );
    siblings.forEach((sibling) => sibling.classList.remove("dropdownopen"));
  });
});

document.querySelectorAll(".filter_dropdown").forEach((filterDropdown) => {
  filterDropdown.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

$('.srchSection input').on('input', function(){
  $(this).data('value', $(this).val());
});

let wrapper = document.querySelector(".resourceList");
let pagination = document.querySelector(".pagination");
let items = Array.from(document.querySelectorAll(".resourceCard"));
let filteredItems = items;
let currPage = 1;
let TagSelect = document.querySelector(".resourceSelect");

let tagSelect = document.querySelector(".tagSelect");
let tagSelectValueAttr = $(tagSelect).attr("data-value");

let typeSelect = document.querySelector(".typeSelect");
let typeSelectValueAttr = $(typeSelect).attr("data-value");

let excludeInputWrap = document.querySelector(".excludeInputWrap");
let excludeInput = document.querySelector(".excludeInput");
let excludeInputAttr = $(excludeInputWrap).attr("data-value");


let fundMinInput = document.querySelector(".fund_minWrap input");
let fundMinValue = fundMinInput.value;
let fundMinValueAttr = $(fundMinInput)?.attr("data-value") || "";

let fundMaxInput = document.querySelector(".fund_maxWrap input");
let fundMaxValue = fundMaxInput.value;
let fundMaxValueAttr = $(fundMaxInput)?.attr("data-value") || "";

let timeMinInput = document.querySelector(".time_minWrap input");
let timeMinValue = timeMinInput.value;
let timeMinValueAttr = $(timeMinInput)?.attr("data-value") || "";

let timeMaxInput = document.querySelector(".time_maxWrap input");
let timeMaxValue = timeMaxInput.value;
let timeMaxValueAttr = $(timeMaxInput)?.attr("data-value") || "";





let TagSelectCheck = document.querySelectorAll(".tagSelect .tagInput");
let TypeSelectCheck = document.querySelectorAll(".typeSelect .typeInput");
let searchField = document.querySelector(".resourceInput");

let typeArrayValues = "";
let tagArrayValues = "";
let excluded = "";


function tagArrayUpdate(value) {
  tagArrayValues = value;
}

var params = new URLSearchParams(window.location.search);

var typeParam = params.get("type");
var tagParam = params.get("tag");


var tagArray = tagParam?.length > 0 ? tagParam?.split(",") : [];





function fetchData(tagInputValue,input1,input2,input3,input4,exclude){
  var url = window.location.href.split("?")[0];
  var newUrl;
  newUrl =
    url +
    "?tag=" +
    tagArray.join(",") +
    "&fundmin=" +
    input1 +
    "&fund_max=" +
    input2 +
    "&time_min=" +
    input3 +
    "&time_max=" +
    input4  +
  "&exclude=" +
    exclude;

  window.history.pushState({ path: newUrl }, "", newUrl);
  $(".listing-wrap .cardSctn").load(
    newUrl + " .listing-wrap .cardSctn .resourceList"
  );
  $(".pagination").load(newUrl + " .pagination .nav-links");

  console.log(input1,'input1',input2,'input2',input3,'input3',input4,'input4','exclude',exclude)
}


$(document).on("change", ".tagInput", function (event) {
  let value = $(this).val();
  let getValue = $(this).attr("data-tag");
  var url = window.location.href.split("?")[0];
  var newUrl;
  let inputValue = searchField.value;
  let typeSelectValue = $(".typeSelect").attr("data-value");
  let tagSelectValue = $(".tagSelect").attr("data-value");

  let excludeInputValue = $(".excludeInput").val();

  
  let fundMinValue = document.querySelector(".fund_minWrap input").value;
  let fundMaxValue = document.querySelector(".fund_maxWrap input").value;
  let timeMinValue = document.querySelector(".time_minWrap input").value;
  let timeMaxValue = document.querySelector(".time_maxWrap input").value;
  let input1Value = fundMinValue;
  let input2Value = fundMaxValue ;
  let input3Value = timeMinValue;
  let input4Value = timeMaxValue;
  let fundMinValueFormatted = input1Value.replace(/\s+/g, "+");
  let fundMaxValueFormatted = input2Value.replace(/\s+/g, "+");
  let timeMinValueFormatted = input3Value.replace(/\s+/g, "+");
  let timeMaxValueFormatted = input4Value.replace(/\s+/g, "+");


  if ($(this).is(":checked")) {
    if (value?.length > 0) {
      tagArray.push(value);
    }
  } else {
    $(this).prop("checked", false);
    tagArray.splice(tagArray.indexOf(value), 1);
  }

  if (tagArray.length > 0) {
    var arrayValue = tagArray.join(",")
    fetchData(arrayValue,
              fundMinValueFormatted,
              fundMaxValueFormatted,
              timeMinValueFormatted,
              timeMaxValueFormatted,
              excludeInputValue
             )

  }else{
    fetchData('',
              fundMinValueFormatted,
              fundMaxValueFormatted,
              timeMinValueFormatted,
              timeMaxValueFormatted,
              excludeInputValue
             )
  }


  tagArrayUpdate(tagArray);

});

$(document).on("change", ".typeInput", function (event) {
  let value = $(this).val();

  let getValue = $(this).attr("data-type");
  var url = window.location.href.split("?")[0];
  var newUrl;
  let inputValue = searchField.value;
  let typeSelectValue = $(".typeSelect").attr("data-value");
  let tagSelectValue = $(".typeSelect").attr("data-value");

  //   let currentValueFormatted = currentValue.replace(/\s+/g, "+");
  let fundMinValue = document.querySelector(".fund_minWrap input").value;
  let fundMaxValue = document.querySelector(".fund_maxWrap input").value;
  let timeMinValue = document.querySelector(".time_minWrap input").value;
  let timeMaxValue = document.querySelector(".time_maxWrap input").value;
  let input1Value = fundMinValue;
  let input2Value = fundMaxValue ;
  let input3Value = timeMinValue;
  let input4Value = timeMaxValue;
  let fundMinValueFormatted = input1Value.replace(/\s+/g, "+");
  let fundMaxValueFormatted = input2Value.replace(/\s+/g, "+");
  let timeMinValueFormatted = input3Value.replace(/\s+/g, "+");
  let timeMaxValueFormatted = input4Value.replace(/\s+/g, "+");

  //   let excludeInputValue = $(".excludeInput").val();
  console.log(value,'value')
  var arrayValue = tagArray.join(",")
  if ($(this).is(":checked")) {

    fetchData(arrayValue,
              fundMinValueFormatted,
              fundMaxValueFormatted,
              timeMinValueFormatted,
              timeMaxValueFormatted,
              true
             )
  }
  else{
    fetchData(arrayValue,
              fundMinValueFormatted,
              fundMaxValueFormatted,
              timeMinValueFormatted,
              timeMaxValueFormatted,
              false
             )
  }



  tagArrayUpdate(tagArray);


});



$(document).on("click", ".pagi_wranation .nav-links a", function (event) {
  event.preventDefault();
  let currentPageWithQuery = $(this).attr("href");
  window.history.pushState(
    { path: currentPageWithQuery },
    "",
    currentPageWithQuery
  );
  $(".listing-wrap .cardSctn").load(
    currentPageWithQuery + " .listing-wrap .cardSctn .resourceList"
  );
  $(".pagination").load(currentPageWithQuery + " .pagination .nav-links");
  $(".tag-col .type_filter").load(
    currentPageWithQuery + " .tag-col .type_filter > div"
  );
});
let debounce = (fn, delay = 1000) => {
  let timerId = null;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
};

// let fundMinValue = 



let resourceInput = debounce(function (currentTarget) {
  let currentValue = currentTarget.val();
  var url = window.location.href.split("?")[0];
  var newUrl;

  let fundMaxValue = document.querySelector(".fund_maxWrap input").value;
  let timeMinValue = document.querySelector(".time_minWrap input").value;
  let timeMaxValue = document.querySelector(".time_maxWrap input").value;
  //   let input1Value = fundMinValue;
  let input2Value = fundMaxValue ;
  let input3Value = timeMinValue;
  let input4Value = timeMaxValue;

  let input1Value = currentValue.replace(/\s+/g, "+");
  let currentValueFormatted = currentValue.replace(/\s+/g, "+");
  //   let fundMinValueFormatted = input1Value.replace(/\s+/g, "+");
  let fundMaxValueFormatted = input2Value.replace(/\s+/g, "+");
  let timeMinValueFormatted = input3Value.replace(/\s+/g, "+");
  let timeMaxValueFormatted = input4Value.replace(/\s+/g, "+");

  console.log("check value",
              currentValueFormatted,
              fundMaxValueFormatted,
              //     fundMinValueFormatted,
              timeMinValueFormatted,
              timeMaxValueFormatted
             );

  let getPageNum = currentTarget.data("page-num");
  //   let url = window.location.href.split("?")[0];
  let tagSelectValue = $(".tagSelect").attr("data-value");
  let typeSelectValue = $(".typeSelect").attr("data-value");
  let excludeInputValue = $(".excludeInput").val();

  if (currentValueFormatted != '' ) {
    var arrayValue = tagArray.join(",")
    fetchData(arrayValue,
              currentValueFormatted,
              fundMaxValueFormatted,
              timeMinValueFormatted,
              timeMaxValueFormatted,
              excludeInputValue
             )

  }else{
    var arrayValue = tagArray.join(",")
    fetchData(arrayValue,
              '',
              fundMaxValueFormatted,
              timeMinValueFormatted,
              timeMaxValueFormatted,
              excludeInputValue
             )
  }


}, 500);

$(".srchSection .resourceInput").on("keyup", function (event) {
  event.preventDefault();
  resourceInput($(this));
});



let resourceInput1 = debounce(function (currentTarget) {
  let currentValue = currentTarget.val();
  var url = window.location.href.split("?")[0];
  var newUrl;

  let fundMinValue = document.querySelector(".fund_minWrap input").value;
  let fundMaxValue = document.querySelector(".fund_maxWrap input").value;
  let timeMinValue = document.querySelector(".time_minWrap input").value;
  let timeMaxValue = document.querySelector(".time_maxWrap input").value;
  let input1Value = fundMinValue;
  //   let input2Value = fundMaxValue ;
  let input3Value = timeMinValue;
  let input4Value = timeMaxValue;

  let input2Value = currentValue.replace(/\s+/g, "+");
  let currentValueFormatted = currentValue.replace(/\s+/g, "+");

  let fundMinValueFormatted = input1Value.replace(/\s+/g, "+");
  //   let fundMaxValueFormatted = input2Value.replace(/\s+/g, "+");
  let timeMinValueFormatted = input3Value.replace(/\s+/g, "+");
  let timeMaxValueFormatted = input4Value.replace(/\s+/g, "+");


  let getPageNum = currentTarget.data("page-num");
  //   let url = window.location.href.split("?")[0];
  let tagSelectValue = $(".tagSelect").attr("data-value");
  let typeSelectValue = $(".typeSelect").attr("data-value");
  let excludeInputValue = $(".excludeInput").val();

  if (currentValueFormatted != '' ) {
    var arrayValue = tagArray.join(",")
    fetchData(arrayValue,
              fundMinValueFormatted,
              currentValueFormatted,
              timeMinValueFormatted,
              timeMaxValueFormatted,
              excludeInputValue
             )

  }else{
    var arrayValue = tagArray.join(",")
    fetchData(arrayValue,
              fundMinValueFormatted,
              '',
              timeMinValueFormatted,
              timeMaxValueFormatted,
              excludeInputValue
             )
  }


}, 500);

$(".srchSection .resourceInput1").on("keyup", function (event) {
  event.preventDefault();
  resourceInput1($(this));
});




let resourceInput2 = debounce(function (currentTarget) {
  let currentValue = currentTarget.val();
  var url = window.location.href.split("?")[0];
  var newUrl;

  console.log(
    currentTarget
  );

  let fundMinValue = document.querySelector(".fund_minWrap input").value;
  let fundMaxValue = document.querySelector(".fund_maxWrap input").value;
  //   let timeMinValue = document.querySelector(".time_minWrap input").value;
  let timeMaxValue = document.querySelector(".time_maxWrap input").value;
  let input1Value = fundMinValue;
  let input2Value = fundMaxValue ;
  //   let input3Value = timeMinValue;
  let input4Value = timeMaxValue;

  let input3Value = currentValue.replace(/\s+/g, "+");
  let currentValueFormatted = currentValue.replace(/\s+/g, "+");
  let fundMinValueFormatted = input1Value.replace(/\s+/g, "+");
  let fundMaxValueFormatted = input2Value.replace(/\s+/g, "+");
  //   let timeMinValueFormatted = input3Value.replace(/\s+/g, "+");
  let timeMaxValueFormatted = input4Value.replace(/\s+/g, "+");

  let getPageNum = currentTarget.data("page-num");
  //   let url = window.location.href.split("?")[0];
  let tagSelectValue = $(".tagSelect").attr("data-value");
  let typeSelectValue = $(".typeSelect").attr("data-value");

  let excludeInputValue = $(".excludeInput").val();

  if (currentValueFormatted !== '' ) {
    var arrayValue = tagArray.join(",")
    fetchData(arrayValue,
              fundMinValueFormatted,
              fundMaxValueFormatted,
              currentValueFormatted,
              timeMaxValueFormatted,
              excludeInputValue
             )

  }else{
    var arrayValue = tagArray.join(",")
    fetchData(arrayValue,
              fundMinValueFormatted,
              fundMaxValueFormatted,
              '',
              timeMaxValueFormatted,
              excludeInputValue
             )
  }


}, 500);

$(".srchSection .resourceInput2").on("keyup", function (event) {
  event.preventDefault();
  resourceInput2($(this));
});


let resourceInput3 = debounce(function (currentTarget) {
  let currentValue = currentTarget.val();
  var url = window.location.href.split("?")[0];
  var newUrl;

  console.log(
    currentTarget
  );

  let fundMinValue = document.querySelector(".fund_minWrap input").value;
  let fundMaxValue = document.querySelector(".fund_maxWrap input").value;
  let timeMinValue = document.querySelector(".time_minWrap input").value;
  //   let timeMaxValue = document.querySelector(".time_maxWrap input").value;
  let input1Value = fundMinValue;
  let input2Value = fundMaxValue ;
  let input3Value = timeMinValue;
  //   let input4Value = timeMaxValue;

  let input4Value = currentValue.replace(/\s+/g, "+");
  let currentValueFormatted = currentValue.replace(/\s+/g, "+");
  let fundMinValueFormatted = input1Value.replace(/\s+/g, "+");
  let fundMaxValueFormatted = input2Value.replace(/\s+/g, "+");
  let timeMinValueFormatted = input3Value.replace(/\s+/g, "+");
  //   let timeMaxValueFormatted = input4Value.replace(/\s+/g, "+");

  let getPageNum = currentTarget.data("page-num");
  //   let url = window.location.href.split("?")[0];
  let tagSelectValue = $(".tagSelect").attr("data-value");
  let typeSelectValue = $(".typeSelect").attr("data-value");

  let excludeInputValue = $(".excludeInput").val();

  if (currentValueFormatted !== '' ) {
    var arrayValue = tagArray.join(",")
    fetchData(arrayValue,
              fundMinValueFormatted,
              fundMaxValueFormatted,
              timeMinValueFormatted,
              currentValueFormatted,
              excludeInputValue
             )

  }else{
    var arrayValue = tagArray.join(",")
    fetchData(arrayValue,
              fundMinValueFormatted,
              fundMaxValueFormatted,
              timeMinValueFormatted,
              '',
              excludeInputValue
             )
  }


}, 500);

$(".srchSection .resourceInput3").on("keyup", function (event) {
  event.preventDefault();
  resourceInput3($(this));
});


function loadEvents() {
  let url = window.location.href;
  let path = new URL(url).pathname;
  let parts = path.split("/resources");
  var topicText = parts.length > 1 ? parts[1].replace("/", "") : null;
  $(".topic_ele").each(function () {
    var getTopic = $(this).attr("data-topic-url");
    if (getTopic === topicText) {
      $(".filter_dropdown.topicSelect").addClass(
        "active_tag_url_matched pageis_",
        +getTopic
      );
      $(this).click();
    }
  });
}
$(document).ready(function () {
  loadEvents();
});

$(".clearfilter_button").click(function () {
  var getUrl = window.location.href;
  var getSplitUrl = window.location.href.split("?")[0];
  $(".selctArrow input[type='checkbox']").prop("checked", false);

  window.location.href = getSplitUrl;
});




