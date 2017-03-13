"use strict";

function getInfo(value){
  var p = document.createElement("p");
  p.textContent = value;
  return p;
}

function mediaText(item){
  var mediaBody = document.createElement("div")
  mediaBody.classList.add("media-body");
  mediaBody.appendChild(getInfo(item.title));
  mediaBody.appendChild(getInfo(item.description));
  return mediaBody;
}

function column(item){
  var col = document.createElement("div");
  col.classList.add("col");
  col.appendChild(mediaText(item));
  return col;
}

function showRecs(items){
  var row = document.querySelector(".row");
  row.textContent = "";
  items.forEach(function(item){
    row.appendChild(column(item));
  });
}

showRecs(ITEMS);

var authorInput = document.querySelector("#larson")
authorInput.addEventListener("click", function(){
  var filtered = ITEMS.filter(function(item){
    return item.author == "Erik Larson";
  });
  showRecs(filtered);
})

var settingInput = document.querySelector("#chicago")
settingInput.addEventListener("click", function(){
  var filtered = ITEMS.filter(function(item){
    return item.setting == "Chicago";
  });
  showRecs(filtered);
})

var timeInput = document.querySelector("#century")
timeInput.addEventListener("click", function(){
  var filtered = ITEMS.filter(function(item){
    return item.time-period == "1890s";
    return item.time-period == "1900s";
    return item.time-period == "1910s";
    });
  showRecs(filtered);
})

var crimeInput = document.querySelector("#trueCrime")
crimeInput.addEventListener("click", function(){
  var filtered = ITEMS.filter(function(item){
    return item.genre = "true crime";
  });
  showRecs(filtered);
})

var historyInput = document.querySelector("#history")
historyInput.addEventListener("click", function(){
  var filtered = ITEMS.filter(function(item){
    return item.genre = "history";
  });
  showRecs(filtered);
})

var narrativeInput = document.querySelector("#narrative")
crimeInput.addEventListener("click", function(){
  var filtered = ITEMS.filter(function(item){
    return item.genre = "narrative nonfiction";
  });
  showRecs(filtered);
})

var fairInput = document.querySelector("#fair")
fairInput.addEventListener("click", function(){
  var filtered = ITEMS.filter(function(item){
    return item.subject = "Chicago World's Fair";
  });
  showRecs(filtered);
})

var killersInput = document.querySelector("#killers")
killersInput.addEventListener("click", function(){
  var filtered = ITEMS.filter(function(item){
    return item.subject = "serial killers";
  });
  showRecs(filtered);
})

var architectureInput = document.querySelector("#architecture")
architectureInput.addEventListener("click", function(){
  var filtered = ITEMS.filter(function(item){
    return item.subject = "architecture";
  });
  showRecs(filtered);
})

var murderInput = document.querySelector("#murder")
fairInput.addEventListener("click", function(){
  var filtered = ITEMS.filter(function(item){
    return item.subject.toLowerCase().indexOf(murderInput.value.toLowerCase()) >= 0;
  });
  showRecs(filtered);
})

var holmesInput = document.querySelector("#holmes")
holmesInput.addEventListener("click", function(){
  var filtered = ITEMS.filter(function(item){
    return item.subject == "Dr. H. H. Holmes";
  });
  showRecs(filtered);
})