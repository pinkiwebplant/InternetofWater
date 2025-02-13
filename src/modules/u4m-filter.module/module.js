window.addEventListener("DOMContentLoaded", function () {
  let getLIstingWrap = document.querySelector(".main-listing");

  setTimeout(function () {
    getLIstingWrap.classList.add("loaddedList");
  });
});

var filterlabeln = document.querySelectorAll(".filter_label");

filterlabeln.forEach((label) => {
  label.addEventListener("click", (event) => {
    event.currentTarget.parentElement.classList.toggle("dropdownopen");
  });
});

document.querySelectorAll(".filter_label").forEach((filterLabel) => {
  filterLabel.addEventListener("click", function (e) {
    const selctArrow = this.parentElement;
    const siblings = Array.from(selctArrow.parentElement.children).filter(
      (child) => child !== selctArrow
    );
    siblings.forEach((sibling) => sibling.classList.remove("dropdownopen"));
    e.stopPropagation();
  });
});

document.body.addEventListener("click", function () {
  document.querySelectorAll(".selctArrow").forEach((selctArrow) => {
    selctArrow.classList.remove("dropdownopen");
  });
});

document.querySelectorAll(".filter_label").forEach((filterLabel) => {
  filterLabel.addEventListener("click", function () {
    const selctArrow = this.parentElement;
    const siblings = Array.from(selctArrow.parentElement.children).filter(
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

const wrapper = document.querySelector(".resourceList");
const pagination = document.querySelector(".pagination");
const items = Array.from(document.querySelectorAll(".resourceCard"));
let filteredItems = items;
let currPage = 1;
const TagSelect = document.querySelector(".resourceSelect");

const tagSelect = document.querySelector(".tagSelect");
const tagSelectValueAttr = $(tagSelect).attr("data-value");
const typeSelect = document.querySelector(".typeSelect");
const typeSelectValueAttr = $(typeSelect).attr("data-value");

const TagSelectCheck = document.querySelectorAll(".tagSelect .tagInput");
const TypeSelectCheck = document.querySelectorAll(".typeSelect .typeInput");
const searchField = document.querySelector(".resourceInput");

let typeArrayValues = "";
let tagArrayValues = "";

function typeArrayUpdate(value) {
  typeArrayValues = value;
}

function tagArrayUpdate(value) {
  tagArrayValues = value;
}

var params = new URLSearchParams(window.location.search);

var typeParam = params.get("type");
var tagParam = params.get("tag");
var typeArray = typeParam?.length > 0 ? typeParam?.split(",") : [];
var tagArray = tagParam?.length > 0 ? tagParam?.split(",") : [];

$(document).on("change", ".tagInput", function (event) {
  const value = $(this).val();
  const getValue = $(this).attr("data-tag");
  var url = window.location.href.split("?")[0];
  var newUrl;
  const inputValue = searchField.value;
  let typeSelectValue = $(".typeSelect").attr("data-value");
  let tagSelectValue = $(".tagSelect").attr("data-value");

  if ($(this).is(":checked")) {
    if (value?.length > 0) {
      tagArray.push(value);
    }
  } else {
    $(this).prop("checked", false);
    tagArray.splice(tagArray.indexOf(value), 1);
  }
  if (tagArray.length > 0) {
    if (window.location.href.indexOf("?") > 0) {
      newUrl =
        url + "?type=" + typeArray.join(",") + "&tag=" + tagArray.join(",");
    } else {
      newUrl =
        url + "?type=" + typeArray.join(",") + "&tag=" + tagArray.join(",");
    }
    window.history.pushState({ path: newUrl }, "", newUrl);
    $(".listing-wrap .cardSctn").load(
      newUrl + " .listing-wrap .cardSctn .resourceList"
    );
    $(".pagination").load(newUrl + " .pagination .nav-links");
  } else {
    window.history.pushState({ path: url }, "", url);
    $(".listing-wrap .cardSctn").load(
      url + " .listing-wrap .cardSctn .resourceList"
    );
    $(".pagination").load(url + " .pagination .nav-links");
  }
  tagArrayUpdate(tagArray);
  typeArrayUpdate(typeArray);
});

$(document).on("change", ".typeInput", function (event) {
  const value = $(this).val();
  const getValue = $(this).attr("data-type");
  var url = window.location.href.split("?")[0];
  var newUrl;
  const inputValue = searchField.value;
  let typeSelectValue = $(".typeSelect").attr("data-value");
  let tagSelectValue = $(".typeSelect").attr("data-value");
  if ($(this).is(":checked")) {
    if (value?.length > 0) {
      typeArray.push(value);
    }
  } else {
    $(this).prop("checked", false);
    typeArray.splice(typeArray.indexOf(value), 1);
  }
  if (typeArray.length > 0) {
    if (window.location.href.indexOf("?") > 0) {
      newUrl =
        url + "?type=" + typeArray.join(",") + "&tag=" + tagArray.join(",");
    } else {
      newUrl =
        url + "?type=" + typeArray.join(",") + "&tag=" + tagArray.join(",");
    }
    window.history.pushState({ path: newUrl }, "", newUrl);
    $(".listing-wrap .cardSctn").load(
      newUrl + " .listing-wrap .cardSctn .resourceList"
    );
    $(".pagination").load(newUrl + " .pagination .nav-links");
    $(typeSelect).attr("data-value", getValue);
  } else {
    window.history.pushState({ path: url }, "", url);
    $(".listing-wrap .cardSctn").load(
      url + " .listing-wrap .cardSctn .resourceList"
    );
    $(".pagination").load(url + " .pagination .nav-links");
    typeArray = [];
    $(typeSelect).attr("data-value", "");
  }
  tagArrayUpdate(tagArray);
  typeArrayUpdate(typeArray);
});
$(document).on("click", ".pagi_wranation .nav-links a", function (event) {
  event.preventDefault();
  const currentPageWithQuery = $(this).attr("href");
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
const debounce = (fn, delay = 1000) => {
  let timerId = null;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
};
const onInput = debounce(function (currentTarget) {
  const getSearchValue = currentTarget.val();
  const formattedValue = getSearchValue.replace(/\s+/g, "+");
  const getPageNum = currentTarget.data("page-num");
  var url = window.location.href.split("?")[0];
  let tagSelectValue = $(".tagSelect").attr("data-value");
  let typeSelectValue = $(".typeSelect").attr("data-value");
  if (getSearchValue != "") {
    if (window.location.href.indexOf("?") > 0) {
      newUrl =
        url +
        "?tag=" +
        tagArray.join(",") +
        "&type=" +
        typeArray.join(",") +
        "&search=" +
        formattedValue;
    } else {
      newUrl =
        url +
        "?tag=" +
        tagArray.join(",") +
        "&type=" +
        typeArray.join(",") +
        "&search=" +
        formattedValue;
    }
    window.history.pushState({ path: newUrl }, "", newUrl);
    $(".listing-wrap .cardSctn").load(
      newUrl + " .listing-wrap .cardSctn .resourceList"
    );
    $(".pagination").load(newUrl + " .pagination .nav-links");
    $(".tag-col .type_filter").load(newUrl + " .tag-col .type_filter > div");
  } else {
    window.history.pushState({ path: url }, "", url);
    $(".listing-wrap .cardSctn").load(
      url + " .listing-wrap .cardSctn .resourceList"
    );
    $(".tag-col .type_filter").load(url + " .tag-col .type_filter > div");
    $(".pagination").load(url + " .pagination .nav-links");
    typeArray = [];
    tagArray = [];
  }
}, 500);
$(".srchSection .resourceInput").on("keyup", function (event) {
  event.preventDefault();
  onInput($(this));
});
function loadEvents() {
  const url = window.location.href;
  const path = new URL(url).pathname;
  const parts = path.split("/resources");
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
